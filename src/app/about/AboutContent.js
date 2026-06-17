// src/app/about/AboutContent.js
"use client";

import { useFadeIn } from "../../hooks/useFadeIn";
import SectionTag from "../../components/ui/SectionTag";

export default function AboutContent() {
  useFadeIn();

  // Team data — pre-filled for you and Niranjan!
  const team = [
    {
      name: "Niranjan",
      role: "Founder & Growth Architect",
      bio: "Masterminds the overarching growth strategies, ad architectures, and high-level client success.",
      icon: "🧠"
    },
    {
      name: "Sahana",
      role: "Lead Web Developer",
      bio: "Engineers high-performance Next.js architectures, complex UI components, and technical SEO frameworks.",
      icon: "💻"
    },
    {
      name: "Join Our Team",
      role: "Open Positions",
      bio: "We are always looking for top-tier talent. Check out our Careers page for open roles.",
      icon: "🚀"
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-13 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          <SectionTag>Our Mission</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            We build the systems that <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">scale ambitious brands.</span>
          </h1>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Bviate Solutions was founded on a simple principle: businesses shouldn't fail because of bad marketing or broken systems. We exist to engineer predictable, automated growth for our partners.
          </p>
        </div>
      </section>

      {/* 2. Team Section */}
      <section className="py-24 px-13 bg-card border-y border-white/10 fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Core Team</h2>
            <p className="text-secondary">The specialists behind your digital growth engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-navy border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/10">
                  {member.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary text-sm font-semibold mb-4">{member.role}</div>
                <p className="text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}