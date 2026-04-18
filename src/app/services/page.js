// src/app/services/page.js
import ServicesGrid from "../../components/home/ServicesGrid"; // Reusing your awesome grid!
import Link from "next/link";

// Required Metadata
export const metadata = {
  title: 'Our Services | Bviate Ventures',
  description: 'Explore our digital growth engines including web development, SEO, performance marketing, and N8N automation.',
  openGraph: {
    title: 'Our Services | Bviate Ventures',
    description: 'Explore our digital growth engines including web development, SEO, performance marketing, and N8N automation.',
    url: 'https://bviate.com/services',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <main className="pt-32 pb-10 px-13 max-w-7xl mx-auto text-center fade-in">
        <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Digital Growth <br className="hidden md:block"/> Engineered to Scale.
        </h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          We don't just offer standalone services. We build interconnected systems designed to lower your acquisition costs and maximize revenue.
        </p>
      </main>

      {/* The 6-Card Grid (Imported directly from your Home Page components!) */}
      <div className="mt-[-60px]">
        <ServicesGrid />
      </div>

      {/* Bottom Section: Not sure which service? */}
      <section className="py-20 px-13 max-w-4xl mx-auto text-center fade-in" style={{ transitionDelay: '200ms' }}>
        <div className="bg-gradient-to-br from-primary/20 to-purple/20 border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-secondary mb-8 text-lg">
            Every business is different. Book a free discovery call, and we will audit your current setup to recommend the highest-leverage actions for your specific goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-navy font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors shadow-lg"
          >
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}