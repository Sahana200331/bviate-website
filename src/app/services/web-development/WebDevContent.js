"use client";
import ServicePageLayout from "../../../components/services/ServicePageLayout";

// TODO: Niranjan to review all copy below before launch

const included = [
  "Custom website design (desktop + mobile)", // TODO: confirm scope
  "Built on Next.js — fast, scalable, and SEO-ready", // TODO: confirm tech stack mention
  "Tailwind CSS styling — pixel-perfect, brand-accurate", // TODO: confirm
  "Core Web Vitals optimisation — target 90+ PageSpeed score", // TODO: confirm target score
  "On-page SEO setup (meta tags, schema markup, sitemaps)", // TODO: confirm scope
  "Contact form connected to CRM and email automation", // TODO: confirm integrations
  "Google Analytics 4 integration", // TODO: confirm
  "Deployment and hosting on Vercel", // TODO: confirm
];

const results = [
  "Sub-1 second page load times on desktop", // TODO: confirm metric
  "90+ PageSpeed score (Lighthouse)", // TODO: confirm benchmark
  "Measurable lift in enquiry form submissions", // TODO: replace with real client stat
  "A website that ranks — not just one that looks good", // TODO: confirm messaging
  "Zero reliance on page builders, plugins, or themes", // TODO: confirm
];

export default function WebDevContent() {
  return (
    <ServicePageLayout
      tag="Web Development"
      emoji="💻"
      headline={
        <>
          Websites That Don{"'"}t Just Look Good{" "}
          <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
            — They Convert.
          </span>
        </>
      }
      tagline="We build fast, SEO-ready custom Next.js websites engineered to turn visitors into paying clients — not just impress them."
      included={included}
      results={results}
    />
  );
}
