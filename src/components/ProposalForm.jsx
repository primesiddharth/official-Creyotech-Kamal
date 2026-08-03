import { useRef, useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";

import { HiOutlineBriefcase } from "react-icons/hi";
import toast from "react-hot-toast";
import { submitContactForm } from "../services/contactService";
import ServiceSelect from "./ServiceSelect";
import ReCAPTCHA from "react-google-recaptcha";

function ProposalForm() {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get reCAPTCHA v2 token
    const recaptchaToken = recaptchaRef.current?.getValue();

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification.");
      return;
    }

    const toastId = toast.loading("Sending proposal request...");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        whatsapp_number: formData.phone,
        problem_faced: formData.message,
        solution_required: formData.service,

        // IMPORTANT
        recaptchaToken,
      };

      const data = await submitContactForm(payload);

      if (data.success) {
        toast.success("Proposal request submitted!", {
          id: toastId,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        recaptchaRef.current?.reset();
      }
    } catch (error) {
      // Token should not be reused after failed verification/request
      recaptchaRef.current?.reset();

      toast.error(error.message || "Failed to send request", {
        id: toastId,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5 space-y-3">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <InputField
          icon={<FiUser />}
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <InputField
          icon={<FiMail />}
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Phone */}
        <InputField
          icon={<FiPhone />}
          name="phone"
          placeholder="WhatsApp Number"
          maxLength={10}
          inputMode="numeric"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Service */}
        <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 dark:border-border-dark dark:bg-white/[0.03]">
          <HiOutlineBriefcase className="text-text-secondary" />

          <ServiceSelect
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-transparent py-3 outline-none dark:text-secondary"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 py-4 dark:border-border-dark dark:bg-white/[0.03]">
        <FiMessageSquare className="mt-1 text-text-secondary" />

        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          required
          className="w-full resize-none bg-transparent outline-none dark:text-white"
        />
      </div>
      <div className="mt-2">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onExpired={() => {
            recaptchaRef.current?.reset();
          }}
          onErrored={() => {
            toast.error("reCAPTCHA failed to load. Please try again.");
          }}
        />
      </div>
      {/* Submit */}
      <button
        type="submit"
        className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-primary
          px-8
          py-3
          font-medium
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          cursor-pointer
        "
      >
        Request Proposal
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function InputField({
  icon,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  inputMode,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 dark:border-border-dark dark:bg-white/[0.03]">
      <span className="text-text-secondary">{icon}</span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        required
        className="w-full bg-transparent py-3 outline-none dark:text-white"
      />
    </div>
  );
}

export default ProposalForm;
