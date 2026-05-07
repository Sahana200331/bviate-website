# BVIATE VENTURES — Master Index & Reference Guide

*Document 1 of 6 | Start Here*

## What This Document Is

The starting point. Read this fully before opening any other document. It tells you what every document contains, what order to read them in, the complete tech stack, and every account or tool you need before writing code.

## Document Index

| # | Document | Purpose |
|---|---|---|
| 1 | DOC-1 Master Index (this file) | Overview of everything. Read first. |
| 2 | DOC-2 Environment Setup | All installs, configs, accounts. Do once before building. |
| 3 | DOC-3 Component Architecture | How to structure files, components, and folders. |
| 4 | DOC-4 Page Build Guide | Step-by-step instructions per page. Main working document. |
| 5 | DOC-5 Backend & Launch | Forms, Supabase, N8N, SEO, Vercel, going live. |
| 6 | DOC-6 Claude Code Daily Workflow | How to use Claude Code + VS Code every day. |

## Phase Timing

| Phase | Use Document | Expected Time |
|---|---|---|
| Before coding begins | DOC-2 | 1 day — installs + accounts |
| Building reusable components | DOC-3 + DOC-4 | 1 day — Navbar, Footer, Button, Layout |
| Building each page | DOC-4 | 1–2 days per page group |
| Connecting forms and automation | DOC-5 | 3–4 days — backend + N8N |
| Going live | DOC-5 | Half day — DNS + final checks |

## Confirmed Tech Stack — DO NOT CHANGE

| Layer | Technology | Why |
|---|---|---|
| Design Tool | Figma | Mockup approval before coding |
| Frontend | Next.js + Tailwind CSS | SEO-optimised, fast, React-based |
| Frontend Hosting | Vercel | Built for Next.js, auto-deploy from GitHub |
| Backend | Next.js API Routes | Built-in — handles contact form, webhook triggers |
| Database | Supabase (PostgreSQL) | Stores leads, auth-ready |
| Automation | N8N | Connects form submissions to WhatsApp + email |
| Booking | Calendly | Discovery call scheduling embed |
| Analytics | Google Analytics 4 | Visitor + conversion tracking |
| Domain | bviate.com | Owned on Hostinger |
| Version Control | GitHub | All code stored + version controlled |
| CMS (Post-launch) | Sanity.io | Headless CMS for blog |

## Brand Constants — NEVER CHANGE

| Element | Value | Usage |
|---|---|---|
| Background | #0D1B2A | Page background, hero, dark sections |
| Card Background | #1E2D3D | Cards, nav, footer |
| Card Hover | #243548 | Card hover state |
| Primary Blue | #2563EB | Buttons, links, accents |
| Purple | #7C3AED | Gradient end |
| Cyan Accent | #06B6D4 | "Automate" word highlight |
| Text Primary | #FFFFFF | Main headings + body text |
| Text Secondary | #94A3B8 | Subheadings, descriptions, labels |
| Text Muted | #64748B | Captions, small labels |
| Border | rgba(37,99,235,0.15) | Card borders, dividers |
| Border Glow | rgba(37,99,235,0.5) | Card borders on hover |
| Display Font | Syne | All headings, brand, stats, card titles |
| Body Font | DM Sans | Body text, descriptions, form inputs |

## Website Pages Map — All 16 Pages

| Page | URL Route | Priority |
|---|---|---|
| Home | / | Build First — Most Critical |
| Contact + Booking | /contact | Build Second — Revenue starts here |
| Services Overview | /services | Build Third |
| N8N Automation | /services/automation | Build Fourth — Key Differentiator |
| Case Studies | /case-studies | Build Fifth |
| About | /about | Build Sixth |
| Careers | /careers | Build Seventh |
| Web Development | /services/web-development | After core pages |
| Performance Marketing | /services/performance-marketing | After core pages |
| SEO | /services/seo | After core pages |
| Social Media | /services/social-media | After core pages |
| Funnels & Copywriting | /services/funnels-copywriting | After core pages |
| Blog | /blog | After launch |
| Privacy Policy | /privacy-policy | Before launch |
| Terms of Service | /terms | Before launch |
| Sitemap | /sitemap | Before launch |

## Non-Negotiable Code Rules

- Always use `<Link>` from `next/link` for internal navigation — never plain `<a>` tags
- Always use `<Image>` from `next/image` for all images — never plain `<img>` tags
- Never write custom CSS — everything must be Tailwind utility classes
- Never put page content directly in `app/page.js` — always break into components
- Never hardcode colors — always use Tailwind config custom color names (bg-navy, text-primary, etc.)
- Always use `className` not `class` in JSX
- Every component file gets its own file in `src/components/`

## Reference HTML Files

The HTML files in `bviate-website-complete.zip` are the visual design brief. Each Next.js page must match the corresponding HTML file's design exactly, but rebuilt with React + Tailwind.

- Open each HTML file in Chrome before building the corresponding Next.js page
- Match colors, spacing, typography, layout
- Extract copy (text content) directly — do not retype
- Do NOT copy CSS from HTML — translate to Tailwind classes
- The `shared.css` file shows color values + spacing — reference only
