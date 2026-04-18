// src/components/home/ServicesGrid.js
"use client";

import Link from "next/link";
import SectionTag from "../ui/SectionTag";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function ServicesGrid() {
  useFadeIn();

  const services = [
    {
      title: "N8N Automation",
      desc: "Your business should grow while you sleep. We build custom workflows to automate lead capture, follow-ups, and reporting.",
      icon: "⚡",
      href: "/services/automation"
    },
    {
      title: "Web Development",
      desc: "High-performance Next.js websites engineered for speed, technical SEO, and maximum conversion rates.",
      icon: "💻",
      href: "/services/web-development"
    },
    {
      title: "Performance Marketing",
      desc: "Data-driven ad campaigns across Meta and Google that lower your CPA and scale your revenue predictably.",
      icon: "📈",
      href: "/services/performance-marketing"
    },
    {
      title: "SEO Optimization",
      desc: "Dominate search results with technical SEO and content strategies that drive compounding organic traffic.",
      icon: "🔍",
      href: "/services/seo"
    },
    {
      title: "Funnels & Copywriting",
      desc: "Persuasive sales funnels and direct-response copywriting that turn cold clicks into high-ticket clients.",
      icon: "✍️",
      href: "/services/funnels-copywriting"
    },
    {
      title: "Social Media",
      desc: "Strategic content systems and brand building that capture attention and build authority in your niche.",
      icon: "📱",
      href: "/services/social-media"
    }
  ];

  return (
    <section className="py-24 px-13 bg-navy relative z-10" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in">
          <SectionTag>What We Do</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Digital Growth Engines
          </h2>
          <p className="text-secondary text-lg">
            We don't just deliver services; we build interconnected systems designed to scale your business.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group relative bg-card border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] hover:border-primary/30 fade-in flex flex-col h-full overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              
              {/* Learn More Link */}
              <div className="text-primary text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </div>

              {/* Animated Bottom Blue Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}