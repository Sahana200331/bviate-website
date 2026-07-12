// src/app/privacy-policy/PrivacyPolicyContent.js
"use client";

import { useFadeIn } from "../../hooks/useFadeIn";
import SectionTag from "../../components/ui/SectionTag";

export default function PrivacyPolicyContent() {
  useFadeIn();

  return (
    <div className="w-full">
      <section className="pt-32 pb-16 px-13 text-center fade-in">
        <div className="max-w-3xl mx-auto">
          <SectionTag>Legal</SectionTag>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-secondary text-sm">Effective date: 11 July 2026</p>
        </div>
      </section>

      <section className="pb-24 px-13 fade-in">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 text-secondary leading-relaxed">
          <p>
            This Privacy Policy explains how <strong className="text-white">Bviate Ventures Private Limited</strong>, operating as <strong className="text-white">BVIATE Solutions</strong> (&quot;Bviate&quot;, &quot;we&quot;, &quot;us&quot;), collects, uses, and protects information when you visit <strong className="text-white">bviatesolutions.com</strong> (the &quot;Website&quot;) or communicate with us. We are based in Bengaluru, Karnataka, India.
          </p>
          <p>By using the Website, you agree to the practices described in this policy.</p>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-3"><strong className="text-white">Information you give us directly:</strong></p>
            <ul className="list-disc pl-6 flex flex-col gap-2 mb-4">
              <li><strong className="text-white">Contact form:</strong> your name, email address, WhatsApp/phone number (optional), the service you are interested in, industry (if applicable), and the details of your project or enquiry.</li>
              <li><strong className="text-white">Chat assistant:</strong> messages you type into our website chat, and any contact details you choose to share there (name, email, phone, requirement).</li>
              <li><strong className="text-white">WhatsApp and email:</strong> anything you send us when you contact us via the WhatsApp link or at <a href="mailto:info@bviate.com" className="text-primary hover:underline">info@bviate.com</a>.</li>
            </ul>
            <p className="mb-3"><strong className="text-white">Information collected automatically:</strong></p>
            <ul className="list-disc pl-6 flex flex-col gap-2 mb-4">
              <li>Usage and device data such as pages visited, approximate location (city level), browser type, device type, and referral source, collected through cookies and analytics tools (see Section 5).</li>
            </ul>
            <p>We do not knowingly collect information from anyone under 18. Our services are intended for businesses and professionals.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 mb-4">
              <li>Respond to your enquiries and provide the services you request;</li>
              <li>Prepare proposals, schedule discovery calls, and manage client engagements;</li>
              <li>Send you follow-up communication about your enquiry;</li>
              <li>Improve our Website, services, and chat assistant;</li>
              <li>Understand how visitors use the Website (analytics);</li>
              <li>Comply with legal obligations under Indian law.</li>
            </ul>
            <p>We do <strong className="text-white">not</strong> sell your personal information to anyone.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">3. Legal Basis and Indian Law</h2>
            <p>We process personal data in accordance with applicable Indian law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP Act). Where required, we rely on your consent (for example, when you submit the contact form) or on legitimate uses connected with responding to your voluntary enquiry.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">4. Sharing of Information</h2>
            <p className="mb-3">We share information only with service providers who help us operate, and only to the extent necessary:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 mb-4">
              <li><strong className="text-white">Hosting and infrastructure</strong> (website hosting, deployment, and email providers);</li>
              <li><strong className="text-white">Automation and workflow tools</strong> (e.g. n8n) used to route enquiries and chat leads to our team;</li>
              <li><strong className="text-white">Analytics and advertising platforms</strong> (e.g. Google Analytics, Meta) as described in Section 5;</li>
              <li><strong className="text-white">Professional advisers or authorities</strong> where required by law.</li>
            </ul>
            <p>These providers process data on our behalf and are not permitted to use it for their own purposes.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">5. Cookies and Analytics</h2>
            <p className="mb-3">The Website may use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 mb-4">
              <li><strong className="text-white">Essential functionality</strong> (e.g. remembering your chat session);</li>
              <li><strong className="text-white">Analytics</strong> (e.g. Google Analytics) to measure traffic and improve the Website;</li>
              <li><strong className="text-white">Advertising measurement</strong> (e.g. Meta Pixel) to measure the effectiveness of our campaigns.</li>
            </ul>
            <p>You can control or delete cookies through your browser settings. Disabling cookies may affect some Website features.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">6. Chat Assistant</h2>
            <p>Our website chat assistant is powered by automated workflows and an AI language model. Conversations may be stored so our team can follow up on your enquiry and improve responses. Please do not share sensitive personal information (such as financial account details, government ID numbers, or health information) in the chat.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <p>We keep enquiry and lead information for as long as needed to respond to you and, if you become a client, for the duration of our engagement and any period required by law (for example, accounting and tax records). You may ask us to delete your enquiry data at any time (see Section 9).</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">8. Data Security</h2>
            <p>We use reasonable technical and organisational safeguards to protect your information, including access controls and reputable third-party infrastructure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">9. Your Rights</h2>
            <p className="mb-3">Subject to applicable law, you may:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 mb-4">
              <li>Request access to the personal data we hold about you;</li>
              <li>Request correction of inaccurate data;</li>
              <li>Request deletion of your data;</li>
              <li>Withdraw consent to processing based on consent.</li>
            </ul>
            <p>To exercise any of these rights, email us at <a href="mailto:info@bviate.com" className="text-primary hover:underline">info@bviate.com</a>. We will respond within a reasonable time and in accordance with applicable law.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">10. Third-Party Links</h2>
            <p>The Website contains links to third-party sites and platforms (such as LinkedIn, Instagram, and WhatsApp). Their privacy practices are governed by their own policies, which we encourage you to review.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The &quot;Effective date&quot; above reflects the latest version. Material changes will be posted on this page.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">12. Contact Us</h2>
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
