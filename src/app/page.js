// src/app/page.js
import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import ServicesGrid from "../components/home/ServicesGrid";
import HowWeWork from "../components/home/HowWeWork";
import Industries from "../components/home/Industries";
import Testimonials from "../components/home/Testimonials"; // Imported!
import CTABanner from "../components/CTABanner"; // Imported from the parent folder!

export const metadata = {
  title: 'Home | Bviate Ventures',
  description: 'We Build, Scale, and Automate Ambitious Brands. Discover our digital growth engines.',
  openGraph: {
    title: 'Home | Bviate Ventures',
    description: 'We Build, Scale, and Automate Ambitious Brands. Discover our digital growth engines.',
    url: 'https://bviate.com/',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <> 
      <Hero /> 
      <StatsBar />
      <ServicesGrid />
      <HowWeWork />
      <Industries />
      <Testimonials /> {/* Added to layout! */}
      <CTABanner /> {/* Added to layout! */}
    </>
  )
}