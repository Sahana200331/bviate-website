// src/components/home/Testimonials.js
"use client";

import SectionTag from "../ui/SectionTag";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function Testimonials() {
  useFadeIn();

  const testimonials = [
    {
      quote: "Bviate entirely rebuilt our digital infrastructure. Within 90 days of launching the new Next.js site and N8N automations, our lead-to-close rate jumped by 40%. They don't just build websites; they build businesses.",
      author: "Rajiv Menon",
      role: "Founder, ScaleTech Solutions",
      initials: "RM"
    },
    {
      quote: "We were burning money on Meta ads with terrible ROAS. The Bviate team audited our funnels, rewrote our copy, and launched a new campaign structure. We are now seeing a consistent 4.5x return on ad spend.",
      author: "Priya Sharma",
      role: "CMO, Elevate E-commerce",
      initials: "PS"
    }
  ];

  return (
    <section className="py-24 px-13 bg-card border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in">
          <SectionTag>Client Success</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
            Don't Just Take Our Word For It
          </h2>
        </div>

        {/* 2-Column Grid for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-navy border border-white/10 rounded-2xl p-10 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 fade-in shadow-xl"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-primary mb-6">
                  ★★★★★
                </div>
                {/* Quote */}
                <p className="text-white text-lg font-light leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center font-bold text-white text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.author}</div>
                  <div className="text-secondary text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}