# n8n Chatbot — Website Integration Spec

**Goal:** embed Bviate's own n8n-powered chat assistant on bviatesolutions.com as the site's floating chat bubble. This bot doubles as a live demo of the automation service Bviate sells.

**Division of work:**
- **Niranjan** builds the n8n workflow (Chat Trigger → AI Agent → lead capture) in the n8n cloud account and provides the Chat URL.
- **Sahana** embeds the widget in the Next.js site per this spec.

---

## ⛔ Blocker — inputs required from Niranjan before starting

| # | Input | Where it comes from |
|---|-------|--------------------|
| 1 | **Chat URL (webhook URL)** | n8n → the workflow's **Chat Trigger** node → with "Make Chat Publicly Available" ON and Mode = **Embedded Chat**, n8n shows the public Chat URL. Workflow must be **Activated** (toggle on), otherwise the widget gets 404. |
| 2 | Confirmation the workflow responds | Niranjan tests in n8n's built-in chat panel first. |
| 3 | Welcome message text (or use the default below) | Niranjan. |

Do not embed until #1 and #2 are done — an embedded widget pointing at an inactive workflow shows errors to visitors.

## 1. Install the widget

Preferred (npm, cleaner for Next.js):

```bash
npm install @n8n/chat
```

Create a client component (e.g. `components/ChatWidget.tsx`):

```tsx
'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl: process.env.NEXT_PUBLIC_N8N_CHAT_URL!,
      initialMessages: [
        "Hi! 👋 I'm Bviate's assistant.",
        'Ask me about automation, web development, or marketing.',
      ],
      i18n: {
        en: {
          title: 'Bviate Solutions',
          subtitle: 'We usually reply instantly.',
          inputPlaceholder: 'Type your question…',
          getStarted: 'New Conversation',
          footer: '',
          closeButtonTooltip: 'Close',
        },
      },
    });
  }, []);

  return null;
}
```

Add `<ChatWidget />` to the root layout, and put the Chat URL in `.env`:

```
NEXT_PUBLIC_N8N_CHAT_URL=<paste Chat URL from Niranjan>
```

(CDN fallback if npm route is problematic: load `https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js` + its CSS in a script tag — but prefer the npm route.)

## 2. Theme to match the site

The widget is styled with CSS variables. Add to global CSS and tune to the site's palette (dark navy background, blue→purple gradient accents):

```css
:root {
  --chat--color-primary: #6d5ef2;        /* match site purple */
  --chat--color-secondary: #2f6bff;      /* match site blue */
  --chat--toggle--background: linear-gradient(135deg, #2f6bff, #8a4bff);
  --chat--header--background: #0b1220;   /* site dark navy */
  --chat--message--bot--background: #141d33;
  --chat--message--bot--color: #e7ecf6;
  --chat--message--user--background: #6d5ef2;
  --chat--message--user--color: #ffffff;
  --chat--window--width: 380px;
  --chat--window--height: 600px;
}
```

Exact hex values: pick from the site's existing Tailwind theme tokens rather than the samples above.

## 3. Floating-button conflict (required)

The site currently has a **floating WhatsApp button** bottom-right. Decision (from Niranjan): **the n8n chat bubble becomes the only floating button.**
- Remove the floating WhatsApp button.
- Keep the WhatsApp link in the footer "Follow Us" column (with the corrected prefill text per `01-website-fixes.md` Item 6).

## 4. Acceptance criteria

- Chat bubble appears bottom-right on all pages, desktop and mobile.
- Sending "What services do you offer?" returns a sensible answer within a few seconds.
- No floating WhatsApp button remains; footer WhatsApp link still works.
- Widget colors match the site theme (no default n8n branding colors).
- Lighthouse/perf: widget loads without blocking initial page render (it's client-side after hydration — verify no layout shift).
- If the webhook is unreachable, the widget fails quietly (no console error storm, no broken UI for the rest of the page).

## 5. Out of scope (for now)

- Calendly embedding (now handled in `01-website-fixes.md` Item 7 — not part of the chatbot work).
- Storing chat transcripts in the site's own database (lead capture happens inside the n8n workflow → Google Sheets/email).
- Proactive auto-open of the chat window (keep it closed until clicked).
