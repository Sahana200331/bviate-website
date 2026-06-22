// src/components/LeadContactForm.js
"use client";
import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn"; // 1. Added the missing import!

export default function LeadContactForm() {
  useFadeIn(); // 2. Trigger the animation so it becomes visible!

  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Submission failed");
      setStatus("success");
      setForm({ name: "", email: "", whatsapp: "", service: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus('idle')
    setForm({ name: '', email: '', whatsapp: '', service: '', message: '' })
  }

  if (status === "error") {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">❌</div>
        <h3 className="text-white text-xl font-bold mb-2">Something went wrong.</h3>
        <p className="text-secondary">Please try again or email us directly at hello@bviate.com</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-primary text-sm font-bold hover:underline">
          Try again
        </button>
      </div>
    );
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
            📧 hello@bviate.com
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
          <input required type="text" name="name" value={form.name} onChange={handleChange} className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-semibold">Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@company.com" />
        </div>
      </div>

      {/* WhatsApp & Service Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-semibold">WhatsApp Number</label>
          <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-semibold">Service of Interest *</label>
          <select required name="service" value={form.service} onChange={handleChange} className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
            <option value="" disabled>Select a service...</option>
            <option value="automation">N8N Automation</option>
            <option value="web-dev">Web Development</option>
            <option value="ads">Performance Marketing</option>
            <option value="seo">SEO Optimization</option>
            <option value="funnels">Funnels & Copywriting</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-semibold">Tell us about your project *</label>
        <textarea required name="message" value={form.message} onChange={handleChange} rows="5" className="bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="What are your current bottlenecks and growth goals?" />
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
