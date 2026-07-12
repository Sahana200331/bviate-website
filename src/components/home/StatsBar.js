// src/components/home/StatsBar.js
"use client";
import { useEffect, useRef } from "react";

// The Count-Up Animation Pattern from DOC-4
// Renders the final value by default so it's correct with JS disabled or
// before hydration; the count-up is a progressive-enhancement animation.
function CountUp({ end, suffix = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0;
        const step = end / 50;
        const timer = setInterval(() => {
          current += step;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          if (ref.current) ref.current.textContent = Math.floor(current) + suffix;
        }, 30);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
  }, [end, suffix]);

  return <span ref={ref}>{end}{suffix}</span>;
}

export default function StatsBar() {
  return (
    // bg-card with top and bottom borders as requested
    <section className="bg-card border-y border-white/10 py-12 px-13 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Grid with Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-x-0 md:divide-x divide-white/10">
          
          {/* Metric 1 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
              <CountUp end={50} suffix="+" />
            </div>
            <div className="text-secondary text-sm font-medium tracking-widest uppercase">Campaigns</div>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
              <CountUp end={3} suffix="x" />
            </div>
            <div className="text-secondary text-sm font-medium tracking-widest uppercase">Avg ROAS</div>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
              <CountUp end={40} suffix="%" />
            </div>
            <div className="text-secondary text-sm font-medium tracking-widest uppercase">Lower CPL</div>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
              <CountUp end={44} />
            </div>
            <div className="text-secondary text-sm font-medium tracking-widest uppercase">Specialist Skills</div>
          </div>

        </div>
      </div>
    </section>
  );
}