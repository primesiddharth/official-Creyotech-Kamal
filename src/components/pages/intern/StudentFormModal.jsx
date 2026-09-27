import { useState } from "react";
import toast from "react-hot-toast";
import { createStudent, updateStudent } from "../../../services/managerService";

const emptyForm = {
  name: "", phone_number: "", address: "", aadhar_number: "",
  college_name: "", university_name: "", university_roll_no: "", course_name: "",
};

const StudentFormModal = ({ student, onClose, onSaved }) => {
  const isEdit = Boolean(student);
  const [form, setForm] = useState(
    isEdit
      ? {
          name: student.name, phone_number: student.phone_number, address: student.address,
          aadhar_number: "", college_name: student.college_name, university_name: student.university_name,
          university_roll_no: student.university_roll_no, course_name: student.course_name,
        }
      : emptyForm,
  );
  const [image, setImage] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "aadhar_number" && isEdit && !value) return; // edit mode, not changing aadhaar
      formData.append(key, value);
    });
    if (image) formData.append("image", image);

    try {
      if (isEdit) {
        await updateStudent(student.id, formData);
        toast.success("Student updated.");
      } else {
        await createStudent(formData);
        toast.success("Student added.");
      }
      onSaved();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const fields = [
    ["name", "Full name"],
    ["phone_number", "Phone number"],
    ["college_name", "College name"],
    ["university_name", "University name"],
    ["university_roll_no", "University roll no."],
    ["course_name", "Course name"],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="text-lg font-semibold text-text-primary">
          {isEdit ? "Edit intern" : "Add intern"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {fields.map(([key, label]) => (
              <div key={key} className={key === "name" ? "col-span-2" : ""}>
                <label className="mb-1 block text-xs text-muted">{label}</label>
                <input
                  type="text"
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="mb-1 block text-xs text-muted">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows={2}
              className="w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-muted">
              Aadhaar number {isEdit && "(leave blank to keep unchanged)"}
            </label>
            <input
              type="text"
              name="aadhar_number"
              value={form.aadhar_number}
              onChange={handleChange}
              required={!isEdit}
              maxLength={12}
              className="w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-muted">
              Photo (JPG/PNG, under 500 KB) {isEdit && "— leave blank to keep current"}
            </label>
            <input
              type="file"
              accept="image/jpeg,image/png"
              onChange={(e) => setImage(e.target.files[0])}
              required={!isEdit}
              className="w-full text-sm"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted hover:bg-bg-soft"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentFormModal;