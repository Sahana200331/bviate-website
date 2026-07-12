import FunnelsContent from "./FunnelsContent";
import CTABanner from "../../../components/CTABanner";

export const metadata = {
  title: "Funnels & Copywriting | Bviate Solutions",
  description: "High-converting sales funnels, landing pages, and copy that move your ideal client from interested to sold.",
  openGraph: {
    title: "Funnels & Copywriting | Bviate Solutions",
    description: "High-converting sales funnels, landing pages, and copy that move your ideal client from interested to sold.",
    url: "/services/funnels-copywriting",
    siteName: "Bviate Solutions",
    type: "website",
  },
};

export default function FunnelsCopywritingPage() {
  return (
    <>
      <main>
        <FunnelsContent />
      </main>
      <CTABanner
        tag="Ready to Convert More Leads?"
        title="Let's Build a Funnel That Closes for You."
        subtitle="Book a free discovery call. We'll map out the exact funnel architecture your business needs to turn cold traffic into paying clients."
        primaryText="Book a Free Discovery Call →"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
