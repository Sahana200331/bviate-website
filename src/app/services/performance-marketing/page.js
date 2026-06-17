import PerfMarketingContent from "./PerfMarketingContent";
import CTABanner from "../../../components/CTABanner";

export const metadata = {
  title: "Performance Marketing | Bviate Solutions",
  description: "Data-driven Google and Meta ad campaigns that lower your cost-per-lead and maximise ROAS. No guesswork — just results.",
  openGraph: {
    title: "Performance Marketing | Bviate Solutions",
    description: "Data-driven Google and Meta ad campaigns that lower your cost-per-lead and maximise ROAS. No guesswork — just results.",
    url: "https://bviate.com/services/performance-marketing",
    siteName: "Bviate Solutions",
    type: "website",
  },
};

export default function PerformanceMarketingPage() {
  return (
    <>
      <main>
        <PerfMarketingContent />
      </main>
      <CTABanner
        tag="Ready to Scale Your Ads?"
        title="Stop Burning Budget. Start Getting Returns."
        subtitle="Book a free discovery call. We'll audit your current ad setup and show you exactly where money is being left on the table."
        primaryText="Book a Free Discovery Call →"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
