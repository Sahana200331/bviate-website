# BVIATE VENTURES — DOC-5: Backend & Launch Guide

*Contact form API, Supabase, N8N automation, SEO, and going live on bviate.com*

Document 5 of 6 | Expected total time: 4–5 days

---

## Section 1 — Contact Form API Route

### 1.1 Create the API Endpoint

Create `src/app/api/contact/route.js`:

> **Next.js 15/16 API route notes:**
> - File must be named `route.js` (not `api.js` or `handler.js`)
> - Functions must be named exactly `POST`, `GET` etc. in capitals
> - If you get "Dynamic server usage" error, add at top: `export const dynamic = "force-dynamic"`

```js
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, service, message } = body

    // 1. Save to Supabase
    const { error } = await supabase
      .from("leads")
      .insert([{ name, email, whatsapp, service_interested: service, message }])

    if (error) throw error

    // 2. Fire N8N webhook
    await fetch(process.env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, whatsapp, service, message })
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json({ success: false, error: "Submission failed" }, { status: 500 })
  }
}
```

### 1.2 Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### 1.3 Test the Full Form Flow

1. `npm run dev`
2. Go to localhost:3000/contact
3. Fill all fields with test data (use real email)
4. Submit — should show success message
5. Open Supabase Dashboard → Table Editor → leads table — test submission should appear
6. Confirm WhatsApp notification received by Niranjan (N8N — Section 2)

---

## Section 2 — N8N Automation Setup

This section is owned by Niranjan. Sahana wires the API endpoint to N8N's webhook URL.

### 2.1 Workflow 1 — Internal Lead Alert

```
Trigger: Webhook receives POST from contact form API
  → Action 1: Send WhatsApp to Niranjan with Name, Email, WhatsApp, Service
  → Action 2: Add lead to Google Sheet (optional)
```

### 2.2 Workflow 2 — Lead Welcome Response

```
Trigger: Same webhook
  → Action 1: Send email to lead:
       Subject: "We received your enquiry — Bviate Ventures"
       Body: Hi [Name], we received your enquiry about [Service].
             Our team will contact you within 24 hours.
             Meanwhile, book a discovery call: [Calendly link]
```

### 2.3 Webhook URL Setup

- Niranjan creates the workflow in N8N → gets webhook URL
- Niranjan adds it to `.env.local` as `N8N_WEBHOOK_URL`
- Sahana adds same variable to Vercel: Settings → Environment Variables
- Test by submitting contact form — both workflows should trigger

---

## Section 3 — SEO Configuration

### 3.1 Metadata for Every Page

Add `export const metadata` at the top of every `page.js`:

```js
export const metadata = {
  title: "About Us | Bviate Ventures",
  description: "Learn about Bviate Ventures — our story, mission, and the team building your digital growth engine.",
  openGraph: {
    title: "About Us | Bviate Ventures",
    description: "...",
    url: "https://bviate.com/about",
    siteName: "Bviate Ventures",
    type: "website",
  },
}
```

### Page Titles Reference

| Page | Title |
|---|---|
| Home | Bviate Ventures — We Build, Scale, and Automate Ambitious Brands |
| About | About Us \| Bviate Ventures |
| Contact | Book a Discovery Call \| Bviate Ventures |
| Services | Digital Services \| Bviate Ventures |
| Automation | N8N Business Automation \| Bviate Ventures |
| Case Studies | Case Studies — Real Results \| Bviate Ventures |
| Blog | Digital Marketing Blog \| Bviate Ventures |
| Careers | Careers — Join Bviate Ventures |

### 3.2 Sitemap + Robots

`src/app/sitemap.js`:

```js
export default function sitemap() {
  return [
    { url: "https://bviate.com", lastModified: new Date() },
    { url: "https://bviate.com/about", lastModified: new Date() },
    { url: "https://bviate.com/contact", lastModified: new Date() },
    { url: "https://bviate.com/services", lastModified: new Date() },
    { url: "https://bviate.com/services/automation", lastModified: new Date() },
    { url: "https://bviate.com/case-studies", lastModified: new Date() },
    { url: "https://bviate.com/blog", lastModified: new Date() },
    { url: "https://bviate.com/careers", lastModified: new Date() },
  ]
}
```

