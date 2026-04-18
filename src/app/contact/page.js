// src/app/contact/page.js
import LeadContactForm from "../../components/LeadContactForm";
import SectionTag from "../../components/ui/SectionTag";
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: 'Book a Discovery Call | Bviate Ventures',
  description: 'Ready to scale? Contact Bviate Ventures to build your custom digital growth engine.',
  openGraph: {
    title: 'Book a Discovery Call | Bviate Ventures',
    description: 'Ready to scale? Contact Bviate Ventures to build your custom digital growth engine.',
    url: 'https://bviate.com/contact',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <main className="pt-32 pb-24 px-13 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16">
          <SectionTag>Contact Us</SectionTag>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Let's Build Something <br className="hidden md:block"/> Exceptional.
          </h1>
          <p className="text-secondary text-lg max-w-xl">
            Fill out the form below or book a direct call with our team. We aim to respond to all inquiries within 24 hours.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: The Form */}
          <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <LeadContactForm />
          </div>

          {/* Right Column: Direct Contact & Calendly */}
          <div className="flex flex-col justify-center gap-10">
            
            {/* Direct Contact Block */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-6">Direct Contact</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@bviate.com" className="flex items-center gap-4 text-secondary hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">✉️</div>
                  <span className="text-lg">hello@bviate.com</span>
                </a>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors text-green-500">💬</div>
                  <span className="text-lg">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            {/* Calendly Block */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Book a Discovery Call</h3>
              <p className="text-secondary mb-6">
                Skip the form and schedule a 30-minute strategy session directly on Niranjan's calendar.
              </p>
              <a 
                href="https://calendly.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg hover:border-primary/40 hover:bg-primary/10 transition-all font-semibold"
              >
                📅 Open Calendly
              </a>
            </div>

          </div>
        </div>
      </main>
      
      {/* Footer CTA */}
      <CTABanner tag="Still Not Sure?" title="Explore Our Case Studies" primaryText="View Success Stories →" secondaryText="Back to Home" secondaryHref="/" />
    </>
  );
}