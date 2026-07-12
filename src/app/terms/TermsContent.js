// src/app/terms/TermsContent.js
"use client";

import { useFadeIn } from "../../hooks/useFadeIn";
import SectionTag from "../../components/ui/SectionTag";

export default function TermsContent() {
  useFadeIn();

  return (
    <div className="w-full">
      <section className="pt-32 pb-16 px-13 text-center fade-in">
        <div className="max-w-3xl mx-auto">
          <SectionTag>Legal</SectionTag>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-secondary text-sm">Effective date: 11 July 2026</p>
        </div>
      </section>

      <section className="pb-24 px-13 fade-in">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 text-secondary leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of <strong className="text-white">bviatesolutions.com</strong> (the &quot;Website&quot;), operated by <strong className="text-white">Bviate Ventures Private Limited</strong>, doing business as <strong className="text-white">BVIATE Solutions</strong> (&quot;Bviate&quot;, &quot;we&quot;, &quot;us&quot;), a company registered in Bengaluru, Karnataka, India.
          </p>
          <p>By accessing the Website or engaging our services, you agree to these Terms.</p>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">1. About Our Services</h2>
            <p>Bviate provides digital services for businesses, including web and app development, business process automation (including n8n-based workflows), performance marketing, SEO, funnels and copywriting, and social media management (&quot;Services&quot;). Descriptions on the Website are for general information; the specific scope, deliverables, timelines, and fees for any engagement are defined in a separate written proposal, quotation, or agreement (&quot;Engagement Agreement&quot;). If these Terms conflict with an Engagement Agreement, the Engagement Agreement prevails for that engagement.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">2. Enquiries and Discovery Calls</h2>
            <p>Submitting the contact form, chatting with our website assistant, or booking a discovery call does not create a client relationship or any obligation on either side. A client relationship begins only when both parties accept an Engagement Agreement.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">3. Fees and Payment</h2>
            <p className="mb-3">Fees, payment schedules, and applicable taxes (including GST) are stated in the Engagement Agreement. Unless agreed otherwise in writing:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Invoices are payable within the period stated on the invoice;</li>
              <li>Work may be paused on overdue accounts;</li>
              <li>Third-party costs (such as advertising spend, domain, hosting, software subscriptions, and API usage) are payable by the client and are separate from our service fees.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">4. Client Responsibilities</h2>
            <p>To deliver the Services, we rely on you to provide timely access to necessary accounts, brand assets, approvals, and accurate information. Delays in providing these may affect timelines. You confirm that any material you provide to us does not infringe third-party rights.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">5. No Guarantee of Specific Results</h2>
            <p>Marketing, SEO, and advertising outcomes depend on many factors outside our control (including platform algorithms, market conditions, competition, and your product and pricing). Any figures on the Website — including case studies and testimonials — describe past results for specific clients and are not a promise of similar results for you. We commit to professional, diligent work; we do not guarantee specific rankings, traffic, lead volumes, revenue, or return on ad spend unless expressly stated in an Engagement Agreement.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong className="text-white">Our Website content</strong> (text, design, graphics, logos) belongs to Bviate or its licensors and may not be copied or reused without permission.</li>
              <li><strong className="text-white">Client deliverables:</strong> upon full payment, the client owns the final deliverables created specifically for them under an Engagement Agreement, unless that agreement says otherwise.</li>
              <li><strong className="text-white">Our tools and know-how:</strong> we retain ownership of our pre-existing materials, frameworks, templates, and reusable components, and grant the client a licence to use them as incorporated in the deliverables.</li>
              <li><strong className="text-white">Portfolio use:</strong> unless the client instructs otherwise in writing, we may reference the client&apos;s name, logo, and a general description of the work in our portfolio and marketing.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">7. Third-Party Platforms and Tools</h2>
            <p>The Services may involve third-party platforms (such as Meta, Google, hosting providers, n8n, and AI/API providers). Their terms and pricing apply to your use of those platforms. We are not responsible for changes, outages, policy decisions, or account actions taken by third-party platforms.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">8. Confidentiality</h2>
            <p>Each party will keep the other&apos;s non-public business information confidential and use it only for the engagement, except where disclosure is required by law.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="mb-3">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Bviate is not liable for indirect, incidental, special, or consequential losses, or loss of profits, revenue, data, or goodwill;</li>
              <li>Our total aggregate liability arising out of or relating to an engagement is limited to the fees actually paid by the client to Bviate for the Services giving rise to the claim in the three (3) months preceding the event;</li>
              <li>Nothing in these Terms limits liability that cannot be limited under applicable law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p>Either party may end an engagement as set out in the Engagement Agreement. On termination, the client pays for work completed and non-cancellable third-party costs incurred up to the termination date.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">11. Acceptable Use of the Website</h2>
            <p>You agree not to misuse the Website — including attempting to breach its security, scraping content, submitting unlawful or misleading enquiries, or abusing the chat assistant.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">12. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. The &quot;Effective date&quot; above reflects the latest version. Continued use of the Website after changes means you accept the updated Terms.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">13. Governing Law and Jurisdiction</h2>
            <p>These Terms are governed by the laws of India. Courts at Bengaluru, Karnataka shall have exclusive jurisdiction over any dispute arising out of these Terms or the use of the Website.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">14. Contact</h2>
            <p className="mb-1"><strong className="text-white">Bviate Ventures Private Limited (BVIATE Solutions)</strong></p>
            <p className="mb-1">Bengaluru, Karnataka, India</p>
            <p className="mb-1">CIN: U62011KA2026PTC222064</p>
            <p>Email: <a href="mailto:info@bviate.com" className="text-primary hover:underline">info@bviate.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
