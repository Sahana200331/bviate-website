"use client";
import ServicePageLayout from "../../../components/services/ServicePageLayout";

// TODO: Niranjan to review all copy below before launch

const included = [
  "Google Ads — Search, Display, and YouTube campaigns", // TODO: confirm channels
  "Meta Ads — Facebook and Instagram campaigns", // TODO: confirm channels
  "Full-funnel strategy: awareness → consideration → conversion", // TODO: confirm
  "Creative strategy and ad copywriting", // TODO: confirm scope
  "A/B testing framework for creatives and audiences", // TODO: confirm
  "Conversion tracking setup (GA4 + Meta Pixel)", // TODO: confirm tools
  "Weekly performance reports with actionable insights", // TODO: confirm reporting cadence
  "Ongoing optimisation — we never set and forget", // TODO: confirm
];

const results = [
  "3x average ROAS across client campaigns", // TODO: replace with verified avg stat
  "40% average reduction in cost-per-lead", // TODO: replace with verified avg stat
  "First profitable campaigns within 30–60 days", // TODO: confirm timeline
  "Clear attribution — you know exactly what's working", // TODO: confirm
  "Campaigns that scale without proportionally scaling spend", // TODO: confirm messaging
];

export default function PerfMarketingContent() {
  return (
    <ServicePageLayout
      tag="Performance Marketing"
      emoji="📈"
      headline={
        <>
          Ads That Actually{" "}
          <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">
            Pay for Themselves.
          </span>
        </>
      }
      tagline="Data-driven Google and Meta campaigns designed to lower your cost-per-lead and maximise return on every rupee spent."
      included={included}
      results={results}
    />
  );
}
