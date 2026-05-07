"use client";
import ServicePageLayout from "../../../components/services/ServicePageLayout";

// TODO: Niranjan to review all copy below before launch

const included = [
  "Full funnel strategy and architecture", // TODO: confirm deliverable
  "Landing page design and copy", // TODO: confirm if design is in-scope
  "Lead magnet creation (PDF, quiz, or webinar)", // TODO: confirm formats offered
  "Email sequences — welcome, nurture, and sales", // TODO: confirm number of emails
  "Sales page copywriting", // TODO: confirm
  "VSL (video sales letter) scripts", // TODO: confirm if offered
  "A/B testing of headlines and CTAs", // TODO: confirm
  "Integration with your CRM and automation stack", // TODO: confirm tools supported
];

const results = [
  "Higher opt-in rates on lead generation pages", // TODO: replace with real avg stat
  "Improved email open rates and click-through rates", // TODO: replace with real avg stat
  "Shorter sales cycle — prospects arrive pre-sold", // TODO: confirm messaging
  "Copy that reflects your brand voice and authority", // TODO: confirm
  "A complete system from cold traffic to closed client", // TODO: confirm messaging
];

export default function FunnelsContent() {
  return (
    <ServicePageLayout
      tag="Funnels & Copywriting"
      emoji="✍️"
      headline={
        <>
          Copy That Makes{" "}
          <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
            People Buy.
          </span>
        </>
      }
      tagline="High-converting sales funnels, landing pages, and sequences engineered to move your ideal client from 'interested' to 'sold.'"
      included={included}
      results={results}
    />
  );
}
