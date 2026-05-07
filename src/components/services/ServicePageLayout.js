"use client";
import { useFadeIn } from "../../hooks/useFadeIn";
import SectionTag from "../ui/SectionTag";
import Button from "../ui/Button";

export default function ServicePageLayout({ tag, emoji, headline, tagline, included, results }) {
  useFadeIn();

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-13 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          <SectionTag>{tag}</SectionTag>
          <div className="text-7xl mb-6">{emoji}</div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {headline}
          </h1>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">{tagline}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact">Book a Free Discovery Call →</Button>
            <Button href="/services" variant="secondary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Section 2: What's Included + Results */}
      <section className="py-24 px-13 bg-card border-y border-white/10 fade-in">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: What's Included */}
          <div className="bg-navy border border-white/10 rounded-3xl p-10 flex flex-col gap-6">
            <h2 className="font-display text-2xl font-black text-white">What's Included</h2>
            <ul className="flex flex-col gap-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary">
                  <span className="text-primary font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Results You Can Expect */}
          <div className="bg-gradient-to-br from-navy to-primary/10 border border-white/10 rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
            <h2 className="font-display text-2xl font-black text-white">Results You Can Expect</h2>
            <ul className="flex flex-col gap-4">
              {results.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <span className="text-cyan font-bold shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
