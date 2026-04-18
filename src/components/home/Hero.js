"use client"; // 1. Added this because animations need to run on the client

import Link from "next/link";
import Button from "../ui/Button";
import { useFadeIn } from "../../hooks/useFadeIn"; // 2. Imported the missing hook

export default function Hero() {
  useFadeIn(); // 3. Actually run the animation!

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-13 overflow-hidden bg-navy">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start gap-8 z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Bviate Digital Growth Engine
          </div>

          {/* Headline with Gradient Words */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight fade-in" style={{ transitionDelay: '100ms' }}>
            We <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">Build</span>, <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">Scale</span>, and <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">Automate</span> Ambitious Brands.
          </h1>

          {/* Subtext */}
          <p className="text-secondary text-lg md:text-xl font-light leading-relaxed max-w-xl fade-in" style={{ transitionDelay: '200ms' }}>
            Stop losing leads to bad systems. We build high-converting websites, automate your follow-ups, and run data-driven ads that actually close.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 fade-in" style={{ transitionDelay: '300ms' }}>
            <Button href="/contact">Book a Discovery Call →</Button>
            <Button href="/services" variant="secondary">Explore Services</Button>
          </div>

          {/* Trust Row */}
          <div className="flex items-center gap-4 mt-8 fade-in" style={{ transitionDelay: '400ms' }}>
            <div className="flex -space-x-3">
              {/* Fake avatars for now */}
              <div className="w-10 h-10 rounded-full border-2 border-navy bg-gradient-to-br from-primary to-purple" />
              <div className="w-10 h-10 rounded-full border-2 border-navy bg-gradient-to-br from-purple to-cyan" />
              <div className="w-10 h-10 rounded-full border-2 border-navy bg-gradient-to-br from-cyan to-primary" />
            </div>
            <p className="text-secondary text-sm font-medium">
              Trusted by growing brands — from India and beyond
            </p>
          </div>

        </div>

        {/* Right Column: Animated Panel */}
        <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center fade-in" style={{ transitionDelay: '200ms' }}>
          
          {/* Central Card with pulsing glow */}
          <div className="absolute z-20 w-48 h-48 bg-card border border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-2xl backdrop-blur-xl animate-[centerPulse_4s_ease-in-out_infinite]">
             {/* Rotating dashed ring */}
             <div className="absolute inset-0 border border-dashed border-primary/30 rounded-3xl animate-[spin_20s_linear_infinite]" />
             <span className="text-6xl">🚀</span>
             <span className="text-white font-bold tracking-wider">LIFTOFF</span>
          </div>

          {/* Floating Metric Card 1 (Top Left) */}
          <div className="absolute z-30 top-[10%] left-[10%] w-40 bg-card/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float1">
             <div className="text-primary text-sm font-bold mb-1">Conversion Rate</div>
             <div className="text-white text-2xl font-black">+142%</div>
          </div>

          {/* Floating Metric Card 2 (Top Right) */}
          <div className="absolute z-10 top-[20%] right-[5%] w-48 bg-card/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float2">
             <div className="text-cyan text-sm font-bold mb-1">Leads Automated</div>
             <div className="text-white text-2xl font-black">2,450 / mo</div>
          </div>

          {/* Floating Metric Card 3 (Bottom Left) */}
          <div className="absolute z-30 bottom-[20%] left-[5%] w-44 bg-card/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float3">
             <div className="text-purple text-sm font-bold mb-1">ROAS Target</div>
             <div className="text-white text-2xl font-black">Achieved 🎯</div>
          </div>

          {/* Floating Metric Card 4 (Bottom Right) */}
          <div className="absolute z-10 bottom-[10%] right-[15%] w-36 bg-card/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float4">
             <div className="text-green-400 text-sm font-bold mb-1">Site Speed</div>
             <div className="text-white text-2xl font-black">0.8s</div>
          </div>

        </div>

      </div>
    </section>
  );
}