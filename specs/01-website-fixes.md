# bviatesolutions.com — Fix Specification

Stack: Next.js. Dark theme. All changes below were verified on the live site on 11 Jul 2026.
Rule: implement exactly what's listed; don't refactor unrelated code.

---

## Item 1 — Add "Other" option to Service of Interest dropdown

**Where:** Contact form (`/contact`), "Service of Interest *" select.

**Change:**
- Add a final option: `Other`.
- When `Other` is selected, reveal a text input directly below the dropdown:
  - Label: `What do you need?*`
  - Placeholder: `e.g. consultation, training, something else…`
  - Validation: required when visible, min 10 characters, max 100 characters.
- Submitted payload: when Other is selected, send `service: "Other"` and `serviceOther: "<user text>"` (include it in the notification email/webhook body).

**Acceptance:** selecting any normal service hides the extra field and doesn't require it; selecting Other shows it, blocks submit until ≥10 chars.

---

## Item 2 — Replace hello@bviate.com with info@bviate.com everywhere

**Where (found on live site):**
- `/contact` — "Direct Contact" block (both the visible text and the `mailto:` href).
- Contact form error message ("…or reach us directly at hello@bviate.com").
- Any other occurrence — do a project-wide search for `hello@bviate.com` and replace all.

**Acceptance:** `grep -r "hello@bviate"` in the repo returns zero results.

---

## Item 3 — Contact form backend failure (HIGHEST PRIORITY)

**Symptom:** submitting the form with all fields validly filled returns the generic
"Something went wrong" error card. This means the submission endpoint (API route /
email service / webhook) is failing — not a validation problem.

**Tasks:**
1. Reproduce locally, check the API route logs / email-provider response, and fix the root cause. Report to Niranjan what the cause was.
2. Only surface "Something went wrong" for genuine server failures, with the message:
   `We couldn't send your message. Please try again, WhatsApp us, or email info@bviate.com.`

**Acceptance:** a valid test submission arrives at the configured destination (email/webhook) and the success state renders.

---

## Item 4 — Client-side validation + disabled submit

**Where:** Contact form.

**Change:**
- Inline validation on blur and on submit attempt:
  - Full Name: required.
  - Email: required + valid email format.
  - Service of Interest: required (a real selection, not the placeholder).
  - Tell us about your project: required, min 20 characters.
  - WhatsApp/Phone: optional; if filled, digits/spaces/`+` only, 8–15 digits.
- Error style: red border on the field + short message below it (e.g. `Full name is required`, `Enter a valid email address`, `Message must be at least 20 characters`).
- Submit button: disabled (greyed, `cursor-not-allowed`) until all required fields are valid. Small helper text under the button while disabled: `Fill the required fields to send`.

**Acceptance:** button cannot be clicked with empty/invalid required fields; each invalid field shows its own message; no generic error appears for validation problems.

---

## Item 5 — "Try Again" shows a blank card

**Symptom:** after a failed submit, clicking **Try Again** renders an empty card — the form never comes back.

**Change:** "Try Again" must reset the UI state back to the form view, preserving the values the user already typed.

**Acceptance:** fail a submission → Try Again → the filled form is visible and can be resubmitted.

---

## Item 6 — WhatsApp prefill message says wrong domain

**Where:** All `wa.me` links (footer "WhatsApp" link + floating WhatsApp button).

**Current:** `Hi, I found you on bviate.com and wanted to know more.`
**Change to:** `Hi, I found you on bviatesolutions.com and wanted to know more.`

**Acceptance:** project-wide search for `bviate.com and wanted` returns zero results; wa.me links URL-encode the new text.

---

## Item 7 — "Book a Free Discovery Call" button is a dead link on /contact

**Where:** The CTA band ("Ready to Grow? / Let's Build Your Digital Growth Engine") that appears on `/contact` (and other pages).

**Change:**
1. Add a **Calendly inline embed** section on `/contact`, directly below the contact form:
   - Section heading: `Or book a call directly` (styled consistently with the page).
   - Use Calendly's inline embed (`https://assets.calendly.com/assets/external/widget.js` + a `calendly-inline-widget` div, or the `react-calendly` package — Sahana's choice).
   - Event URL comes from Niranjan (his "Free 30-Min Discovery Call" Calendly link) — put it in an env var `NEXT_PUBLIC_CALENDLY_URL`. **Blocker: do not merge this item until Niranjan provides the link.**
   - Load the Calendly script lazily (only on /contact, after page load) so it doesn't hurt performance on other pages.
   - Give the section `id="book-call"`.
2. Give the contact form section `id="contact-form"`.
3. "Book a Free Discovery Call" buttons: on `/contact`, smooth-scroll to `#book-call`; on all other pages, link to `/contact#book-call`.

**Acceptance:** the Calendly calendar renders inline on /contact below the form on desktop and mobile; the CTA button lands on it; other pages don't load the Calendly script.

---

## Item 7a — Privacy Policy page

Replace the "Coming soon" placeholder at `/privacy-policy` with the content in
`02-privacy-policy.md`. Render as a proper styled page: page title, section
headings, readable line length, consistent with site dark theme. Add
`<title>Privacy Policy | Bviate Solutions</title>` and meta description.

## Item 7b — Terms of Service page

Same treatment at `/terms`, using `03-terms-of-service.md`.
`<title>Terms of Service | Bviate Solutions</title>`.

---

## Item 8 — Wrong Open Graph / canonical metadata

**Symptom:** every page's `og:url` outputs `https://bviate.com` (e.g. homepage
og:url = https://bviate.com, /contact og:url = https://bviate.com/contact).

**Change:**
- Set the site base URL / `metadataBase` to `https://bviatesolutions.com` in the Next.js metadata config.
- Verify canonical URLs, og:url, and sitemap (if present) all use bviatesolutions.com.

**Acceptance:** view-source on `/` and `/contact` shows og:url with bviatesolutions.com.

---

## Item 9 — Footer additions

**Change footer to include:**
- Email line: `info@bviate.com` (mailto link) under the tagline or in a "Contact" column.
- Location line: `Bengaluru, India`.
- Legal line under the copyright: `Bviate Ventures Private Limited · CIN: [[CIN — get from Niranjan]]` (leave placeholder visible in code review, do not deploy until Niranjan confirms).
- Verify the LinkedIn (`/company/bviate`) and Instagram (`@bviate`) links point to live profiles — if a profile doesn't exist yet, remove that link rather than shipping a 404.
- Do NOT add any phone number.

---

## Item 10 — Industry tiles: prefill + "Other industry" tile

**Where:** "Industries We Serve" grid on homepage; tiles currently link to `/contact?industry=<slug>`.

**Change:**
1. On `/contact`, read the `industry` query param and show it in the form — e.g. a small pill above the form: `Industry: Real Estate ✓` — and include `industry` in the submitted payload.
2. Add an 11th tile: `🔧 Other — Discuss My Challenge` → `/contact?industry=other`. When `industry=other`, preselect "Other" in the Service of Interest dropdown (per Item 1) if no service is chosen.

**Acceptance:** arriving via a tile shows the industry on the form and it appears in the notification email; the new tile renders last in the grid.

---

## Item 11 — Stat counters sanity check

**Where:** Homepage hero stats (Campaigns / Avg ROAS / Lower CPL / Specialist Skills).

**Check:** counters render as `0+ / 0x / 0%` when JS animation doesn't fire (observed in a plain HTML fetch). Ensure final values render even without the scroll animation (SSR fallback or no-JS fallback), and confirm real numbers on mobile.
