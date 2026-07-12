// src/components/home/StatsBar.js
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

// Runs synchronously before the browser paints on the client, but is a no-op
// during SSR (avoids the "useLayoutEffect does nothing on the server" warning).
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// The Count-Up Animation Pattern from DOC-4
// Renders the final value for SSR/no-JS so a plain HTML fetch is correct.
// On the client, the layout effect swaps to "0" before first paint - so the
// user never sees the real value flash before the count-up animation starts.
function CountUp({ end, suffix = "" }) {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (ref.current) ref.current.textContent = "0" + suffix;
  }, [suffix]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
          el.textContent = Math.floor(current) + suffix;
        }, 30);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
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