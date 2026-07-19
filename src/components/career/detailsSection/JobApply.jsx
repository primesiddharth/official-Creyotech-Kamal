import { useState } from "react";
import { submitCareerForm } from "../../../services/careerService";
import {
  FileText,
  Shield,
  GraduationCap,
  User,
  Mail,
  MessageCircle,
  Briefcase,
  Loader2,
} from "lucide-react";

import FormField from "./FormField";
import UploadCard from "./UploadCard";
import ApplicationSuccess from "./ApplicationSuccess";

function JobApply({ job, compact = false }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    agreed: false,
  });

  const [files, setFiles] = useState({
    resume: null,
    govtProof: null,
    education: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (key, file) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    }

    if (!files.resume) {
      newErrors.resume = "Please upload your resume";
    }

    if (!files.govtProof) {
      newErrors.govtProof =
        "Please upload your govt. ID (Aadhar/PAN/EPIC/Driving Licence)";
    }

    if (!files.education) {
      newErrors.education = "Please upload your latest education certificate";
    }

    if (!formData.agreed) {
      newErrors.agreed = "You must agree to the terms to proceed";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({
      ...prev,
      form: "",
    }));

    try {
      const data = new FormData();

      // Personal details
      data.append(
        "name",
        `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      );

      data.append("email", formData.email.trim());

      data.append("whatsapp_number", formData.whatsapp.trim());

      data.append("position", job?.title || "General Application");

      // Documents
      data.append("resume", files.resume);

      data.append("address_proof", files.govtProof);

      data.append("marksheet", files.education);

      const response = await submitCareerForm(data);

      if (response.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Career Application Error:", error);

      setErrors((prev) => ({
        ...prev,
        form: error.message || "Something went wrong. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      whatsapp: "",
      agreed: false,
    });
    setFiles({ resume: null, govtProof: null, education: null });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <ApplicationSuccess
        firstName={formData.firstName}
        lastName={formData.lastName}
        email={formData.email}
        onReset={resetForm}
      />
    );
  }

  return (
    <section
      id="apply"
      className={compact ? "w-full" : "py-24 transition-colors duration-300"}
    >
      <div className={compact ? "mx-auto w-full" : "mx-auto max-w-4xl px-6"}>
        {!compact && (
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Apply for this Position
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Fill in your details and upload the required documentation down
              below.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className={`rounded-[28px] border border-slate-200/70 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] transition-all dark:border-zinc-800 dark:bg-bg-dark dark:text-white ${compact ? "p-6 md:p-7" : "p-8"}`}
        >
          <div className="mb-8 rounded-2xl bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-4 text-white shadow-lg shadow-indigo-600/20">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-indigo-100">
                  Quick application
                </p>
                <h3 className="mt-1 text-lg font-semibold">
                  Share your details and upload the required files
                </h3>
              </div>
              <div className="rounded-2xl bg-white/15 p-2.5 backdrop-blur-sm">
                <Briefcase size={18} />
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <h3 className="mb-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            Personal Details
          </h3>
          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <FormField
              label="First Name"
              name="firstName"
              icon={<User size={18} />}
              placeholder="Ram"
              value={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />

            <FormField
              label="Last Name"
              name="lastName"
              icon={<User size={18} />}
              placeholder="Sharma"
              value={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              icon={<Mail size={18} />}
              placeholder="ramsharma@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <FormField
              label="WhatsApp Number"
              name="whatsapp"
              type="tel"
              icon={<MessageCircle size={18} />}
              placeholder="+91 94726 56693"
              value={formData.whatsapp}
              onChange={handleInputChange}
              error={errors.whatsapp}
            />
            <FormField
              label="Position Applying For"
              name="position"
              icon={<Briefcase size={18} />}
              placeholder="Position"
              value={job?.title || "General Application"}
              readOnly
              className="md:col-span-2"
            />
          </div>

          {/* Uploads */}
          <h3 className="mb-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            Required Documents
          </h3>
          <div className="mb-8 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <UploadCard
              title="Resume / CV *"
              icon={<FileText size={18} />}
              file={files.resume}
              error={errors.resume}
              onFileSelect={(file) => handleFileChange("resume", file)}
              onClear={() => handleFileChange("resume", null)}
            />

            <UploadCard
              title="Government ID *"
              icon={<Shield size={18} />}
              file={files.govtProof}
              error={errors.govtProof}
              onFileSelect={(file) => handleFileChange("govtProof", file)}
              onClear={() => handleFileChange("govtProof", null)}
            />

            <UploadCard
              title="Education Proof  *"
              icon={<GraduationCap size={18} />}
              file={files.education}
              error={errors.education}
              onFileSelect={(file) => handleFileChange("education", file)}
              onClear={() => handleFileChange("education", null)}
            />
          </div>

          {/* Legal/Checkbox Verification */}
          <div className="flex flex-col gap-2 mt-8">
            <label className="flex items-start gap-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition cursor-pointer"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition">
                I certify that the information provided is accurate and I agree
                to the processing of my application materials.
              </span>
            </label>
            {errors.agreed && (
              <p className="text-xs font-medium text-rose-500 pl-7">
                {errors.agreed}
              </p>
            )}
          </div>

          {errors.form && (
            <p className="mt-4 text-sm font-medium text-rose-500 text-center">
              {errors.form}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full inline-flex justify-center items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:from-indigo-500 hover:to-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-[0.99] disabled:from-indigo-600/50 disabled:to-violet-600/50"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Processing Application...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default JobApply;
