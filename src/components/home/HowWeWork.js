// src/components/home/HowWeWork.js
"use client";

import SectionTag from "../ui/SectionTag";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function HowWeWork() {
  useFadeIn();

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      desc: "We dive deep into your business model, current bottlenecks, and revenue goals to see if we are a good fit."
    },
    {
      number: "02",
      title: "Strategy Blueprint",
      desc: "We map out a custom digital architecture, including funnels, ad structures, and automation workflows."
    },
    {
      number: "03",
      title: "Execution",
      desc: "Our specialists build your assets, launch your campaigns, and integrate your systems with zero heavy lifting from you."
    },
    {
      number: "04",
      title: "Results and Scale",
      desc: "We monitor the data daily, optimizing for lower acquisition costs and scaling the winners to drive predictable growth."
    }
  ];

  return (
    <section className="py-24 px-13 bg-card border-y border-white/10 relative z-10 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 fade-in">
          <SectionTag>Our Process</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            How We Work
          </h2>
          <p className="text-secondary text-lg">
            A proven, four-step framework to transform your brand into a scalable growth engine.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* The Connecting Line (Hidden on mobile, visible on medium+ screens) */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10 hidden md:block fade-in" style={{ transitionDelay: '200ms' }} />

          {/* 4-Column Grid for Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative group flex flex-col items-center text-center fade-in"
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Number Circle with Hover Effect */}
                <div className="relative z-10 w-16 h-16 mb-6 rounded-full bg-navy border-2 border-white/10 flex items-center justify-center font-display text-xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}