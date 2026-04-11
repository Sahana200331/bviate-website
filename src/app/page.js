import LeadContactForm from "@/components/LeadContactForm";

export default function Home() {
  const categories = [
    {
      title: "Hospital Uniforms",
      description:
        "Comfort-first scrubs, lab coats, and patient-facing uniforms designed for long shifts and easy maintenance.",
    },
    {
      title: "Hotel Uniforms",
      description:
        "Elegant, brand-forward uniforms for front office, housekeeping, kitchen, and service teams.",
    },
    {
      title: "Security Uniforms",
      description:
        "Durable, professional uniforms built for field reliability, movement, and all-day performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-navy">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 lg:py-14">
        <section className="rounded-3xl bg-linear-to-r from-navy to-card2 px-8 py-14 text-white shadow-xl md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Bviate Ventures
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Professional Uniform Manufacturing for Modern Businesses
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-secondary md:text-lg">
            We design and manufacture high-quality uniforms tailored for
            hospitals, hotels, and security teams. Durable fabrics, premium
            finishing, and on-time delivery.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Request a Quote
          </a>
        </section>

        <section id="categories" className="mt-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Uniform Categories
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Purpose-built collections crafted to match your team roles, brand
            image, and work environment.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-secondary/35 bg-card p-6 text-white shadow-sm"
              >
                <h3 className="font-display text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-3 leading-7 text-secondary">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 rounded-3xl border border-secondary/35 bg-white px-8 py-10 shadow-sm md:px-10"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Contact Us
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Share your requirements and we will get in touch with a tailored
            proposal for your uniforms.
          </p>
          <LeadContactForm />
        </section>
      </main>
    </div>
  );
}
