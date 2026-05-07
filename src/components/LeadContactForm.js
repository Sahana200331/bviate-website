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

    // Simulating the API call for now as per DOC-4 instructions
    console.log("Form submitted:", form);
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", whatsapp: "", service: "", message: "" });
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center fade-in">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-secondary">We will be in touch with you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-primary text-sm font-bold hover:underline">
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
