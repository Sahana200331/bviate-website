// src/app/services/automation/page.js
import AutomationContent from "./AutomationContent"; 
import CTABanner from "../../../components/CTABanner";

export const metadata = {
  title: 'N8N Business Automation | Bviate Solutions',
  description: 'Your business should grow while you sleep. We build custom N8N workflows to automate your busywork.',
  openGraph: {
    title: 'N8N Business Automation | Bviate Solutions',
    description: 'Your business should grow while you sleep. We build custom N8N workflows to automate your busywork.',
    url: '/services/automation',
    siteName: 'Bviate Solutions',
    type: 'website',
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