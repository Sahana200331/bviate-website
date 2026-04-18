// src/app/about/page.js
import AboutContent from "./AboutContent"; // Safe colocation import
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: 'About Us | Bviate Ventures',
  description: 'Meet the team of growth architects and developers behind Bviate Ventures.',
  openGraph: {
    title: 'About Us | Bviate Ventures',
    description: 'Meet the team of growth architects and developers behind Bviate Ventures.',
    url: 'https://bviate.com/about',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutContent />
      </main>
      
      <CTABanner 
        tag="Work With Us" 
        title="Ready to engineer your growth?" 
        primaryText="Book a Discovery Call →" 
        primaryHref="/contact"
      />
    </>
  );
}