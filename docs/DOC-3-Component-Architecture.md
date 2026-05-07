# BVIATE VENTURES — DOC-3: Component Architecture Guide

*How to build reusable components — Navbar, Footer, Button, Layout*

Document 3 of 6 | Expected time: 6–8 hours (one full day)

---

## Section 1 — Navbar Component

### Reference: `index.html` — top navigation bar

### Behavior

- Fixed at top while scrolling
- Bviate Ventures logo on left
- Navigation links centered: Home, Services, Industries, About, Blog, Contact
- Book a Call button on right
- Adds shadow when scrolled past 20px
- Collapses to hamburger menu on mobile
- Highlights current page link (white) — others are gray

### Build Steps

1. Create `src/components/Navbar.js`
2. Add `"use client"` at top (required for useState + usePathname)
3. Import `Link` from `next/link` and `usePathname` from `next/navigation`
4. Import `useState` for hamburger toggle
5. Build navbar with Tailwind classes (see reference table below)
6. Add scroll shadow: `useEffect` + `window.addEventListener("scroll", ...)`
7. Add active link detection using `usePathname()`
8. Add mobile hamburger toggle
9. Import Navbar in `src/app/layout.js` — place above `{children}`
10. Test at localhost:3000 — desktop + mobile

### Tailwind Classes Reference

| Element | Classes |
|---|---|
| Navbar wrapper | `fixed top-0 left-0 right-0 z-50 h-16 px-13 flex items-center justify-between bg-navy/90 backdrop-blur-xl border-b border-primary/15` |
| Logo text | `font-display text-lg font-black tracking-tight text-white no-underline` |
| Logo gradient | `bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent` |
| Nav links container | `absolute left-1/2 -translate-x-1/2 flex gap-9 list-none` |
| Nav link (default) | `text-sm font-medium text-secondary hover:text-white transition-colors` |
| Nav link (active) | `text-sm font-medium text-white` |
| Book a Call button | `bg-gradient-to-r from-primary to-purple text-white px-5 py-2 rounded-lg font-semibold text-sm` |
| Mobile hamburger | `flex flex-col gap-1 cursor-pointer md:hidden` |

### CRITICAL RULE

Every internal nav link MUST use `<Link href="/about">` — never `<a href="/about">`. With `<a>` the browser does a full page reload. With `<Link>` navigation is instant.

---

## Section 2 — Footer Component

### Reference: `index.html` — bottom of page

### Build Steps

1. Create `src/components/Footer.js`
2. Build a 4-column grid using Tailwind grid
3. All internal links use `<Link>`
4. Social icons (LinkedIn, Instagram, WhatsApp) use `<a target="_blank">` (external links)
5. Copyright line at bottom: "2025 Bviate Ventures"
6. Import Footer in `layout.js` — place below `{children}`
7. Test every footer link

---

## Section 3 — Reusable UI Components

### 3.1 Button Component

`src/components/ui/Button.js`:

```jsx
import Link from "next/link"

export default function Button({ children, href, variant = "primary", className = "" }) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
  const variants = {
    primary: "bg-gradient-to-r from-primary to-purple text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-primary/45",
    secondary: "bg-white/5 text-white border border-white/10 hover:border-primary/40 hover:bg-primary/7 hover:-translate-y-0.5"
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
```

Usage:
```jsx
<Button href="/contact">Book a Free Discovery Call →</Button>
<Button href="#services" variant="secondary">Explore Services</Button>
```

### 3.2 SectionTag Component

`src/components/ui/SectionTag.js`:

```jsx
export default function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
      {children}
    </span>
  )
}
```

### 3.3 CTABanner Component

`src/components/CTABanner.js`:

```jsx
import Button from "./ui/Button"
import SectionTag from "./ui/SectionTag"

export default function CTABanner({
  tag = "Ready to Grow?",
  title = "Let's Build Your Digital Growth Engine",
  subtitle = "Book a free 30-minute discovery call. No fluff, no sales pitch. Just a clear, actionable plan.",
  primaryText = "Book a Free Discovery Call →",
  secondaryText = "Explore Services",
  secondaryHref = "/services"
}) {
  return (
    <section className="py-24 px-13">
      <div className="max-w-5xl mx-auto bg-card border border-primary/15 rounded-3xl p-20 text-center relative overflow-hidden">
        <SectionTag>{tag}</SectionTag>
        <h2 className="font-display text-4xl font-black tracking-tight text-white mb-3">{title}</h2>
        <p className="text-secondary font-light text-base leading-relaxed max-w-xl mx-auto mb-10">{subtitle}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button href="/contact">{primaryText}</Button>
          <Button href={secondaryHref} variant="secondary">{secondaryText}</Button>
        </div>
      </div>
    </section>
  )
}
```

---

## Section 4 — Wire Everything into Layout

Update `src/app/layout.js`:

```jsx
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// ...font setup as in DOC-2...

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-navy text-white font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

After this, every page automatically has Navbar + Footer.

### Tailwind v4 note

Custom color classes work the same in v4 (`bg-navy`, `text-primary`, `border-primary/15`). Opacity modifier syntax is identical (`bg-navy/90`). If a color class fails, fallback to hex: `bg-[#0D1B2A]`.

---

## Section 5 — Verification Before DOC-4

- [ ] localhost:3000 loads without console errors
- [ ] Navbar visible at top — all links render
- [ ] Clicking links navigates without full page reload
- [ ] Footer appears at bottom of every page
- [ ] Hamburger menu appears on narrow viewport
- [ ] All brand colors defined in `globals.css` (Tailwind v4)
- [ ] `layout.js` imports Syne + DM Sans fonts
- [ ] Pushed to GitHub — Vercel deploys successfully

Send Niranjan the Vercel URL before opening DOC-4.
