"use client";

import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const validateForm = () => {
    const nextErrors: Partial<FormValues> = {};

    if (!values.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!values.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) {
        nextErrors.email = "Please enter a valid email address.";
      }
    }

    if (!values.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    if (values.phone.trim() && !/^[0-9()+\-\s]+$/.test(values.phone)) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    return nextErrors;
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle" });

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        const result = await submitContactForm(formData);

        if (result.error) {
          setStatus({ type: "error", message: result.error });
        } else {
          setValues({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
          setStatus({ type: "success", message: result.success });
        }
      } catch (error) {
        console.error("CONTACT_FORM_CLIENT_ERROR:", error);
        setStatus({
          type: "error",
          message:
            "Unable to send the message. Check the server console and email configuration.",
        });
      }
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition">
      {status.type === "success" ? (
        <div className="text-center space-y-4 py-12">
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16 text-spalla-green" />
          </div>
          <h3 className="text-2xl font-bold text-spalla-dark">Thank You!</h3>
          <p className="text-slate-600 max-w-sm mx-auto">
            Your message has been received. We&apos;ll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setStatus({ type: "idle" })}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-spalla-green text-white font-semibold shadow-md shadow-spalla-green/20 transition hover:bg-green-700"
            >
              Send another message
            </button>
            <button
              type="button"
              onClick={() => {
                setStatus({ type: "idle" });
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-slate-200 bg-white text-slate-700 font-semibold shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              name="firstName"
              placeholder="John"
              required
              value={values.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Doe"
              required
              value={values.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
          </div>

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />

          <Input
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+254..."
            value={values.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />

          <TextAreaField
            label="Message"
            name="message"
            value={values.message}
            onChange={handleInputChange}
            placeholder="How can we help you?"
            required
            error={errors.message}
          />

          {status.type === "error" && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-4 rounded-xl">
              <AlertCircle className="w-5 h-5" />
              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-linear-to-r from-spalla-green to-spalla-orange hover:from-green-700 hover:to-orange-500 text-white font-semibold py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}

function Input({
  label,
  type = "text",
  placeholder,
  name,
  required,
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-spalla-dark">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={error ? "true" : "false"}
        className={`w-full px-4 py-3 rounded-xl bg-spalla-light border transition focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-slate-200"
        }`}
      />
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
    </div>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
  error,
}: Omit<InputProps, "type">) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-spalla-dark">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={error ? "true" : "false"}
        rows={4}
        className={`w-full px-4 py-3 rounded-xl bg-spalla-light border transition focus:outline-none focus:border-spalla-green focus:ring-2 focus:ring-spalla-green/20 resize-none ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-slate-200"
        }`}
      />
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
    </div>
  );
}
