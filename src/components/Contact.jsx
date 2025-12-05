/**
 * Contact.jsx
 *
 * Contact form section with client-side validation.
 * Features:
 * - Controlled form inputs with React state
 * - Field validation (required, email format)
 * - Error messages
 * - Success state on submit
 * - Accessible form labels and error announcements
 */

import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiCheck,
  HiExclamationCircle,
} from "react-icons/hi";

// Form field options
const budgetOptions = [
  { value: "", label: "Select your budget range" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-plus", label: "$25,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const projectTypes = [
  { value: "", label: "Select project type" },
  { value: "new-website", label: "New Website" },
  { value: "redesign", label: "Website Redesign" },
  { value: "web-app", label: "Web Application" },
  { value: "landing-page", label: "Landing Page" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "other", label: "Other" },
];

// Validation helpers
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.projectType) {
    errors.projectType = "Please select a project type";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 20) {
    errors.message =
      "Please provide a bit more detail (at least 20 characters)";
  }

  return errors;
}

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    projectType: "",
    message: "",
  });

  // Track validation errors
  const [errors, setErrors] = useState({});

  // Track form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field for accessibility
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);

    // Log form data (replace with actual API call later)
    console.log("Form submitted:", formData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        budget: "",
        projectType: "",
        message: "",
      });
    }, 500);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white relative"
      aria-labelledby="contact-heading"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <div>
            <span
              className="inline-block text-sm font-mono font-medium 
                         text-accent-600 uppercase tracking-wider mb-4"
            >
              Get in Touch
            </span>
            <h2
              id="contact-heading"
              className="heading-display text-display-md mb-6"
            >
              Let's build.
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed mb-8">
              Have a project in mind? I'd love to hear about it. Fill out the
              form and I'll get back to you within 24 hours to schedule a free
              consultation call.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center
                             bg-accent-50 text-accent-600 rounded-xl"
                >
                  <HiOutlineMail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-primary-500">Email</p>
                  <a
                    href="mailto:jason@jasongallagher.co"
                    className="font-medium text-primary-900 hover:text-accent-600
                             transition-colors duration-200"
                  >
                    jason@jasongallagher.co
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center
                             bg-accent-50 text-accent-600 rounded-xl"
                >
                  <HiOutlineLocationMarker
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm text-primary-500">Location</p>
                  <p className="font-medium text-primary-900">
                    Colorado Springs, CO
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center
                             bg-accent-50 text-accent-600 rounded-xl"
                >
                  <HiOutlinePhone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-primary-500">Response time</p>
                  <p className="font-medium text-primary-900">
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Availability notice */}
            <div
              className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200
                         flex items-start gap-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 animate-pulse" />
              <div>
                <p className="font-medium text-green-800">
                  Currently accepting new projects
                </p>
                <p className="text-sm text-green-700">
                  Available to start in January 2025
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            {isSuccess ? (
              // Success message
              <div
                className="h-full flex flex-col items-center justify-center 
                           text-center p-8 bg-green-50 rounded-2xl border border-green-200"
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center
                             bg-green-500 text-white rounded-full mb-6"
                >
                  <HiCheck className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-green-800 mb-3">
                  Message sent!
                </h3>
                <p className="text-green-700 mb-6">
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              // Contact form
              <form
                onSubmit={handleSubmit}
                className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200"
                noValidate
              >
                {/* Name field */}
                <div className="mb-5">
                  <label htmlFor="name" className="input-label">
                    Name <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                        : ""
                    }`}
                    placeholder="Your name"
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="input-error flex items-center gap-1"
                      role="alert"
                    >
                      <HiExclamationCircle
                        className="w-4 h-4"
                        aria-hidden="true"
                      />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="mb-5">
                  <label htmlFor="email" className="input-label">
                    Email <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                        : ""
                    }`}
                    placeholder="your@email.com"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="input-error flex items-center gap-1"
                      role="alert"
                    >
                      <HiExclamationCircle
                        className="w-4 h-4"
                        aria-hidden="true"
                      />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Two-column row */}
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  {/* Budget field */}
                  <div>
                    <label htmlFor="budget" className="input-label">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-field"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project type field */}
                  <div>
                    <label htmlFor="projectType" className="input-label">
                      Project Type <span className="text-accent-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`input-field ${
                        errors.projectType
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                          : ""
                      }`}
                      aria-required="true"
                      aria-invalid={errors.projectType ? "true" : "false"}
                      aria-describedby={
                        errors.projectType ? "projectType-error" : undefined
                      }
                    >
                      {projectTypes.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p
                        id="projectType-error"
                        className="input-error flex items-center gap-1"
                        role="alert"
                      >
                        <HiExclamationCircle
                          className="w-4 h-4"
                          aria-hidden="true"
                        />
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="mb-6">
                  <label htmlFor="message" className="input-label">
                    Tell me about your project{" "}
                    <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`input-field resize-none ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                        : ""
                    }`}
                    placeholder="Describe your project, goals, and timeline..."
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="input-error flex items-center gap-1"
                      role="alert"
                    >
                      <HiExclamationCircle
                        className="w-4 h-4"
                        aria-hidden="true"
                      />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
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
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-xs text-primary-500 text-center mt-4">
                  By submitting this form, you agree to be contacted about your
                  project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
