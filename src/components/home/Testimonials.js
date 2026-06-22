// TODO: Replace placeholder testimonials with real client quotes from Niranjan
import SectionTag from "../ui/SectionTag";

const testimonials = [
  {
    initials: "AR",
    name: "Arun R.",
    role: "Founder, D2C Brand",
    quote: "Bviate completely transformed our digital presence. Our conversion rate jumped 142% within the first 3 months of working together."
  },
  {
    initials: "PM",
    name: "Priya M.",
    role: "Head of Marketing, SaaS Startup",
    quote: "The automation workflows they built save us 20+ hours every week. We now respond to every lead within minutes — automatically."
  },
  {
    initials: "SK",
    name: "Suresh K.",
    role: "CEO, E-commerce Store",
    quote: "Professional, fast, and genuinely invested in our results. The team at Bviate feels like an extension of our own."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <SectionTag>Client Stories</SectionTag>
          <h2 className="font-display font-black text-4xl text-white text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-secondary text-center">Real results from real partnerships.</p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="text-yellow-400 mb-4 text-lg">★★★★★</div>

              {/* Quote */}
              <p className="text-secondary text-sm leading-relaxed mb-6 italic flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-secondary text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
