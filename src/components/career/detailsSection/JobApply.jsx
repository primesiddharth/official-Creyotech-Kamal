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
      newErrors.govtProof = "Please upload your govt. ID (Aadhar/PAN/EPIC)";
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
      className={
        compact ? "w-full" : "py-6 md:py-8 transition-colors duration-300"
      }
    >
      <div className={compact ? "mx-auto w-full" : "mx-auto max-w-3xl px-4"}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className={`rounded-2xl border border-slate-200/80 bg-white shadow-xl dark:border-zinc-800 dark:bg-bg-dark dark:text-white ${
            compact ? "p-4 md:p-3.5" : "p-5 md:p-6"
          }`}
        >
          {/* Form Header / Position Tag */}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-zinc-800/80">
            <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              Job Application
            </h3>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
              <Briefcase size={13} className="text-indigo-500" />
              <span>{job?.title || "General Application"}</span>
            </div>
          </div>

          {/* Personal Details (Grid) */}
          <div className="mb-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Personal Info
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <FormField
                label="First Name"
                name="firstName"
                icon={<User size={16} />}
                placeholder="Ram"
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />

              <FormField
                label="Last Name"
                name="lastName"
                icon={<User size={16} />}
                placeholder="Sharma"
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />

              <FormField
                label="Email Address"
                name="email"
                type="email"
                icon={<Mail size={16} />}
                placeholder="ramsharma@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />

              <FormField
                label="WhatsApp Number"
                name="whatsapp"
                type="tel"
                icon={<MessageCircle size={16} />}
                prefix="+91"
                placeholder="94726 56693"
                value={formData.whatsapp}
                onChange={handleInputChange}
                error={errors.whatsapp}
              />
            </div>
          </div>

          {/* Required Documents (Compact Grid) */}
          <div className="mb-4">
            <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Required Documents
            </h4>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-3">
              <UploadCard
                title="Resume / CV *"
                icon={<FileText size={16} />}
                file={files.resume}
                error={errors.resume}
                onFileSelect={(file) => handleFileChange("resume", file)}
                onClear={() => handleFileChange("resume", null)}
              />

              <UploadCard
                title="Government ID *"
                icon={<Shield size={16} />}
                file={files.govtProof}
                error={errors.govtProof}
                onFileSelect={(file) => handleFileChange("govtProof", file)}
                onClear={() => handleFileChange("govtProof", null)}
              />

              <UploadCard
                title="Education Proof *"
                icon={<GraduationCap size={16} />}
                file={files.education}
                error={errors.education}
                onFileSelect={(file) => handleFileChange("education", file)}
                onClear={() => handleFileChange("education", null)}
              />
            </div>
          </div>

          {/* Agreement & Validation Error */}
          <div className="mt-4 flex flex-col gap-1.5 border-t border-slate-100 pt-3 dark:border-zinc-800/80">
            <label className="flex items-start gap-2.5 cursor-pointer group select-none">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                className="mt-0.5 h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition cursor-pointer shrink-0"
              />
              <span className="text-xs text-slate-600 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white transition leading-normal">
                I certify that the information provided is accurate and agree to
                the application processing.
              </span>
            </label>

            {errors.agreed && (
              <p className="text-xs font-medium text-rose-500 pl-6">
                {errors.agreed}
              </p>
            )}

            {errors.form && (
              <p className="text-xs font-medium text-rose-500 text-center">
                {errors.form}
              </p>
            )}
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 w-full inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-2.5 px-4 text-sm font-semibold text-white shadow-md shadow-indigo-600/15 transition-all hover:from-indigo-500 hover:to-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-[0.99] disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Processing...</span>
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
