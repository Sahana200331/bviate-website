import SEOContent from "./SEOContent";
import CTABanner from "../../../components/CTABanner";

export const metadata = {
  title: "SEO Optimisation | Bviate Solutions",
  description: "Technical SEO, content strategy, and authority building that drives compounding organic traffic — without paying per click.",
  openGraph: {
    title: "SEO Optimisation | Bviate Solutions",
    description: "Technical SEO, content strategy, and authority building that drives compounding organic traffic — without paying per click.",
    url: "/services/seo",
    siteName: "Bviate Solutions",
    type: "website",
  },
};

export default function SEOPage() {
  return (
    <>
      <main>
        <SEOContent />
      </main>
      <CTABanner
        tag="Ready to Rank?"
        title="Let's Get Your Business to Page 1."
        subtitle="Book a free discovery call. We'll run a quick audit of your current SEO position and map out a clear path to ranking."
        primaryText="Book a Free Discovery Call →"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
