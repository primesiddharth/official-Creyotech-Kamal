import { useRef, useState } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";

function JobApply({ job, compact = false }) {
  const recaptchaRef = useRef(null);

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
    if (!file) {
      setFiles((prev) => ({ ...prev, [key]: null }));
      setErrors((prev) => ({ ...prev, [key]: "" }));
      return;
    }

    const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;

    const documentExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
    const documentMimeTypes = ["application/pdf", "image/jpeg", "image/png"];

    let errorMessage = "";

    // Resume
    if (
      key === "resume" &&
      (extension !== ".pdf" || file.type !== "application/pdf")
    ) {
      errorMessage = "Resume must be uploaded as a PDF file.";
    }

    // Government ID
    else if (
      key === "govtProof" &&
      (!documentExtensions.includes(extension) ||
        !documentMimeTypes.includes(file.type))
    ) {
      errorMessage = "Government ID must be a PDF, JPG, JPEG, or PNG file.";
    }

    // Education Proof
    else if (
      key === "education" &&
      (!documentExtensions.includes(extension) ||
        !documentMimeTypes.includes(file.type))
    ) {
      errorMessage = "Education proof must be a PDF, JPG, JPEG, or PNG file.";
    }

    // 1 MB limit
    else if (file.size > 1 * 1024 * 1024) {
      errorMessage = "File size must not exceed 1 MB.";
    }

    if (errorMessage) {
      setFiles((prev) => ({
        ...prev,
        [key]: null,
      }));

      setErrors((prev) => ({
        ...prev,
        [key]: errorMessage,
      }));

      return;
    }

    setFiles((prev) => ({
      ...prev,
      [key]: file,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
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

    const recaptchaToken = recaptchaRef.current?.getValue();

    if (!recaptchaToken) {
      setErrors((prev) => ({
        ...prev,
        form: "Please complete the reCAPTCHA verification.",
      }));
      return;
    }

    setIsSubmitting(true);

    setErrors((prev) => ({
      ...prev,
      form: "",
    }));

    try {
      const data = new FormData();

      data.append(
        "name",
        `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      );

      data.append("email", formData.email.trim());
      data.append("whatsapp_number", formData.whatsapp.trim());
      data.append("position", job?.title || "General Application");

      // CAPTCHA
      data.append("recaptchaToken", recaptchaToken);

      // Documents
      data.append("resume", files.resume);
      data.append("address_proof", files.govtProof);
      data.append("marksheet", files.education);

      const response = await submitCareerForm(data);

      if (response.success) {
        setIsSubmitted(true);
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      console.error("Career Application Error:", error);

      recaptchaRef.current?.reset();

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
      className={compact ? "w-full" : "py-3 transition-colors duration-300"}
    >
      <div className={compact ? "mx-auto w-full" : "mx-auto max-w-3xl px-4"}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className={`rounded-xl border border-slate-200/80 bg-white shadow-lg dark:border-zinc-800 dark:bg-bg-dark dark:text-white ${
            compact ? "p-3" : "p-4"
          }`}
        >
          {/* Header */}
          <div className="mb-2 flex items-center justify-between gap-2 border-b border-slate-100 pb-2 dark:border-zinc-800/80">
            <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              Job Application
            </h3>

            <div className="inline-flex max-w-[55%] items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
              <Briefcase size={12} className="shrink-0 text-indigo-500" />
              <span className="truncate">
                {job?.title || "General Application"}
              </span>
            </div>
          </div>

          {/* Personal Info */}
          <div className="mb-2.5">
            <h4 className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Personal Info
            </h4>

            <div className="grid grid-cols-1 gap-x-2.5 gap-y-2 sm:grid-cols-2">
              <FormField
                label="First Name"
                name="firstName"
                icon={<User size={14} />}
                placeholder="Ram"
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />

              <FormField
                label="Last Name"
                name="lastName"
                icon={<User size={14} />}
                placeholder="Sharma"
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />

              <FormField
                label="Email Address"
                name="email"
                type="email"
                icon={<Mail size={14} />}
                placeholder="ramsharma@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />

              <FormField
                label="WhatsApp Number"
                name="whatsapp"
                type="tel"
                icon={<MessageCircle size={14} />}
                prefix="+91"
                placeholder="94726 56693"
                value={formData.whatsapp}
                onChange={handleInputChange}
                error={errors.whatsapp}
              />
            </div>
          </div>

          {/* Documents */}
          <div className="mb-2">
            <h4 className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Required Documents
            </h4>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <UploadCard
                title="Resume / CV *"
                icon={<FileText size={14} />}
                file={files.resume}
                error={errors.resume}
                accept=".pdf,application/pdf"
                onFileSelect={(file) => handleFileChange("resume", file)}
                onClear={() => handleFileChange("resume", null)}
                helperText="PDF • Max 1 MB"
              />

              <UploadCard
                title="Government ID *"
                icon={<Shield size={14} />}
                file={files.govtProof}
                error={errors.govtProof}
                accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                onFileSelect={(file) => handleFileChange("govtProof", file)}
                onClear={() => handleFileChange("govtProof", null)}
                helperText="PDF/JPG/PNG • Max 1 MB"
              />

              <UploadCard
                title="Education Proof *"
                icon={<GraduationCap size={14} />}
                file={files.education}
                error={errors.education}
                accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                onFileSelect={(file) => handleFileChange("education", file)}
                onClear={() => handleFileChange("education", null)}
                helperText="PDF/JPG/PNG • Max 1 MB"
              />
            </div>
          </div>

          {/* Agreement */}
          <div className="mt-2 border-t border-slate-100 pt-2 dark:border-zinc-800/80">
            <label className="group flex cursor-pointer select-none items-start gap-2">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                className="mt-0.5 h-3 w-3 shrink-0 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />

              <span className="text-[11px] leading-tight text-slate-600 transition group-hover:text-slate-900 dark:text-zinc-400 dark:group-hover:text-white">
                I certify that the information provided is accurate and agree to
                the application processing.
              </span>
            </label>

            {errors.agreed && (
              <p className="mt-1 pl-5 text-[10px] font-medium text-rose-500">
                {errors.agreed}
              </p>
            )}

            {errors.form && (
              <p className="mt-1 text-center text-[10px] font-medium text-rose-500">
                {errors.form}
              </p>
            )}
          </div>

          {/* Bottom Area */}
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="h-[58px] w-[250px] overflow-hidden">
              <div className="origin-top-left scale-[0.75]">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer h-[56px] flex-1 items-center justify-center gap-2 rounded bg-gradient-to-r from-indigo-600 to-violet-600 px-4 text-base font-semibold text-white shadow-sm shadow-indigo-600/15 transition-all hover:from-indigo-500 hover:to-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-[0.99] disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default JobApply;
