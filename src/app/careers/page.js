import SectionTag from "../../components/ui/SectionTag";
import CTABanner from "../../components/CTABanner";
import Button from "../../components/ui/Button";

export const metadata = {
  title: "Careers – Join Bviate Solutions",
  description: "Join the team at Bviate Solutions. We're building the best digital growth agency in India — and we're looking for obsessive, high-ownership operators.",
  openGraph: {
    title: "Careers – Join Bviate Solutions",
    description: "Join the team at Bviate Solutions. We're building the best digital growth agency in India — and we're looking for obsessive, high-ownership operators.",
    url: "/careers",
    siteName: "Bviate Solutions",
    type: "website",
  }
};

const perks = [
  {
    icon: "🚀",
    title: "Work on Real Problems",
    desc: "No busywork. Every project you touch directly impacts a client's revenue. You'll see the results of your work immediately."
  },
  {
    icon: "📈",
    title: "Grow Fast",
    desc: "We're a small, fast-moving team. You'll wear multiple hats, pick up new skills rapidly, and take on more ownership than any large agency would give you."
  },
  {
    icon: "🌏",
    title: "Remote-First",
    desc: "Work from anywhere. We care about output, not office hours. Deliver results and you can build your own schedule."
  },
  {
    icon: "🧠",
    title: "Learning Budget",
    desc: "We invest in our team. Courses, tools, conferences — if it makes you better at what you do, we'll back it."
  },
  {
    icon: "💸",
    title: "Performance-Based Pay",
    desc: "Your compensation grows as the business grows. We believe in sharing the upside with the people who create it."
  },
  {
    icon: "🤝",
    title: "Tight-Knit Team",
    desc: "No politics, no bureaucracy. Just a small group of high-ownership people who hold each other to a high standard and actually enjoy the work."
  }
];

const openRoles = [
  {
    title: "Performance Marketing Specialist",
    type: "Full-Time · Remote",
    desc: "Own and scale paid media campaigns across Google and Meta for our clients. You know your way around an ad account and can build a creative testing framework from scratch.",
    skills: ["Google Ads", "Meta Ads", "Analytics", "Creative Strategy"]
  },
  {
    title: "N8N Automation Engineer",
    type: "Full-Time · Remote",
    desc: "Design and build automation workflows using N8N, Zapier, and custom APIs. You can turn a messy business process into a clean, reliable system.",
    skills: ["N8N", "REST APIs", "Webhooks", "CRM Integrations"]
  },
  {
    title: "SEO Strategist",
    type: "Full-Time · Remote",
    desc: "Drive organic growth for our clients through technical SEO, content strategy, and link building. You think in systems and measure everything.",
    skills: ["Technical SEO", "Content Strategy", "Ahrefs / Semrush", "GSC"]
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-13 overflow-hidden bg-navy">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <SectionTag>We're Hiring</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-4xl">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
              Digital Growth
            </span>{" "}
            With Us.
          </h1>
          <p className="text-secondary text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
            We're not looking for order-takers. We're looking for high-ownership operators who are obsessed with results,
            hungry to learn, and want to build something that actually matters.
          </p>
          <Button href="#open-roles">See Open Roles →</Button>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-24 px-13 bg-card border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTag>Why Bviate</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              What It's Like to Work Here
            </h2>
            <p className="text-secondary text-lg">
              We're early-stage, fast-moving, and genuinely fun to work with. Here's what you can expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="bg-navy border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/30 transition-colors">
                <div className="text-4xl">{p.icon}</div>
                <h3 className="text-white text-xl font-bold">{p.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-13" id="open-roles">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTag>Open Positions</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Current Openings
            </h2>
            <p className="text-secondary text-lg">
              Don't see a role that fits? Email us at{" "}
              <a href="mailto:info@bviate.com" className="text-primary hover:underline">info@bviate.com</a>
              {" "}with your background — we hire great people before we have a role for them.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-white text-xl font-bold">{role.title}</h3>
                    <span className="text-xs font-medium text-secondary bg-white/5 border border-white/10 px-3 py-1 rounded-full">{role.type}</span>
                  </div>
                  <p className="text-secondary leading-relaxed max-w-2xl">{role.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`mailto:info@bviate.com?subject=Application – ${role.title}`}
                  className="shrink-0 bg-gradient-to-r from-primary to-purple text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm text-center"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        tag="Don't See Your Role?"
        title="We're Always Looking for Exceptional People."
        subtitle="Send us your CV and a note on what you'd bring to the team. We read every application."
        primaryText="Email Us →"
        secondaryText="Learn About Us"
        secondaryHref="/about"
      />
    </>
  );
}
