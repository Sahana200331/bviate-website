"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  whatsapp: "",
  service_interested: "",
};

export default function LeadContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit form.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          "Thanks for reaching out. Our team will contact you on WhatsApp shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your details.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Name
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-800"
          placeholder="Your full name"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Email
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-800"
          placeholder="you@company.com"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
        Service Interested
        <select
          required
          name="service_interested"
          value={form.service_interested}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-800"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Hospital Uniforms">Hospital Uniforms</option>
          <option value="Hotel Uniforms">Hotel Uniforms</option>
          <option value="Security Uniforms">Security Uniforms</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
        WhatsApp Number
        <input
          required
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-800"
          placeholder="+91 98765 43210"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="md:col-span-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>

      {status.message ? (
        <p
          className={`md:col-span-2 text-sm ${
            status.type === "success" ? "text-emerald-700" : "text-red-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
