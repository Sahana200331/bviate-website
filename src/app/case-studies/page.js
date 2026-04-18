// src/app/case-studies/page.js
import CaseStudiesContent from "./CaseStudiesContent"; // Safe colocation import!
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: 'Case Studies | Bviate Ventures',
  description: 'See how we have engineered scalable digital growth for brands across e-commerce, SaaS, and more.',
  openGraph: {
    title: 'Case Studies | Bviate Ventures',
    description: 'See how we have engineered scalable digital growth for brands across e-commerce, SaaS, and more.',
    url: 'https://bviate.com/case-studies',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <main>
        <CaseStudiesContent />
      </main>
      
      {/* Final CTA as required by DOC-4 */}
      <CTABanner 
        tag="Ready for your own success story?" 
        title="Let's build your growth engine." 
        primaryText="Book a Discovery Call →" 
        primaryHref="/contact"
      />
    </>
  );
}