import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import ServicesGrid from "../components/home/ServicesGrid";
import HowWeWork from "../components/home/HowWeWork";
import Industries from "../components/home/Industries";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTABanner from "../components/CTABanner";

export const metadata = {
  title: "Bviate Solutions — We Build, Scale, and Automate Ambitious Brands",
  description: "Bviate Solutions — We Build, Scale, and Automate Ambitious Brands",
  openGraph: {
    title: "Bviate Solutions — We Build, Scale, and Automate Ambitious Brands",
    description: "Bviate Solutions — We Build, Scale, and Automate Ambitious Brands",
    url: "/",
    siteName: "Bviate Solutions",
    type: "website",
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <HowWeWork />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
