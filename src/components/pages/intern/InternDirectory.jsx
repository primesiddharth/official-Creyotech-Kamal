import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllStudents, imageUrl } from "../../../services/studentService";

const InternDirectory = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllStudents()
      .then(setStudents)
      .finally(() => setLoading(false));
  }, []);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-bg-soft px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold text-text-primary">Intern directory</h1>
        <p className="mt-1 text-sm text-muted">All interns registered with Creyotech.</p>

        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-6 w-full max-w-xs rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />

        {loading ? (
          <p className="mt-8 text-sm text-muted">Loading…</p>
        ) : filtered.length === 0 ? (
          <p className="mt-8 text-sm text-muted">No interns match that search.</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(`/intern-information-verification/${s.slug}`)}
                className="flex items-center gap-3 rounded-xl border border-border-light bg-white p-4 text-left shadow-soft transition hover:border-primary/40"
              >
                <img
                  src={imageUrl(s.image_path)}
                  alt={s.name}
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-text-primary">{s.name}</p>
                  <p className="truncate text-xs text-muted">{s.course_name}</p>
                  <p className="truncate text-xs text-muted">{s.college_name}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternDirectory;