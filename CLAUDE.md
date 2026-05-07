# Bviate Ventures — Website Project Context for Claude Code

> **Read this file FIRST every session.** It tells you what this project is, what tech to use, what rules to follow, and where to find detailed instructions.

---

## What This Project Is

A premium full-stack agency website for **Bviate Ventures** — a digital marketing agency offering web development, performance marketing, SEO, social media, automation (N8N), and funnels/copywriting.

- **Live domain (target):** bviate.com (currently on Vercel preview URL)
- **Total pages:** 16 (see Site Map below)
- **Owner:** Niranjan (founder, content + design approval)
- **Builder:** Sahana (Next.js development with Claude Code assistance)

---

## Confirmed Tech Stack — DO NOT CHANGE

| Layer | Technology |
|---|---|
| Frontend Framework | **Next.js 16** (App Router, JavaScript not TypeScript) |
| Styling | **Tailwind CSS v4** (uses `@theme` in globals.css — NO `tailwind.config.js`) |
| Database | Supabase (PostgreSQL) |
| Automation | N8N (webhook → WhatsApp + email) |
| Hosting | Vercel (auto-deploy from GitHub) |
| Booking | Calendly (embed) |
| Analytics | Google Analytics 4 |
| Domain registrar | Hostinger (DNS only) |
| Version Control | GitHub |
| Future CMS | Sanity.io (post-launch blog) |

### CRITICAL: Tailwind v4 Notes

This project is on **Tailwind v4** (Next.js 16 default), which is fundamentally different from v3:

- **There is NO `tailwind.config.js` file.** Do not create one.
- All theme config lives inside `src/app/globals.css` using `@theme inline { ... }`
- Custom colors are defined as CSS variables: `--color-navy: #0D1B2A` → use as `bg-navy`, `text-navy`, etc.
- Opacity modifiers work the same as v3: `bg-navy/90`
- Fallback for any color class that doesn't render: use bracket syntax → `bg-[#0D1B2A]`

---

## Brand Constants — NEVER CHANGE

| Token | Hex | Usage |
|---|---|---|
| navy | `#0D1B2A` | Page background, hero, dark sections |
| card | `#1E2D3D` | Cards, nav, footer background |
| card2 | `#243548` | Card hover state |
| primary | `#2563EB` | Buttons, links, accents |
| purple | `#7C3AED` | Gradient end |
| cyan | `#06B6D4` | "Automate" word highlight |
| secondary | `#94A3B8` | Subheadings, descriptions |
| muted | `#64748B` | Captions, small labels |
| Border | `rgba(37,99,235,0.15)` | Card borders |
| Border Glow | `rgba(37,99,235,0.5)` | Card hover borders |

### Fonts
- **Display (headings):** Syne — `font-display`
- **Body (everything else):** DM Sans — `font-body`
- Both loaded via `next/font/google` in `src/app/layout.js`

### Signature Gradient
```
bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent
```
Used on the words "Build", "Scale", "Bviate". For "Automate" use `from-primary to-cyan`.

---

## Non-Negotiable Code Rules

1. **Internal navigation:** Always `<Link>` from `next/link` — never plain `<a>`
2. **Images:** Always `<Image>` from `next/image` — never plain `<img>`
3. **Styling:** Tailwind utility classes only — NO custom CSS files (only globals.css for theme + animations)
4. **Components:** One component per file in `src/components/`
5. **Page files:** Never put content directly in `app/page.js` — break into components and import
6. **Colors:** Never hardcode hex in JSX — use Tailwind tokens (`bg-navy`, not `bg-[#0D1B2A]`)
7. **JSX:** `className` not `class`
8. **Client components:** Add `"use client"` as the FIRST line if the file uses `useState`, `useEffect`, `usePathname`, `useRef`, or any browser API
9. **Metadata:** Every `page.js` must `export const metadata = { ... }` at the top — see DOC-4 / DOC-5 for full template
10. **External links:** Use `<a target="_blank" rel="noopener noreferrer">` — these are external, not internal

---

## Site Map — All 16 Pages

| Page | Route | Status File |
|---|---|---|
| Home | `/` | `src/app/page.js` |
| Contact | `/contact` | `src/app/contact/page.js` |
| Services Overview | `/services` | `src/app/services/page.js` |
| N8N Automation | `/services/automation` | `src/app/services/automation/page.js` |
| Web Development | `/services/web-development` | `src/app/services/web-development/page.js` |
| Performance Marketing | `/services/performance-marketing` | `src/app/services/performance-marketing/page.js` |
| SEO | `/services/seo` | `src/app/services/seo/page.js` |
| Social Media | `/services/social-media` | `src/app/services/social-media/page.js` |
| Funnels & Copywriting | `/services/funnels-copywriting` | `src/app/services/funnels-copywriting/page.js` |
| Case Studies | `/case-studies` | `src/app/case-studies/page.js` |
| About | `/about` | `src/app/about/page.js` |
| Careers | `/careers` | `src/app/careers/page.js` |
| Blog | `/blog` | `src/app/blog/page.js` |
| Privacy Policy | `/privacy-policy` | `src/app/privacy-policy/page.js` |
| Terms | `/terms` | `src/app/terms/page.js` |
| Sitemap | `/sitemap-page` | `src/app/sitemap-page/page.js` |

---

## Folder Structure (target)

```
src/
├── app/
│   ├── page.js                     # Home
│   ├── layout.js                   # Root layout (Navbar + Footer)
│   ├── globals.css                 # Tailwind v4 @theme + animations
│   ├── about/page.js
│   ├── contact/page.js
│   ├── blog/page.js
│   ├── careers/page.js
│   ├── case-studies/page.js
│   ├── privacy-policy/page.js
│   ├── terms/page.js
│   ├── sitemap-page/page.js
│   ├── sitemap.js                  # SEO sitemap
│   ├── robots.js                   # robots.txt
│   ├── services/
│   │   ├── page.js
│   │   ├── automation/page.js
│   │   ├── web-development/page.js
│   │   ├── performance-marketing/page.js
│   │   ├── seo/page.js
│   │   ├── social-media/page.js
│   │   └── funnels-copywriting/page.js
│   └── api/
│       └── contact/route.js        # POST endpoint → Supabase + N8N
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── CTABanner.js
│   ├── ui/
│   │   ├── Button.js
│   │   └── SectionTag.js
│   └── home/
│       ├── Hero.js
│       ├── StatsBar.js
│       ├── ServicesGrid.js
│       ├── HowWeWork.js
│       ├── Industries.js
│       └── Testimonials.js
└── hooks/
    └── useFadeIn.js                # Scroll fade-in IntersectionObserver
```

---

## Design Source of Truth

The reference HTML files (in `bviate-website-complete.zip`) are the visual brief. Every Next.js page must match its corresponding HTML reference:
- Open the `.html` in Chrome before building the corresponding page
- Match colors, spacing, typography, layout
- **Extract copy directly from the HTML — do NOT retype or paraphrase**
- Do NOT copy CSS — translate to Tailwind classes
- `shared.css` shows color values + spacing — reference only

---

## Project Documentation — `/docs` Folder

Full step-by-step instructions live in `/docs/`. Read the relevant doc before starting any work:

| Doc | When to Read |
|---|---|
| `docs/DOC-1-Master-Index.md` | Overview, tech stack, brand constants, rules |
| `docs/DOC-2-Environment-Setup.md` | One-time setup (Node, Git, Supabase, Vercel) |
| `docs/DOC-3-Component-Architecture.md` | Building Navbar, Footer, Button, CTABanner, layout |
| `docs/DOC-4-Page-Build-Guide.md` | Page-by-page build instructions (most-used doc) |
| `docs/DOC-5-Backend-Launch.md` | Contact API, Supabase, N8N, SEO, Vercel launch |
| `docs/DOC-6-Claude-Code-Daily-Workflow.md` | Daily commands + debugging workflow |

---

## Currently Built Components (verified in screenshot 2026-05-07)

- ✅ Navbar
- ✅ Footer
- ✅ Home page (with Hero, Stats, ServicesGrid, etc.)
- ✅ Contact page (with `LeadContactForm.js` component)
- ✅ Services overview + Automation page (with `AutomationContent.js`)
- ⚠️ About page exists but **no content** — needs build per DOC-4
- ⚠️ Case Studies page exists but **no content** — needs build per DOC-4
- ⚠️ Careers page exists but **no content** — needs build per DOC-4
- ⏳ Web Development, Performance Marketing, SEO, Social Media, Funnels — pending
- ⏳ Blog, Privacy, Terms, Sitemap — pending
- ⏳ Backend API route + Supabase + N8N integration — pending (DOC-5)

---

## Default Workflow for Any New Task

1. Read this file (`CLAUDE.md`) for context
2. Read the relevant DOC in `/docs/` for step-by-step guidance
3. Read existing similar component (e.g. `src/components/home/Hero.js`) for style consistency
4. Build the file at the exact path specified in the docs
5. Verify on `localhost:3000`
6. Run `npm run build` to check for production errors
7. Git: `git add . && git commit -m "feat: ..." && git push`
8. Wait 30s — confirm Vercel deploy succeeded

---

## Common Pitfalls — Already-Known Issues

- **Duplicate `app/` folder at root after `create-next-app`:** Delete with `Remove-Item -Recurse -Force app\` — code edits will silently do nothing if root `app/` exists alongside `src/app/`
- **Missing `"use client"`:** Any component with `useState` / `useEffect` / `usePathname` / event handlers needs `"use client"` as the first line
- **Custom colors not working:** Confirm they're defined in `globals.css` `@theme inline` block (NOT in a `tailwind.config.js`)
- **Manifest is empty:** Stop dev server → `Remove-Item -Recurse -Force .next` → `npm run dev`
- **Port 3000 in use:** `taskkill /PID [n] /F` — find PID with `netstat -ano | findstr :3000`
- **API route errors with "Dynamic server usage":** Add `export const dynamic = "force-dynamic"` at top of `route.js`

---

## Communication

- **Daily standup:** WhatsApp to Niranjan — what's being built, any blockers
- **Live URL:** Send Vercel preview URL after every push
- **Stuck > 30 min:** Escalate to Niranjan with the exact error text
- **Design questions:** Always check the corresponding HTML reference first before guessing
