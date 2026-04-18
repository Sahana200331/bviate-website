// src/components/home/Industries.js
"use client";

import SectionTag from "../ui/SectionTag";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function Industries() {
  useFadeIn();

  // 10 Industries with emojis as requested
  const industries = [
    { name: "E-commerce", icon: "🛍️" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Healthcare", icon: "⚕️" },
    { name: "B2B SaaS", icon: "💻" },
    { name: "Finance", icon: "📊" },
    { name: "Education", icon: "🎓" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Legal", icon: "⚖️" },
    { name: "Logistics", icon: "🚚" }
  ];

  return (
    <section className="py-24 px-13 bg-navy relative z-10" id="industries">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in">
          <SectionTag>Who We Help</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-secondary text-lg">
            Growth systems engineered for your specific market dynamics.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={industry.name}
              className="bg-card border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] fade-in group cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }} // Staggers the fade-in!
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </span>
              <h3 className="text-white font-medium text-sm">{industry.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}