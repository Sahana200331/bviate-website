import WebDevContent from "./WebDevContent";
import CTABanner from "../../../components/CTABanner";

export const metadata = {
  title: "Web Development | Bviate Solutions",
  description: "Custom Next.js websites built for performance, SEO, and conversion. Fast, scalable, and designed to turn visitors into paying clients.",
  openGraph: {
    title: "Web Development | Bviate Solutions",
    description: "Custom Next.js websites built for performance, SEO, and conversion. Fast, scalable, and designed to turn visitors into paying clients.",
    url: "https://bviate.com/services/web-development",
    siteName: "Bviate Solutions",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <main>
        <WebDevContent />
      </main>
      <CTABanner
        tag="Ready to Build?"
        title="Let's Build a Website That Actually Earns Its Keep."
        subtitle="Book a free discovery call. We'll map out a website architecture designed around your growth goals."
        primaryText="Book a Free Discovery Call →"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
