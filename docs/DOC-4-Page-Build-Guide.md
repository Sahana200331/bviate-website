# BVIATE VENTURES — DOC-4: Page-by-Page Build Guide

*Step-by-step instructions for building every page — use HTML reference files alongside this document*

Document 4 of 6 | Expected total time: 6–8 days

---

## How to Use This Document

For each page: open the corresponding HTML reference file in Chrome, then follow steps here to build the same page in Next.js + Tailwind.

### MANDATORY for every single page

Every `page.js` file must have a `metadata` export at the very top, before the component function. Without this, every page shows the same default title.

```jsx
export const metadata = {
  title: 'Page Name | Bviate Ventures',
  description: 'A clear 1-2 sentence description for Google search results.',
  openGraph: {
    title: 'Page Name | Bviate Ventures',
    description: 'Same description as above.',
    url: 'https://bviate.com/page-route',
    siteName: 'Bviate Ventures',
    type: 'website',
  },
}
```

This must be present on all 16 pages. Sahana adds placeholder text first, Niranjan updates with real content before launch. Full metadata reference is in DOC-5 Section 3.

### Build Order

| Page / Group | Reference File | Time |
|---|---|---|
| Home | `index.html` | 2 days |
| Contact | `contact.html` | 4–6 hours |
| Services Overview | `services/index.html` | 4 hours |
| N8N Automation | `services/automation.html` | 1 day |
| Case Studies | `case-studies.html` | 4 hours |
| About | `about.html` | 4 hours |
| Careers | `careers.html` | 3 hours |
| 5 Service Pages | `services/*.html` | 1–2 hrs each |
| Blog | `blog.html` | 2 hours |
| Legal (Privacy/Terms/Sitemap) | `*.html` | 1 hour total |

---

## Page 1 — Home Page (`src/app/page.js`)

### Reference: `index.html`

Eight sections — build each as a separate component file in `src/components/home/`, then import all into `src/app/page.js`.

> Most complex page. Budget 2 full days. First impression for every visitor.

### Section 1.1 — Hero (`src/components/home/Hero.js`) — 4–5 hours

- Layout: CSS Grid, two equal columns — left content, right animated panel
- Left column: badge, h1 headline, subtext, two buttons, trust row
- Headline: "We Build, Scale, and Automate Ambitious Brands." — Build/Scale/Automate get gradient color
- Gradient text — preferred:
  ```jsx
  className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent"
  ```
  Fallback inline style:
  ```jsx
  style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
  ```
- "Automate" word: `bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent`
- Right column: central card with rocket emoji, 4 floating metric cards
- Floating cards animate via CSS keyframes in `globals.css`
- Central card has pulsing glow + rotating dashed ring
- Trust row: 3 avatar circles + "Trusted by growing brands — from India and beyond"

### Animations to add to `globals.css`

```css
@keyframes float1 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
@keyframes float2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
@keyframes float3 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
@keyframes float4 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
@keyframes centerPulse { 0%,100% { box-shadow: 0 0 40px rgba(37,99,235,0.05); } 50% { box-shadow: 0 0 80px rgba(37,99,235,0.15); } }
@keyframes slideInLeft { from { opacity:0; transform:translateX(-32px); } to { opacity:1; transform:translateX(0); } }
@keyframes slideInRight { from { opacity:0; transform:translateX(32px); } to { opacity:1; transform:translateX(0); } }

.animate-float1 { animation: float1 5s ease-in-out infinite; }
.animate-float2 { animation: float2 6s ease-in-out infinite; }
.animate-float3 { animation: float3 5.5s ease-in-out infinite; }
.animate-float4 { animation: float4 4.5s ease-in-out infinite; }
```

### Section 1.2 — StatsBar (`src/components/home/StatsBar.js`) — 2 hours

- 4 metrics in a row with dividers
- Metrics: 50+ Campaigns, 3x ROAS, 40% Lower CPL, 44 Specialist Skills
- Numbers count-up on scroll (IntersectionObserver)
- Background: `bg-card` with top + bottom borders

#### Count-up pattern

```jsx
"use client"
import { useEffect, useRef } from "react"

function CountUp({ end, suffix = "" }) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0
        const step = end / 50
        const timer = setInterval(() => {
          current += step
          if (current >= end) { current = end; clearInterval(timer) }
          if (ref.current) ref.current.textContent = Math.floor(current) + suffix
        }, 30)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
  }, [end, suffix])
  return <span ref={ref}>0{suffix}</span>
}
```

### Section 1.3 — ServicesGrid (`src/components/home/ServicesGrid.js`) — 2 hours

- 6 cards in 3-column grid (2-col tablet, 1-col mobile)
- Each card: icon, title, description, Learn More link
- Hover: border glow + lift + bottom blue line
- Each card links to its service page with `<Link>`
- Copy text directly from HTML reference

### Section 1.4 — HowWeWork (`src/components/home/HowWeWork.js`) — 1.5 hours

- 4 numbered steps in a row, connected by a thin horizontal line
- Steps: 01 Discovery Call, 02 Strategy Blueprint, 03 Execution, 04 Results and Scale
- Hover number circle: fills with gradient + glows

### Section 1.5 — Industries (`src/components/home/Industries.js`) — 1 hour

- 10 industry cards in 5-column grid
- Each card: emoji icon + industry name
- Hover: border glow + slight lift
- Scroll fade-in via IntersectionObserver

