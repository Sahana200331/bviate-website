import SectionTag from "../../components/ui/SectionTag";
import CTABanner from "../../components/CTABanner";
import Button from "../../components/ui/Button";

export const metadata = {
  title: "Case Studies – Real Results | Bviate Ventures",
  description: "See how Bviate Ventures has driven measurable growth for ambitious brands through automation, performance marketing, SEO, and web development.",
  openGraph: {
    title: "Case Studies – Real Results | Bviate Ventures",
    description: "See how Bviate Ventures has driven measurable growth for ambitious brands through automation, performance marketing, SEO, and web development.",
    url: "https://bviateventures.com/case-studies",
    siteName: "Bviate Ventures",
    type: "website",
  }
};

const caseStudies = [
  {
    tag: "N8N Automation",
    tagColor: "text-primary",
    industry: "E-Commerce Brand",
    title: "From 2-Hour Response Times to 2-Minute Follow-Ups",
    problem: "A growing D2C brand was losing leads daily because their sales team couldn't follow up fast enough. Leads filled out forms, got no response for hours, and bought from competitors.",
    solution: "We built a fully automated lead nurturing system using N8N — the moment a lead submitted a form, they received a personalised WhatsApp message, an email sequence, and a CRM entry, all within 60 seconds.",
    results: [
      { metric: "38%", label: "Increase in Conversions" },
      { metric: "2 min", label: "Avg Lead Response Time" },
      { metric: "0", label: "Leads Falling Through Cracks" },
    ]
  },
  {
    tag: "Performance Marketing",
    tagColor: "text-cyan",
    industry: "B2B SaaS Startup",
    title: "3x ROAS and a 40% Drop in Cost-Per-Lead",
    problem: "A SaaS startup was running Google and Meta ads with a bloated budget and no clear attribution. They knew half their ad spend was wasted — they just didn't know which half.",
    solution: "We rebuilt their entire ad account structure, installed proper conversion tracking, and introduced a creative testing framework. Within 60 days we had isolated the top performers and cut all underperforming campaigns.",
    results: [
      { metric: "3x", label: "Return on Ad Spend" },
      { metric: "40%", label: "Reduction in CPL" },
      { metric: "60 days", label: "To Profitable Campaigns" },
    ]
  },
  {
    tag: "SEO Optimisation",
    tagColor: "text-purple",
    industry: "Local Services Business",
    title: "2x Organic Traffic in 90 Days — Zero Paid Ads",
    problem: "A local services company was invisible on Google. Their competitors dominated the first page and they relied entirely on referrals and expensive PPC to get clients.",
    solution: "We ran a full technical SEO audit, rebuilt their content architecture, optimised their Google Business Profile, and published 12 high-intent service pages. Rankings followed.",
    results: [
      { metric: "2x", label: "Organic Traffic" },
      { metric: "90 days", label: "To Hit Targets" },
      { metric: "Page 1", label: "For 8 Target Keywords" },
    ]
  },
  {
    tag: "Web Development + Funnels",
    tagColor: "text-green-400",
    industry: "D2C Brand",
    title: "52% More Checkouts — Same Traffic, Better Website",
    problem: "A D2C brand was spending heavily on ads but their website was haemorrhaging potential customers at every step. High bounce rates, low add-to-cart rates, and an abandoned cart problem.",
    solution: "We redesigned their site from the ground up — optimised landing pages, a frictionless checkout flow, trust elements, and an abandoned cart automation sequence to recover lost revenue.",
    results: [
      { metric: "52%", label: "Checkout Conversion Lift" },
      { metric: "0.8s", label: "Page Load Time" },
      { metric: "28%", label: "Abandoned Cart Recovery" },
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-13 overflow-hidden bg-navy">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center">
          <SectionTag>Case Studies</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Real Businesses.{" "}
            <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
              Real Results.
            </span>
          </h1>
          <p className="text-secondary text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            No vanity metrics. No cherry-picked screenshots. These are the actual results we've driven for brands
            that chose to stop guessing and start growing.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-13">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.title}
              className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 hover:border-primary/20 transition-colors"
            >
              {/* Left: Story */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`text-xs font-bold tracking-widest uppercase ${cs.tagColor}`}>{cs.tag}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-secondary text-xs font-medium tracking-widest uppercase">{cs.industry}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">{cs.title}</h2>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">The Problem</p>
                  <p className="text-secondary leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Our Solution</p>
                  <p className="text-secondary leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Right: Results */}
              <div className="flex flex-col justify-center gap-6">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">The Results</p>
                <div className="grid grid-cols-3 gap-4">
                  {cs.results.map((r) => (
                    <div key={r.label} className="bg-navy border border-white/10 rounded-2xl p-5 text-center">
                      <div className="font-display text-3xl font-black text-white mb-1">{r.metric}</div>
                      <div className="text-secondary text-xs font-medium leading-tight">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        tag="Your Turn"
        title="Want Results Like These for Your Business?"
        subtitle="Book a free discovery call. We'll identify the biggest growth levers in your business and build a plan to hit them."
        primaryText="Book a Free Discovery Call →"
        secondaryText="Explore Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
