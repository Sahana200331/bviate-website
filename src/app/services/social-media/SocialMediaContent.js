"use client";
import ServicePageLayout from "../../../components/services/ServicePageLayout";

// TODO: Niranjan to review all copy below before launch

const included = [
  "Platform strategy (Instagram, LinkedIn, YouTube Shorts)", // TODO: confirm platforms
  "Monthly content calendar planning", // TODO: confirm deliverable
  "Graphic design and short-form video editing", // TODO: confirm what's in-scope
  "Caption copywriting — consistent brand voice", // TODO: confirm
  "Posting schedule and full account management", // TODO: confirm posting frequency
  "Hashtag strategy and SEO for discoverability", // TODO: confirm
  "Community management — comments, DMs, engagement", // TODO: confirm scope
  "Monthly analytics report", // TODO: confirm reporting format
];

const results = [
  "4–5 consistent, on-brand posts per week", // TODO: confirm target posting frequency
  "Measurable growth in organic reach and follower count", // TODO: replace with real stat
  "Higher trust and authority in your niche", // TODO: confirm messaging
  "Content that warms audiences and supports paid ads", // TODO: confirm
  "A social presence that reflects your brand quality", // TODO: confirm messaging
];

export default function SocialMediaContent() {
  return (
    <ServicePageLayout
      tag="Social Media Management"
      emoji="📱"
      headline={
        <>
          A Brand People Actually{" "}
          <span className="bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
            Follow — and Trust.
          </span>
        </>
      }
      tagline="Content strategy, creative production, and community management that builds brand equity and turns your followers into customers."
      included={included}
      results={results}
    />
  );
}
