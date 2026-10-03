import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchStudentBySlug, imageUrl } from "../../../services/studentService";

const InternVerification = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentBySlug(slug, token)
      .then(setStudent)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug, token]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-bg-soft text-muted">Loading…</div>;
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-soft px-4">
        <div className="max-w-sm rounded-2xl border border-border-light bg-white p-8 text-center shadow-soft">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">!</div>
          <h1 className="text-lg font-semibold text-text-primary">Link expired or invalid</h1>
          <p className="mt-2 text-sm text-muted">{error}</p>
        </div>
      </div>
    );
  }

  const address = [
    student.address_line_1, student.address_line_2, student.post_office_name,
    student.police_station_name, student.city_name, student.district_name,
    student.state_name, student.country_name, student.postal_code,
  ].filter(Boolean).join(", ");

  const fields = [
    { label: "College", value: student.college_name },
    { label: "University", value: student.university_name },
    { label: "Course", value: student.course_name },
    { label: "University roll no.", value: student.university_roll_no },
    { label: "Phone number", value: student.phone_number },
    { label: "Email", value: student.email },
    { label: "Address", value: address },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-soft px-4 py-12">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border-light bg-white shadow-soft">
        <div className="relative h-24 bg-gradient-to-r from-primary to-primary-100/40">
          <span className="absolute left-6 top-4 text-sm font-semibold tracking-tight text-white/90">Creyotech</span>
        </div>

        <div className="px-6 pb-6">
          <div className="-mt-12 mb-4 flex items-end justify-between">
            <img src={imageUrl(student.image_path)} alt={student.name} className="h-24 w-24 rounded-xl border-4 border-white object-cover shadow-soft" />
            <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Verified
            </span>
          </div>

          <h1 className="text-xl font-semibold text-text-primary">{student.name}</h1>
          <p className="text-sm text-muted">{student.course_name} · {student.university_name}</p>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border-light pt-5">
            {fields.map((field) => (
              <div key={field.label} className={field.label === "Address" ? "col-span-2" : ""}>
                <p className="text-xs text-muted">{field.label}</p>
                <p className="mt-0.5 text-sm font-medium text-text-primary tabular-nums">{field.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted">
            Valid until {new Date(student.expires_at).toLocaleDateString()}. Expired? Contact your manager to regenerate this link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternVerification;