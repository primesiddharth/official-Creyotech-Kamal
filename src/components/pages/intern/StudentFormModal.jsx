import { useState } from "react";
import toast from "react-hot-toast";
import { createStudent, updateStudent } from "../../../services/managerService";

const emptyForm = {
  name: "", email: "", phone_number: "", aadhar_number: "",
  address_line_1: "", address_line_2: "", post_office_name: "", police_station_name: "",
  city_name: "", district_name: "", state_name: "", country_name: "India", postal_code: "",
  college_name: "", university_name: "", university_roll_no: "", course_name: "",
};

const StudentFormModal = ({ student, onClose, onSaved }) => {
  const isEdit = Boolean(student);
  const [form, setForm] = useState(
    isEdit
      ? {
          name: student.name, email: student.email,
          phone_number: student.phone_number.replace(/^\+91/, ""),
          aadhar_number: "",
          address_line_1: student.address_line_1, address_line_2: student.address_line_2 || "",
          post_office_name: student.post_office_name, police_station_name: student.police_station_name,
          city_name: student.city_name, district_name: student.district_name,
          state_name: student.state_name, country_name: student.country_name, postal_code: student.postal_code,
          college_name: student.college_name, university_name: student.university_name,
          university_roll_no: student.university_roll_no, course_name: student.course_name,
        }
      : emptyForm,
  );
  const [skills, setSkills] = useState([""]);
  const [image, setImage] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSkillChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };
  const addSkill = () => { if (skills.length < 4) setSkills([...skills, ""]); };
  const removeSkill = (index) => setSkills(skills.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const fullPhone = "+91" + form.phone_number.replace(/\D/g, "");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "aadhar_number" && isEdit && !value) return;
      if (key === "phone_number") {
        formData.append(key, fullPhone);
        return;
      }
      formData.append(key, value);
    });
    if (image) formData.append("image", image);
    skills.filter((s) => s.trim()).forEach((s) => formData.append("skills", s.trim()));

    try {
      if (isEdit) {
        await updateStudent(student.id, formData);
        toast.success("Student updated.");
        onSaved(null);
      } else {
        const result = await createStudent(formData);
        toast.success("Student added.");
        onSaved(result.verificationLink);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const basicFields = [
    ["name", "Full name"],
    ["email", "Email"],
  ];

  const addressFields = [
    ["address_line_1", "Address line 1"],
    ["address_line_2", "Address line 2 (optional)"],
    ["post_office_name", "Post office"],
    ["police_station_name", "Police station"],
    ["city_name", "City"],
    ["district_name", "District"],
    ["state_name", "State"],
    ["postal_code", "Postal code"],
  ];

  const academicFields = [
    ["college_name", "College name"],
    ["university_name", "University name"],
    ["university_roll_no", "University roll no."],
    ["course_name", "Course name"],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="text-lg font-semibold text-text-primary">
          {isEdit ? "Edit intern" : "Add intern"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          <div className="grid grid-cols-2 gap-3">
            {basicFields.map(([key, label]) => (
              <div key={key}>
                <label className="mb-1 block text-xs text-muted">{label}</label>
                <input
                  type={key === "email" ? "email" : "text"}
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
            <label className="mb-1 block text-xs text-muted">Phone number</label>
            <div className="flex">
              <span className="flex items-center rounded-l-lg border border-r-0 border-border-light bg-bg-soft px-3 text-sm text-muted">
                +91
              </span>
              <input
                type="text"
                name="phone_number"
                value={form.phone_number}
                onChange={(e) => setForm({ ...form, phone_number: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                required
                maxLength={10}
                placeholder="10-digit number"
                className="w-full rounded-r-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium text-muted">Address</p>
            <div className="grid grid-cols-2 gap-3">
              {addressFields.map(([key, label]) => (
                <div key={key}>
                  <label className="mb-1 block text-xs text-muted">{label}</label>
                  <input
                    type="text"
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    required={!label.includes("optional")}
                    className="w-full rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium text-muted">Academic details</p>
            <div className="grid grid-cols-2 gap-3">
              {academicFields.map(([key, label]) => (
                <div key={key}>
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
          </div>

          <div>
            <label className="mb-1 block text-xs text-muted">Skills (1 to 4)</label>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    placeholder={`Skill ${index + 1}`}
                    className="flex-1 rounded-lg border border-border-light px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                  {skills.length > 1 && (
                    <button type="button" onClick={() => removeSkill(index)} className="text-rose-500">✕</button>
                  )}
                </div>
              ))}
            </div>
            {skills.length < 4 && (
              <button type="button" onClick={addSkill} className="mt-2 text-sm text-primary">+ Add skill</button>
            )}
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
            <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 text-sm font-medium text-muted hover:bg-bg-soft">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentFormModal;