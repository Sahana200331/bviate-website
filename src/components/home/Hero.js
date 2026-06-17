import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["700"] });

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-secondary text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          Bviate Digital Growth Engine
        </div>

        {/* Headline */}
        <h1
          className={bricolage.className}
          style={{
            fontWeight: 700,
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            maxWidth: '20ch',
            margin: '0 auto',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          We Build, Scale, and{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline',
            }}
          >
            Automate{' '}
          </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline',
            }}
          >
            Ambitious Brands.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto text-center mb-10">
          From <strong className="text-white">web development</strong> and{' '}
          <strong className="text-white">digital marketing</strong> to{' '}
          <strong className="text-white">business automation</strong> —{' '}
          we partner with growing companies to turn ambitious goals into measurable results.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
          >
            Let&apos;s Talk →
          </Link>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
          >
            Our Services ↓
          </a>
        </div>

        {/* Reassurance Line */}
        <p className="text-center text-sm">
          <span className="text-cyan-400 font-semibold">Free strategy call.</span>
          <span className="text-secondary"> No commitment. No hard pitch.</span>
        </p>

      </div>
    </section>
  );
}
