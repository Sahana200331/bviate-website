"use client";
import ServicePageLayout from "../../../components/services/ServicePageLayout";

// TODO: Niranjan to review all copy below before launch

const included = [
  "Full technical SEO audit", // TODO: confirm scope of audit deliverable
  "Site speed and Core Web Vitals fixes", // TODO: confirm
  "Keyword research and content architecture", // TODO: confirm deliverable format
  "On-page SEO — titles, meta descriptions, schema, internal linking", // TODO: confirm
  "High-intent service and landing page builds", // TODO: confirm
  "Google Business Profile optimisation (local SEO)", // TODO: confirm if offered
  "Monthly content production — blog posts and landing pages", // TODO: confirm volume
  "Backlink strategy and outreach", // TODO: confirm if included in base package
];

const results = [
  "Page 1 rankings for target keywords within 90 days", // TODO: replace with real timeline data
  "2x organic traffic growth in the first 3 months", // TODO: replace with real avg stat
  "Sustainable traffic that doesn't stop when you stop paying", // TODO: confirm messaging
  "Higher-quality leads — intent-rich, not just volume", // TODO: confirm
  "Compounding returns: every month builds on the last", // TODO: confirm
];

export default function SEOContent() {
  return (
    <ServicePageLayout
      tag="SEO Optimisation"
      emoji="🔍"
      headline={
        <>
          Rank for What Your Buyers{" "}
          <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
            Are Searching.
          </span>
        </>
      }
      tagline="Technical SEO, content strategy, and authority building that drives compounding organic traffic — month after month, without paying per click."
      included={included}
      results={results}
    />
  );
}
