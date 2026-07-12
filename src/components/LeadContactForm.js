// src/components/LeadContactForm.js
"use client";
import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn"; // 1. Added the missing import!

export default function LeadContactForm() {
  useFadeIn(); // 2. Trigger the animation so it becomes visible!

  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", service: "", serviceOther: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Full name is required"
    if (!form.email.trim()) newErrors.email = "Email address is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address"
    if (!form.service) newErrors.service = "Please select a service"
    if (form.service === "other") {
      const len = form.serviceOther.trim().length
      if (len === 0) newErrors.serviceOther = "Please tell us what you need"
      else if (len < 10) newErrors.serviceOther = "Please provide at least 10 characters"
      else if (len > 100) newErrors.serviceOther = "Please keep this under 100 characters"
    }
    if (!form.message.trim()) newErrors.message = "Please tell us about your project"
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const payload = {
        name: form.name,
        email: form.email,
        whatsapp: form.whatsapp,
        service: form.service === "other" ? "Other" : form.service,
        ...(form.service === "other" ? { serviceOther: form.serviceOther } : {}),
        message: form.message,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Submission failed");
      setStatus("success");
      setForm({ name: "", email: "", whatsapp: "", service: "", serviceOther: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus('idle')
    setForm({ name: '', email: '', whatsapp: '', service: '', serviceOther: '', message: '' })
  }

  if (status === "error") {
    return (
      <div className="text-center py-8 px-4 animate-fade-slide-up">
        <div style={{
          width: 72, height: 72,
          borderRadius: '50%',
          background: 'rgba(239,68,68,0.15)',
          border: '2px solid rgba(239,68,68,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#EF4444"
                  strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h3 className="font-display font-black text-2xl text-white mb-3">
          Something went wrong.
        </h3>
        <p className="text-secondary text-sm max-w-xs mx-auto mb-6">
          We couldn&apos;t send your message. Please try again, WhatsApp us, or
          email{' '}
          <a href="mailto:info@bviate.com" className="text-primary hover:underline">
            info@bviate.com
          </a>
          .
        </p>
        <div className="border-t border-white/10 mb-6"></div>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
          >
            Try Again
          </button>
          <a
            href="https://wa.me/918881888321"
            className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    )
  }

  if (status === "success") {
    return (
      <div className="animate-fade-slide-up text-center py-8 px-4">

        {/* Checkmark circle */}
        <div
          className="animate-scale-in"
          style={{
            width: 72, height: 72,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Heading */}
        <h3 className="font-display font-black text-white text-2xl mb-3">
          We&apos;ll be in touch soon!
        </h3>

        {/* Subtext */}
        <p className="text-secondary text-sm max-w-xs mx-auto leading-relaxed mb-6">
          Thank you for reaching out. Our team will review your message
          and get back to you within 24 hours.
        </p>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Info pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="text-xs text-secondary bg-white/5 px-3 py-1.5 rounded-full">
            📧 info@bviate.com
          </span>
          <span className="text-xs text-secondary bg-white/5 px-3 py-1.5 rounded-full">
            ⚡ Response within 24h
          </span>
        </div>

        {/* Reset button */}
        <button
          onClick={handleReset}
          className="text-sm text-primary underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 fade-in">
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-semibold">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            className={`bg-navy border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-semibold">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            className={`bg-navy border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* WhatsApp & Service Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-semibold">WhatsApp / Phone Number</label>
          <input
            type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange}
            className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-semibold">Service of Interest *</label>
          <select
            name="service" value={form.service} onChange={handleChange}
            className={`bg-navy border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none ${errors.service ? 'border-red-500/50' : 'border-white/10'}`}
          >
            <option value="" disabled>Select a service...</option>
            <option value="automation">N8N Automation</option>
            <option value="web-dev">Web Development</option>
            <option value="ads">Performance Marketing</option>
            <option value="seo">SEO Optimization</option>
            <option value="funnels">Funnels & Copywriting</option>
            <option value="social-media-management">Social Media Management</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
          {form.service === "other" && (
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-white text-sm font-semibold">What do you need?*</label>
              <input
                type="text" name="serviceOther" value={form.serviceOther} onChange={handleChange}
                className={`bg-navy border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors ${errors.serviceOther ? 'border-red-500/50' : 'border-white/10'}`}
                placeholder="e.g. consultation, training, something else…"
                maxLength={100}
              />
              {errors.serviceOther && <p className="text-red-400 text-xs mt-1">{errors.serviceOther}</p>}
            </div>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-semibold">Tell us about your project *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows="5"
          className={`bg-navy border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
          placeholder="What are your current bottlenecks and growth goals?"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gradient-to-r from-primary to-purple text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
