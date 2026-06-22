"use client";

import { useState } from "react";
import SectionTag from "../ui/SectionTag";

const faqs = [
  {
    question: "What services does Bviate offer?",
    answer: "Bviate offers three core services: Web & App Development, Performance Marketing (SEO, Meta/Google Ads, Social Media Management), and Business Automation using tools like n8n."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. While we're based in Bengaluru, we serve clients globally. Most of our work is delivered remotely with regular check-ins via video call or preferred messaging tools."
  },
  {
    question: "How long does onboarding take?",
    answer: "Onboarding typically takes 3–5 business days — we gather your brand assets, access credentials, and goals before kicking off work in Week 1."
  },
  {
    question: "What is your minimum engagement size?",
    answer: "Our engagement size is scoped based on the complexity of the work, the tools involved, and the outcomes you're targeting. Reach out and we'll give you an honest assessment of fit and effort."
  },
  {
    question: "Can I choose individual services or only full packages?",
    answer: "You can engage us for a single service (e.g., only SEO, or only automation) or as a full-stack growth partner. We're flexible."
  },
  {
    question: "How do you report results and how often?",
    answer: "Clients get a detailed monthly report covering campaign performance, deliverables completed, and next month's plan. Ad campaigns also get weekly snapshots."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <SectionTag>Common Questions</SectionTag>
          <h2 className="font-display font-black text-4xl text-white text-center mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-secondary text-center">No fluff. Just honest answers.</p>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl mb-3 bg-card">
              <button
                className="flex justify-between items-center w-full p-5 cursor-pointer text-left"
                onClick={() => toggle(index)}
              >
                <span className="font-semibold text-white text-base">{faq.question}</span>
                <span
                  className="text-primary ml-4 flex-shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === index ? '400px' : '0' }}
              >
                <p className="text-secondary text-sm leading-relaxed px-5 pb-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
