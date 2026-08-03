import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { submitContactForm } from "../../services/contactService";
import ServiceSelect from "../ServiceSelect";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const recaptchaRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "WhatsApp number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please complete all required fields");
      return;
    }

    const recaptchaToken = recaptchaRef.current?.getValue();

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification.");
      return;
    }

    const toastId = toast.loading("Submitting inquiry...");

    try {
      setLoading(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        whatsapp_number: formData.phone,
        problem_faced: formData.message,
        solution_required: formData.service,
        recaptchaToken,
      };

      const data = await submitContactForm(payload);

      if (data.success) {
        toast.success(data.message || "Inquiry submitted successfully!", {
          id: toastId,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        // Reset CAPTCHA after successful submission
        recaptchaRef.current?.reset();
        setErrors({});
      }
    } catch (error) {
      recaptchaRef.current?.reset();

      toast.error(error.message || "Something went wrong. Please try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-12 items-start">
        {/* Left Side: Form Section */}
        <div className="md:col-span-7 bg-white dark:bg-secondary p-6 sm:p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Let&apos;s build something together
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rahul Sharma"
                className="h-12 w-full rounded-xl border border-border-light bg-bg-soft px-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-border-dark dark:bg-bg-dark dark:text-white"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email + WhatsApp Row */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-border-light bg-bg-soft px-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-border-dark dark:bg-bg-dark dark:text-white"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="9876543210"
                  required
                  className="h-12 w-full rounded-xl border border-border-light bg-bg-soft px-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-border-dark dark:bg-bg-dark dark:text-white"
                />

                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                Select Service <span className="text-red-500">*</span>
              </label>

              <ServiceSelect
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-transparent rounded-xl border border-border-light dark:border-border-dark py-3 outline-none dark:text-secondary"
              />

              {errors.service && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                  {errors.service}
                </p>
              )}
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project features, target audience, and timelines..."
                className="min-h-[110px] w-full rounded-xl border border-border-light bg-bg-soft px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-border-dark dark:bg-bg-dark dark:text-white"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="mt-3">
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
              disabled={loading}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-primary py-3.5 font-semibold text-white transition-all hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Map & Info Card */}
        <div className="md:col-span-5 space-y-6 lg:sticky lg:top-6">
          <div className="bg-zinc-50 dark:bg-secondary p-6 rounded-2xl border border-border-light dark:border-border-dark">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Head Office
            </h3>

            <div className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <p className="font-medium text-zinc-900 dark:text-white">
                Creyotech IT Services
              </p>
              <p>
                Module 232, SDF Building EP & GP Block, Sector V Bidhannagar,
                Kolkata West Bengal 700091, India
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="h-[350px] w-full rounded-2xl overflow-hidden border border-border-light dark:border-border-dark shadow-inner relative group bg-zinc-100 dark:bg-bg-dark">
            <iframe
              title="Creyotech Kolkata Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.278350055459!2d88.4290293743367!3d22.568690433115442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ad93ff8761%3A0xb594ae1e7384b2cb!2sModule%20232%2C%20SDF%20Building%2C%20EP%20%26%2C%20GP%20Block%2C%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1785769484771!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="border-0 transition-all duration-300 group-hover:scale-[1.02]"
            />
            <a
              href="https://www.google.com/maps?q=22.4452,88.4241"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
