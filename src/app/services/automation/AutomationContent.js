// src/app/services/automation/AutomationContent.js
"use client";

import { useFadeIn } from "../../../hooks/useFadeIn";
import SectionTag from "../../../components/ui/SectionTag";
import Button from "../../../components/ui/Button";

export default function AutomationContent() {
  useFadeIn();

  const useCases = [
    { title: "Lead Capture & Routing", icon: "🎣", desc: "Instantly route new leads from ads directly to your sales team's WhatsApp." },
    { title: "CRM Syncing", icon: "🔄", desc: "Automatically update your database (Supabase, Airtable) without manual entry." },
    { title: "Email Nurture Sequences", icon: "✉️", desc: "Trigger personalized email follow-ups based on specific user actions." },
    { title: "Automated Onboarding", icon: "👋", desc: "Send contracts, welcome packets, and initial setup links the second a client signs." },
    { title: "Data & Reporting", icon: "📊", desc: "Auto-generate weekly performance reports and send them directly to your Slack." }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-13 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          <SectionTag>N8N Business Automation</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Your business should <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-cyan to-primary bg-clip-text text-transparent">grow while you sleep.</span>
          </h1>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Stop losing leads to human error and manual data entry. We build custom N8N workflows that connect your apps, automate your busywork, and scale your operations flawlessly.
          </p>
          <Button href="/contact">Book a Free Automation Demo →</Button>
        </div>
      </section>

      {/* 2. 5 Use Cases Grid */}
      <section className="py-20 px-13 bg-card border-y border-white/10 fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">What can we automate for you?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-navy border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-white font-bold mb-2 text-sm">{useCase.title}</h3>
                <p className="text-secondary text-xs leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Before vs After Table */}
      <section className="py-24 px-13 fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Cost of Manual Work</h2>
            <p className="text-secondary">See the difference a custom automation architecture makes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-card p-10">
              <h3 className="text-red-400 font-bold text-xl mb-8 flex items-center gap-2">
                <span>⚠️</span> WITHOUT AUTOMATION
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 text-secondary"><span className="text-red-500 font-bold">✗</span> Manually check form submissions</li>
                <li className="flex items-start gap-3 text-secondary"><span className="text-red-500 font-bold">✗</span> Copy lead details to spreadsheet by hand</li>
                <li className="flex items-start gap-3 text-secondary"><span className="text-red-500 font-bold">✗</span> Send welcome email yourself</li>
                <li className="flex items-start gap-3 text-secondary"><span className="text-red-500 font-bold">✗</span> Forget to follow up — lose the client</li>
                <li className="flex items-start gap-3 text-secondary"><span className="text-red-500 font-bold">✗</span> Build monthly report manually</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-navy to-primary/10 p-10 border-t md:border-t-0 md:border-l border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-[80px] -z-10" />
              <h3 className="text-cyan font-bold text-xl mb-8 flex items-center gap-2">
                <span>⚡</span> WITH N8N AUTOMATION
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 text-white"><span className="text-cyan font-bold">✓</span> Lead arrives — you get WhatsApp instantly</li>
                <li className="flex items-start gap-3 text-white"><span className="text-cyan font-bold">✓</span> Lead saved to Supabase database automatically</li>
                <li className="flex items-start gap-3 text-white"><span className="text-cyan font-bold">✓</span> Welcome email sent to lead within seconds</li>
                <li className="flex items-start gap-3 text-white"><span className="text-cyan font-bold">✓</span> Follow-up sequence runs automatically for 7 days</li>
                <li className="flex items-start gap-3 text-white"><span className="text-cyan font-bold">✓</span> Monthly report auto-generated and emailed to you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}