// src/app/case-studies/CaseStudiesContent.js
"use client";

import { useFadeIn } from "../../hooks/useFadeIn";
import SectionTag from "../../components/ui/SectionTag";

export default function CaseStudiesContent() {
  useFadeIn();

  const caseStudies = [
    {
      client: "Elevate E-commerce",
      industry: "Direct-to-Consumer (D2C)",
      results: ["4.5x ROAS", "-40% CPA", "$120k Monthly Scale"],
      problem: "Elevate was burning money on Meta ads with a terrible return on ad spend (ROAS). Their website was slow, and their checkout funnel was leaking highly qualified traffic.",
      solution: "We completely rebuilt their storefront using Next.js for lightning-fast load speeds. Then, we restructured their ad accounts, implementing a data-driven testing framework and introducing automated abandoned cart sequences.",
      imageColor: "from-blue-500 to-cyan-400"
    },
    {
      client: "ScaleTech Solutions",
      industry: "B2B SaaS",
      results: ["+142% Lead Volume", "Automated Nurture", "Zero Manual Entry"],
      problem: "Their sales team was spending 15 hours a week manually copying lead data from forms into their CRM, leading to delayed follow-ups and lost high-ticket deals.",
      solution: "We built a custom N8N automation architecture. Now, when a lead submits a form, they are instantly added to Supabase, a personalized welcome sequence begins, and the sales team gets a real-time WhatsApp notification.",
      imageColor: "from-purple-500 to-primary"
    }
  ];

  return (
    <section className="pt-32 pb-24 px-13 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 fade-in">
        <SectionTag>Proven Results</SectionTag>
        <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
          We don't just promise growth. <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">We engineer it.</span>
        </h1>
        <p className="text-secondary text-lg">
          Explore how we have helped ambitious brands scale their revenue, automate their operations, and dominate their markets.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="flex flex-col gap-16">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className="bg-card border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl fade-in group"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Left side: Abstract Visual Representation */}
            <div className={`h-64 lg:h-auto bg-gradient-to-br ${study.imageColor} relative overflow-hidden flex items-center justify-center`}>
               <div className="absolute inset-0 bg-navy/20 backdrop-blur-[2px]"></div>
               <div className="absolute w-64 h-64 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute w-48 h-48 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <h3 className="relative z-10 text-white font-display text-3xl font-black tracking-widest uppercase opacity-80 mix-blend-overlay">
                 {study.industry}
               </h3>
            </div>

            {/* Right side: Content */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="text-primary text-sm font-bold tracking-widest uppercase mb-2">{study.industry}</div>
              <h2 className="text-3xl font-bold text-white mb-8">{study.client}</h2>
              
              {/* Metric Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {study.results.map((result, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {result}
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-secondary leading-relaxed">
                <div>
                  <strong className="text-white">The Challenge:</strong> {study.problem}
                </div>
                <div>
                  <strong className="text-white">The Solution:</strong> {study.solution}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}