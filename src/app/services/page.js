import ServicesGrid from "../../components/home/ServicesGrid";
import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Digital Services | Bviate Solutions",
  description: "Explore Bviate Solutions' full suite of digital services — automation, web development, SEO, performance marketing, social media, and funnels.",
  openGraph: {
    title: "Digital Services | Bviate Solutions",
    description: "Explore Bviate Solutions' full suite of digital services — automation, web development, SEO, performance marketing, social media, and funnels.",
    url: "/services",
    siteName: "Bviate Solutions",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <CTABanner
        tag="Ready to Scale?"
        title="Let's Build Your Digital Growth Engine"
        primaryText="Book a Free Discovery Call →"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
