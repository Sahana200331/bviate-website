import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import ServicesGrid from "../components/home/ServicesGrid";
import HowWeWork from "../components/home/HowWeWork";
import Industries from "../components/home/Industries";

export const metadata = {
  title: "Bviate Ventures — We Build, Scale, and Automate Ambitious Brands",
  description: "Bviate Ventures — We Build, Scale, and Automate Ambitious Brands",
  openGraph: {
    title: "Bviate Ventures — We Build, Scale, and Automate Ambitious Brands",
    description: "Bviate Ventures — We Build, Scale, and Automate Ambitious Brands",
    url: "https://bviate.com",
    siteName: "Bviate Ventures",
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
    </main>
  );
}