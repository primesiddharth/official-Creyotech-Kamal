import { useState } from "react";
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

function ProposalForm() {
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

    const toastId = toast.loading("Sending proposal request...");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        whatsapp_number: formData.phone,
        problem_faced: formData.message,
        solution_required: formData.service,
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
      }
    } catch (error) {
      toast.error(error.message || "Failed to send request", {
        id: toastId,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
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
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Service */}
        <div className="flex items-center gap-3 rounded-2xl border border-border-light bg-bg-soft px-4 dark:border-border-dark dark:bg-white/[0.03]">
          <HiOutlineBriefcase className="text-text-secondary" />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-transparent py-3 outline-none text-text-primary dark:text-white"
          >
            <option value="" className="text-text-primary">
              Select Service
            </option>

            <option value="Website Development" className="text-black">
              Website Development
            </option>

            <option value="Web / Cloud Application" className="text-black">
              Web / Cloud Application
            </option>

            <option value="Mobile Application" className="text-black">
              Mobile Application
            </option>

            <option value="Digital Marketing" className="text-black">
              Digital Marketing
            </option>

            <option value="Social Media Marketing" className="text-black">
              Social Media Marketing
            </option>
          </select>
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
        required
        className="w-full bg-transparent py-3 outline-none dark:text-white"
      />
    </div>
  );
}

export default ProposalForm;
