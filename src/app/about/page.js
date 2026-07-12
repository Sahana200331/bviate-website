import SectionTag from "../../components/ui/SectionTag";
import CTABanner from "../../components/CTABanner";
import Button from "../../components/ui/Button";

export const metadata = {
  title: "About Us | Bviate Solutions",
  description: "Learn about Bviate Solutions — our story, mission, and the team driving digital growth for ambitious brands.",
  openGraph: {
    title: "About Us | Bviate Solutions",
    description: "Learn about Bviate Solutions — our story, mission, and the team driving digital growth for ambitious brands.",
    url: "/about",
    siteName: "Bviate Solutions",
    type: "website",
  }
};

const values = [
  {
    icon: "⚡",
    title: "Speed Over Perfection",
    desc: "We move fast, ship real results, and iterate. Waiting for perfect is the enemy of growth."
  },
  {
    icon: "📊",
    title: "Data First",
    desc: "Every decision we make is backed by numbers — not gut feelings, not trends, not guesses."
  },
  {
    icon: "🤝",
    title: "Partner Mindset",
    desc: "We treat your business like our own. Your wins are our wins. Your bottlenecks are our problems to solve."
  },
  {
    icon: "🔁",
    title: "Systems Over Tasks",
    desc: "We don't do one-off work. We build systems that compound — funnels, automations, and assets that keep working."
  }
];

const stats = [
  { value: "50+", label: "Campaigns Launched" },
  { value: "3x", label: "Average ROAS" },
  { value: "40%", label: "Lower CPL" },
  { value: "24h", label: "Response Time" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-36 pb-24 px-13 overflow-hidden bg-navy">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <SectionTag>About Bviate Solutions</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
            We Exist to Make{" "}
            <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
              Ambitious Brands
            </span>{" "}
            Unstoppable.
          </h1>
          <p className="text-secondary text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
            Bviate Solutions is a full-stack digital growth agency. We combine automation, performance marketing,
            web development, and SEO into one integrated engine that drives predictable, scalable growth.
          </p>
          <Button href="/contact">Work With Us →</Button>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-white/10 py-12 px-13">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-x-0 md:divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center text-center px-4">
              <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">{s.value}</div>
              <div className="text-secondary text-sm font-medium tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-13">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTag>Our Story</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Built by Operators, Not Just Marketers.
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-5">
              Bviate Solutions was founded on a simple observation: most agencies deliver reports, not results.
              They run campaigns in silos — ads here, SEO there, a website somewhere else — and wonder why growth stalls.
            </p>
            <p className="text-secondary text-lg leading-relaxed mb-5">
              We built Bviate differently. Every service we offer is connected into a single growth system.
              Your ads drive traffic to conversion-optimised pages. Your leads get followed up automatically.
              Your content ranks for the terms your buyers are searching. Everything talks to everything.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              The result is compounding growth — not a one-time spike, but a machine that gets better every month.
            </p>
          </div>

          {/* Visual card */}
          <div className="bg-card border border-white/10 rounded-3xl p-10 flex flex-col gap-6">
            <div className="text-5xl">🚀</div>
            <h3 className="text-white text-2xl font-bold">The Bviate Growth Engine</h3>
            <div className="flex flex-col gap-4">
              {[
                { step: "01", text: "Attract the right traffic with SEO + Ads" },
                { step: "02", text: "Convert visitors with high-performance websites" },
                { step: "03", text: "Automate follow-up so no lead goes cold" },
                { step: "04", text: "Scale what's working with data-driven optimisation" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="text-primary font-black font-display text-lg shrink-0">{item.step}</span>
                  <span className="text-secondary">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-13 bg-card border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTag>Our Values</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-secondary text-lg">
              These aren't posters on a wall. They're the principles that drive every decision we make for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-navy border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/40 transition-colors">
                <div className="text-4xl">{v.icon}</div>
                <h3 className="text-white text-xl font-bold">{v.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Let's Talk"
        title="Ready to Work With a Team That's Obsessed With Your Growth?"
        subtitle="Book a free 30-minute discovery call. We'll map out exactly what your business needs to scale."
        primaryText="Book a Discovery Call →"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
