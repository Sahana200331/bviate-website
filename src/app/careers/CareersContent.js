// src/app/careers/CareersContent.js
"use client";

import { useFadeIn } from "../../hooks/useFadeIn";
import SectionTag from "../../components/ui/SectionTag";

export default function CareersContent() {
  useFadeIn();

  const openPositions = [
    {
      title: "Senior Media Buyer (Meta & Google)",
      type: "Full-Time • Remote",
      desc: "Manage high-budget performance campaigns for D2C and SaaS clients. Must have a proven track record of scaling accounts past $50k/mo in ad spend."
    },
    {
      title: "N8N Automation Engineer",
      type: "Contract • Remote",
      desc: "Architect complex data routing and workflow automations using N8N, Supabase, and custom webhooks to eliminate manual data entry for our clients."
    },
    {
      title: "Full-Stack Next.js Developer",
      type: "Full-Time • Remote",
      desc: "Work directly with our Lead Developer to build blazing-fast, technical SEO-optimized web assets. Experience with Tailwind CSS and Vercel required."
    }
  ];

  return (
    <div className="w-full">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-13 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          <SectionTag>Join the Team</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Build the systems of <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">tomorrow.</span>
          </h1>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            We are a lean, high-performance team of growth architects and developers. We don't care about where you live or what degree you have—we care about what you can build.
          </p>
        </div>
      </section>

      {/* 2. Open Roles Section */}
      <section className="py-24 px-13 bg-card border-y border-white/10 fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-secondary">Don't see a fit? Send your portfolio to info@bviate.com anyway.</p>
          </div>

          <div className="flex flex-col gap-6">
            {openPositions.map((job, index) => (
              <div 
                key={index}
                className="bg-navy border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/40 transition-colors group"
              >
                <div className="max-w-2xl">
                  <div className="text-primary text-sm font-bold tracking-widest uppercase mb-3">{job.type}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-secondary leading-relaxed text-sm">
                    {job.desc}
                  </p>
                </div>
                
                {/* Apply Button */}
                <a 
                  href="mailto:careers@bviate.com" 
                  className="shrink-0 bg-white/5 border border-white/10 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all text-center"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}