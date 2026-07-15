// src/components/ChatWidget.js
"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function ChatWidget() {
  useEffect(() => {
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_URL;

    if (!webhookUrl) {
      console.warn(
        "ChatWidget: NEXT_PUBLIC_N8N_CHAT_URL is not set - chat widget will not render."
      );
      return;
    }

    // @n8n/chat is a client-only (Vue-based) bundle - importing it at module
    // scope crashes Next.js's server-side prerender pass. Dynamic import
    // inside useEffect guarantees it only ever loads in the browser.
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl,
        initialMessages: [
          "Hi! 👋 I'm Bviate's assistant.",
          "Ask me about automation, web development, or marketing.",
        ],
        i18n: {
          en: {
            title: "Bviate Solutions",
            subtitle: "We usually reply instantly.",
            inputPlaceholder: "Type your question…",
            getStarted: "New Conversation",
            footer: "",
            closeButtonTooltip: "Close",
          },
        },
      });
    });
  }, []);

  return null;
}
