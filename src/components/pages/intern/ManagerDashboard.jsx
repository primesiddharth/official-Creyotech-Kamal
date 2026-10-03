import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { managerLogin } from "../../../services/authService";
import { fetchStudentsForManager, deleteStudent, regenerateAccess } from "../../../services/managerService";
import { imageUrl } from "../../../services/studentService";
import StatusPill from "./StatusPill";
import StudentFormModal from "./StudentFormModal";

const LinkPopup = ({ link, onClose }) => {
  const fullUrl = `${window.location.origin}${link}`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="text-lg font-semibold text-text-primary">Verification link</h2>
        <p className="mt-1 text-sm text-muted">Share this with the student. It won't be shown again.</p>
        <div className="mt-3 break-all rounded-lg border border-border-light bg-bg-soft p-3 text-xs">{fullUrl}</div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => { navigator.clipboard.writeText(fullUrl); toast.success("Copied."); }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
          >
            Copy
          </button>
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm font-medium text-muted hover:bg-bg-soft">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ManagerDashboard = () => {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [linkToShow, setLinkToShow] = useState(null);

  const loadStudents = () => {
    fetchStudentsForManager()
      .then((res) => { setStudents(res.data); setAuthed(true); })
      .catch(() => setAuthed(false))
      .finally(() => setChecking(false));
  };

  useEffect(() => { loadStudents(); }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    try {
      await managerLogin(password);
      loadStudents();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoggingIn(false);
    }
  };

  const handleDelete = async (student) => {
    if (!window.confirm(`Remove ${student.name}? This cannot be undone.`)) return;
    try {
      await deleteStudent(student.id);
      toast.success("Removed.");
      loadStudents();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleRegenerate = async (student) => {
    try {
      const result = await regenerateAccess(student.id);
      toast.success("Access regenerated.");
      setLinkToShow(result.verificationLink);
      loadStudents();
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (checking) return <div className="flex min-h-screen items-center justify-center bg-bg-soft text-muted">Loading…</div>;

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-soft px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-2xl border border-border-light bg-white p-8 shadow-soft">
          <h1 className="text-lg font-semibold text-text-primary">Manager access</h1>
          <p className="mt-1 text-sm text-muted">Enter the password to manage intern records.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-4 w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
          <button type="submit" disabled={loggingIn} className="mt-4 w-full rounded-lg bg-primary py-2 text-sm font-medium text-white disabled:opacity-50">
            {loggingIn ? "Checking…" : "Unlock"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-soft px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-text-primary">Intern records</h1>
            <p className="mt-1 text-sm text-muted">Add, edit, and manage verification access.</p>
          </div>
          <button onClick={() => { setEditing(null); setModalOpen(true); }} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
            Add intern
          </button>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-border-light bg-white shadow-soft">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-soft text-xs text-muted">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Course</th>
                <th className="px-4 py-3">Roll no.</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="border-t border-border-light">
                  <td className="flex items-center gap-3 px-4 py-3 whitespace-nowrap">
                    <img src={imageUrl(s.image_path)} alt={s.name} className="h-9 w-9 rounded-lg object-cover" />
                    {s.name}
                  </td>
                  <td className="px-4 py-3 text-muted">{s.email}</td>
                  <td className="px-4 py-3 text-muted">{s.course_name}</td>
                  <td className="px-4 py-3 tabular-nums text-muted">{s.university_roll_no}</td>
                  <td className="px-4 py-3"><StatusPill expiresAt={s.expires_at} /></td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-3 text-xs font-medium whitespace-nowrap">
                      <button onClick={() => { setEditing(s); setModalOpen(true); }} className="text-primary">Edit</button>
                      <button onClick={() => handleRegenerate(s)} className="text-emerald-600">Regenerate</button>
                      <button onClick={() => handleDelete(s)} className="text-rose-600">Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-muted">No interns added yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <StudentFormModal
          student={editing}
          onClose={() => setModalOpen(false)}
          onSaved={(verificationLink) => {
            setModalOpen(false);
            loadStudents();
            if (verificationLink) setLinkToShow(verificationLink);
          }}
        />
      )}

      {linkToShow && <LinkPopup link={linkToShow} onClose={() => setLinkToShow(null)} />}
    </div>
  );
};

export default ManagerDashboard;