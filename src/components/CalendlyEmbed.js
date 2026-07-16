// src/components/CalendlyEmbed.js
"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const containerRef = useRef(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!calendlyUrl) {
      console.warn(
        "CalendlyEmbed: NEXT_PUBLIC_CALENDLY_URL is not set - rendering a fallback link instead."
      );
      return;
    }
    // If the widget script already loaded earlier in this session (e.g. the
    // user navigated to /contact, away, then back via client-side routing),
    // next/script won't fire onLoad a second time - initialize directly.
    if (window.Calendly) setScriptReady(true);
  }, [calendlyUrl]);

  useEffect(() => {
    if (!calendlyUrl || !scriptReady || !containerRef.current || !window.Calendly) return;

    // The script's automatic class-based scan only runs once at load time,
    // so it misses this div whenever it's (re)mounted after that. Initialize
    // explicitly via the documented API instead of relying on the auto-scan.
    containerRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: calendlyUrl,
      parentElement: containerRef.current,
    });
  }, [calendlyUrl, scriptReady]);

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
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
      />
      <div className="bg-card border border-white/10 rounded-3xl p-3 sm:p-4 overflow-hidden">
        <div
          ref={containerRef}
          className="w-full"
          style={{ minWidth: "280px", height: "630px" }}
        />
      </div>
    </>
  );
}
