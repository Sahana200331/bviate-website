// src/app/services/automation/page.js
import AutomationContent from "./AutomationContent"; 
import CTABanner from "../../../components/CTABanner";

export const metadata = {
  title: 'N8N Business Automation | Bviate Ventures',
  description: 'Your business should grow while you sleep. We build custom N8N workflows to automate your busywork.',
  openGraph: {
    title: 'N8N Business Automation | Bviate Ventures',
    description: 'Your business should grow while you sleep. We build custom N8N workflows to automate your busywork.',
    url: 'https://bviate.com/services/automation',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}
export const metadata = {
  title: "N8N Business Automation | Bviate Ventures",
  description: "Learn about N8N Business Automation at Bviate Ventures.",
  openGraph: {
    title: "N8N Business Automation | Bviate Ventures",
    description: "Learn about N8N Business Automation at Bviate Ventures.",
    url: "https://bviate.com/services/automation",
    siteName: "Bviate Ventures",
    type: "website",
  },
}
export default function AutomationPage() {
  return (
    <>
      <main>
        <AutomationContent />
      </main>
      
      <CTABanner 
        tag="Ready to Scale?" 
        title="Stop doing manual data entry." 
        primaryText="Book a Free Automation Demo →" 
        primaryHref="/contact"
      />
    </>
  );
}