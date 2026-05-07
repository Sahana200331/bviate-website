import SocialMediaContent from "./SocialMediaContent";
import CTABanner from "../../../components/CTABanner";

export const metadata = {
  title: "Social Media Management | Bviate Ventures",
  description: "Content strategy, creative production, and community management that builds brand equity and turns followers into customers.",
  openGraph: {
    title: "Social Media Management | Bviate Ventures",
    description: "Content strategy, creative production, and community management that builds brand equity and turns followers into customers.",
    url: "https://bviate.com/services/social-media",
    siteName: "Bviate Ventures",
    type: "website",
  },
};

export default function SocialMediaPage() {
  return (
    <>
      <main>
        <SocialMediaContent />
      </main>
      <CTABanner
        tag="Ready to Grow Your Presence?"
        title="Let's Build a Social Brand Worth Following."
        subtitle="Book a free discovery call. We'll review your current social presence and put together a content plan that actually moves the needle."
        primaryText="Book a Free Discovery Call →"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