### Section 1.6 — Testimonials (`src/components/home/Testimonials.js`) — 1 hour

- 2 testimonial cards in 2-column grid
- Each card: star rating, quote, avatar initials, name, role
- Quote text from HTML reference

### Wire the Home page

```jsx
import Hero from "@/components/home/Hero"
import StatsBar from "@/components/home/StatsBar"
import ServicesGrid from "@/components/home/ServicesGrid"
import HowWeWork from "@/components/home/HowWeWork"
import Industries from "@/components/home/Industries"
import Testimonials from "@/components/home/Testimonials"
import CTABanner from "@/components/CTABanner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <HowWeWork />
      <Industries />
      <Testimonials />
      <CTABanner />
    </>
  )
}
```

---

## Page 2 — Contact (`src/app/contact/page.js`)

### Reference: `contact.html` — 4–6 hours

- Two-column layout: left = contact form, right = Calendly booking + contact info
- Metadata: `title: 'Book a Discovery Call | Bviate Ventures'`
- Form fields: Name, Email, WhatsApp, Service dropdown, Message textarea
- Form is a controlled component — each field has `useState`
- On submit: `fetch("/api/contact")` with form data — NOT a page redirect
- Show success / error message based on response
- Calendly embed: simple link button to Niranjan's real Calendly URL
- WhatsApp button: `wa.me/91XXXXXXXXXX` with real number

### Form skeleton

```jsx
"use client"
import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", whatsapp:"", service:"", message:"" })
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", { method:"POST", body: JSON.stringify(form) })
      if (res.ok) setStatus("success")
      else setStatus("error")
    } catch { setStatus("error") }
  }

  return ( /* form JSX */ )
}
```

The `/api/contact` endpoint is built in DOC-5. Until then, log to console on submit.

---

## Page 3 — Services Overview (`src/app/services/page.js`)

### Reference: `services/index.html` — 3–4 hours

- Page hero with headline + subtitle
- 6 service cards in 3-col grid (reuse ServicesGrid component from home)
- Each card links to its service page
- Bottom: "Not sure which service?" box with CTA

---

## Page 4 — N8N Automation (`src/app/services/automation/page.js`)

### Reference: `services/automation.html` — 1 full day

> Biggest differentiator page. Should feel like a SaaS product page — more polished than other service pages. Budget extra time.

- Page hero: "Your business should grow while you sleep"
- Section: What is Business Automation — plain language for non-tech clients
- Section: 5 use cases with icons in a card grid
- Section: Before vs After comparison table
- Section: Pricing tiers OR Book a Demo CTA
- Final CTA: Book a Free Automation Demo

### Before vs After Table

| WITHOUT AUTOMATION | WITH N8N AUTOMATION |
|---|---|
| ✗ Manually check form submissions | ✓ Lead arrives — you get WhatsApp instantly |
| ✗ Copy lead details to spreadsheet by hand | ✓ Lead saved to Supabase database automatically |
| ✗ Send welcome email yourself | ✓ Welcome email sent to lead within seconds |
| ✗ Forget to follow up — lose the client | ✓ Follow-up sequence runs for 7 days |
| ✗ Build monthly report manually | ✓ Monthly report auto-generated and emailed |

---

## Pages 5–7 — Case Studies, About, Careers (3–4 hours each)

References: `case-studies.html`, `about.html`, `careers.html`

For each page:
- Open the HTML reference and build the same sections in the same order
- Copy all text directly from the HTML — do not retype or paraphrase
- About: update team names + roles with real info from Niranjan
- Careers: update open roles cards with current actual openings
- Case Studies: replace placeholder metrics with real numbers once confirmed
- Each page ends with `<CTABanner />`

---

## Pages 8–12 — Individual Service Pages (1–2 hours each)

References: `services/web-development.html`, `services/seo.html`, `services/performance-marketing.html`, `services/social-media.html`, `services/funnels-copywriting.html`

Same structure across all 5. Build one, duplicate, change content.

- Section 1: Page hero — emoji, title, tagline, two CTA buttons
- Section 2: Two-column — What is Included (left) + Results You Can Expect (right)
- Section 3: CTABanner with service-specific headline
- Copy all bullet points from HTML reference

---

## Pages 13–16 — Blog + Legal (1–2 hours total)

References: `blog.html`, `privacy-policy.html`, `terms.html`, `sitemap.html`

- Blog: 3 placeholder article cards + "Coming Soon" + LinkedIn follow button
- Privacy Policy: legal text from HTML in simple card layout
- Terms: same structure as Privacy
- Sitemap: links to all pages in clean 3-column card layout

---

## Scroll Fade-In Pattern (use everywhere)

### `globals.css` addition

```css
.fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
```

### Hook: `src/hooks/useFadeIn.js`

```jsx
"use client"
import { useEffect } from "react"

export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
```

### Usage

```jsx
"use client"
import { useFadeIn } from "@/hooks/useFadeIn"

export default function SomeComponent() {
  useFadeIn()
  return <div className="fade-in">Animates in on scroll</div>
}
```

---

## End-of-DOC-4 Checklist

- [ ] All 16 pages exist + load without errors
- [ ] Home page matches HTML reference visually (desktop + mobile)
- [ ] Navigation between pages feels instant
- [ ] Contact form fields capture input via `useState`
- [ ] No console errors
- [ ] Pushed to GitHub — Vercel deploys successfully
- [ ] Niranjan reviewed live link and approved

Once approved → open DOC-5 for backend integration and launch.
