// src/components/CalendlyEmbed.js
"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    if (!calendlyUrl) {
      console.warn(
        "CalendlyEmbed: NEXT_PUBLIC_CALENDLY_URL is not set - rendering a fallback link instead."
      );
    }
  }, [calendlyUrl]);

  if (!calendlyUrl) {
    return (
      <div className="bg-card border border-white/10 rounded-3xl p-8 text-center">
        <p className="text-secondary mb-6">
          Online booking isn&apos;t available right now — reach out directly and we&apos;ll set up a time.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Contact Us →
        </a>
      </div>
    );
  }

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div className="bg-card border border-white/10 rounded-3xl p-3 sm:p-4 overflow-hidden">
        <div
          className="calendly-inline-widget w-full"
          data-url={calendlyUrl}
          style={{ minWidth: "280px", height: "630px" }}
        />
      </div>
    </>
  );
}
