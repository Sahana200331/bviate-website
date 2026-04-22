import LeadContactForm from "../../components/LeadContactForm";
import SectionTag from "../../components/ui/SectionTag";
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Book a Discovery Call | Bviate Ventures",
  description: "Book a Discovery Call with Bviate Ventures.",
  openGraph: {
    title: "Book a Discovery Call | Bviate Ventures",
    description: "Book a Discovery Call with Bviate Ventures.",
    url: "https://bviate.com/contact",
    siteName: "Bviate Ventures",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-32 pb-24 px-13 max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionTag>Contact Us</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Let's Build Something <br className="hidden md:block"/> Exceptional.
          </h1>
          <p className="text-secondary text-lg max-w-xl">
            Fill out the form below or book a direct call with our team. We aim to respond to all inquiries within 24 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <LeadContactForm />
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h3 className="text-white text-2xl font-bold mb-6">Direct Contact</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@bviate.com" className="text-secondary hover:text-white transition-colors">
                  hello@bviate.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <CTABanner />
    </>
  );
}