// src/app/careers/page.js
import CareersContent from "./CareersContent"; // Safe colocation import!
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: 'Careers | Bviate Ventures',
  description: 'Join the team of high-performance growth architects and developers at Bviate Ventures.',
  openGraph: {
    title: 'Careers | Bviate Ventures',
    description: 'Join the team of high-performance growth architects and developers at Bviate Ventures.',
    url: 'https://bviate.com/careers',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}

export default function CareersPage() {
  return (
    <>
      <main>
        <CareersContent />
      </main>
      
      {/* Final CTA pointing back to contact for general inquiries */}
      <CTABanner 
        tag="Want to hire us instead?" 
        title="Let's scale your business." 
        primaryText="Book a Discovery Call →" 
        primaryHref="/contact"
      />
    </>
  );
}