`src/app/robots.js`:

```js
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://bviate.com/sitemap.xml",
  }
}
```

### 3.3 Google Analytics 4

```bash
npm install @next/third-parties
```

In `src/app/layout.js`:

```jsx
import { GoogleAnalytics } from "@next/third-parties/google"

// Inside <body>, after <Footer />:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

Replace `G-XXXXXXXXXX` with the real Measurement ID Niranjan provides.

---

## Section 4 — Pre-Launch QA Checklist

### Sahana — Technical

- [ ] All 16 pages load without console errors
- [ ] Zero 404s on internal navigation
- [ ] Contact form submits → lead in Supabase `leads` table
- [ ] WhatsApp notification received by Niranjan
- [ ] Welcome email sent to lead
- [ ] Calendly embed/button works
- [ ] All pages tested on mobile — no horizontal scroll
- [ ] Tested on desktop + tablet
- [ ] PageSpeed: pagespeed.web.dev — target 85+ desktop, 70+ mobile
- [ ] All images use Next.js `<Image>` — no plain `<img>`
- [ ] All internal links use `<Link>` — no plain `<a>` for internal pages
- [ ] sitemap.xml accessible at `vercel-url/sitemap.xml`
- [ ] robots.txt accessible at `vercel-url/robots.txt`
- [ ] GA4 tag firing — check realtime dashboard
- [ ] Vercel env vars set: SUPABASE_URL, SUPABASE_ANON_KEY, N8N_WEBHOOK_URL
- [ ] No custom CSS files — all Tailwind
- [ ] No hardcoded hex colors in JSX

### Niranjan — Content

- [ ] Zero typos on any page
- [ ] Real WhatsApp number on Contact page
- [ ] Real email address correct
- [ ] Real Calendly link working
- [ ] Team names + roles correct on About
- [ ] Case study metrics accurate
- [ ] Social links in footer correct
- [ ] Hero headline + CTAs correct

---

## Section 5 — Launch on bviate.com

### 5.1 Vercel Environment Variables

1. Vercel → project → Settings → Environment Variables
2. Add `NEXT_PUBLIC_SUPABASE_URL` (from Supabase)
3. Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` (from Supabase)
4. Add `N8N_WEBHOOK_URL` (from Niranjan)
5. Save — Vercel redeploys automatically

### 5.2 Connect bviate.com Domain

1. Vercel → Project → Settings → Domains
2. Type `bviate.com` → Add
3. Vercel shows DNS record to add (A or CNAME)
4. Hostinger → DNS / Nameservers
5. Add the A record with exact values from Vercel
6. Wait 24–48 hours for DNS propagation
7. Once live: `https://bviate.com` should load — padlock = SSL active

> SSL is automatic on Vercel. Padlock appears within minutes after DNS propagates.

### 5.3 Submit to Google Search Console

1. search.google.com/search-console
2. Add Property → URL prefix → `https://bviate.com`
3. Verify via HTML tag method — add tag to layout.js metadata
4. Sitemaps → enter `sitemap.xml` → Submit
5. URL Inspection → enter `https://bviate.com` → Request Indexing

### 5.4 Final Smoke Test

After DNS live:
1. Visit `https://bviate.com` — homepage loads
2. Click every nav link — no broken links
3. Submit contact form with real test details — Niranjan checks WhatsApp + Supabase
4. Book a Calendly call as a test — confirm booking email
5. Check GA4 realtime — confirm visit tracked
6. Test on a real mobile phone (not browser resize)

---

## Section 6 — Post-Launch

### Blog with Sanity CMS

- `npm install next-sanity`
- Create Sanity project at sanity.io
- Connect to Next.js blog page using GROQ queries
- Write first 3 articles targeting Niranjan's keyword list
- Setup time: 3–4 days

### React Native (Mobile App — Future)

- Build with React Native using Expo when client requests come in
- Existing React knowledge transfers directly
- Onboarding to React Native: 2–3 weeks

**Congratulations — bviate.com is live.**
