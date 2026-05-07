# BVIATE VENTURES — DOC-2: Environment Setup Guide

*All installs, configurations, and accounts — complete before writing any code*

Document 2 of 6 | Expected total time: 1 full day (6–8 hours)

> **Editor note:** Cursor is the original recommended editor. The only other tool at the same level is Claude Code (claude.ai/code). For this project Sahana is using **VS Code + Claude Code extension** — see DOC-6 for daily workflow.

---

## Section 1 — Software Installs

### 1.1 VS Code (replaces Cursor in current workflow)

Download from [code.visualstudio.com](https://code.visualstudio.com).

Install these extensions:
- ES7+ React/Redux/React-Native snippets — `dsznajder.es7-react-js-snippets`
- Tailwind CSS IntelliSense — `bradlc.vscode-tailwindcss`
- Prettier — Code Formatter — `esbenp.prettier-vscode`
- GitLens — `eamodio.gitlens`
- Auto Rename Tag — `formulahendry.auto-rename-tag`
- **Claude for VS Code** — by Anthropic

### 1.2 Node.js

- Go to [nodejs.org](https://nodejs.org)
- Download LTS version
- Verify: `node --version` should print v20.x.x or higher
- Verify: `npm --version` should print 10.x.x or higher

### 1.3 Git

- Download from [git-scm.com](https://git-scm.com)
- During install: select "Use VS Code as default editor"
- Verify: `git --version`
- Configure: `git config --global user.name "Sahana"`
- Configure: `git config --global user.email "your@email.com"`

---

## Section 2 — Account Setup

### 2.1 GitHub

1. Create account at github.com (professional email)
2. Verify email
3. Send Niranjan your GitHub username
4. Accept the repository invitation
5. Clone: `git clone [repo-url]`

### 2.2 Vercel

1. Sign up at vercel.com using "Continue with GitHub"
2. Click "Add New Project"
3. Import the bviate-website repository
4. Click Deploy — leave settings default (Vercel detects Next.js)
5. Copy the `.vercel.app` URL — send to Niranjan

> Every `git push` from now on triggers an automatic Vercel redeploy. Live in ~30 seconds.

### 2.3 Supabase

1. Sign up at supabase.com with GitHub
2. Click New Project
3. Name: `bviate-website`
4. Set database password — save it safely
5. Region: Southeast Asia (Singapore)
6. Wait ~2 minutes for project creation
7. Settings → API → copy Project URL + anon key

#### Create the `leads` table (Table Editor)

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key — auto-generated |
| name | text | Lead name from form |
| email | text | Lead email |
| whatsapp | text | Lead WhatsApp number |
| service_interested | text | Which service they selected |
| message | text | Their message |
| created_at | timestamptz | Default: now() |

---

## Section 3 — Next.js Project Initialization

### 3.1 Create the Project

In terminal:

```bash
npx create-next-app@latest bviate-website
```

Prompt answers:
- TypeScript? **No**
- ESLint? **Yes**
- Tailwind CSS? **Yes**
- src/ directory? **Yes**
- App Router? **Yes**
- Customize import alias? **No**

```bash
cd bviate-website
npm run dev
```

Open http://localhost:3000 — should show default Next.js welcome page.

### CRITICAL CHECK — Next.js 15/16 Bug

After creation, check for a duplicate `app/` folder at root:

```powershell
Get-ChildItem -Name
```

If you see BOTH a root `app/` AND `src/`, delete the root one immediately:

```powershell
Remove-Item -Recurse -Force app\
```

Skipping this step makes all your code edits appear to do nothing — Next.js reads from root `app/` instead of `src/app/`.

### 3.2 Configure Tailwind v4 with Brand Colors

> **Next.js 15/16 uses Tailwind v4** which works completely differently from v3. There is **NO `tailwind.config.js` file**. All configuration goes inside `globals.css` using `@theme` syntax.

Replace the entire content of `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme inline {
  --color-navy:      #0D1B2A;
  --color-card:      #1E2D3D;
  --color-card2:     #243548;
  --color-primary:   #2563EB;
  --color-purple:    #7C3AED;
  --color-cyan:      #06B6D4;
  --color-muted:     #64748B;
  --color-secondary: #94A3B8;

  --font-display: var(--font-syne), sans-serif;
  --font-body:    var(--font-dm-sans), sans-serif;
}

body {
  background: #0D1B2A;
  color: #ffffff;
  font-family: var(--font-body);
}
```

After this you can write `bg-navy` instead of `bg-[#0D1B2A]`.

### 3.3 Setup Global Fonts in `layout.js`

Replace `src/app/layout.js`:

```jsx
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata = {
  title: "Bviate Ventures — We Build, Scale, and Automate Ambitious Brands",
  description: "Full-service digital growth company — web development, performance marketing, SEO, and business automation.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-navy text-white font-body">
        {children}
      </body>
    </html>
  )
}
```

### 3.4 Environment Variables (`.env.local` at project root)

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
N8N_WEBHOOK_URL=your-n8n-webhook-url
```

> Never commit `.env.local` to GitHub. Add it to `.gitignore`.

### 3.5 Folder Structure

```
src/
├── app/
│   ├── page.js              (Home)
│   ├── layout.js
│   ├── globals.css
│   ├── about/page.js
│   ├── contact/page.js
│   ├── blog/page.js
│   ├── careers/page.js
│   ├── case-studies/page.js
│   ├── privacy-policy/page.js
│   ├── terms/page.js
│   ├── sitemap-page/page.js
│   ├── services/
│   │   ├── page.js
│   │   ├── web-development/page.js
│   │   ├── performance-marketing/page.js
│   │   ├── automation/page.js
│   │   ├── seo/page.js
│   │   ├── social-media/page.js
│   │   └── funnels-copywriting/page.js
│   └── api/
│       └── contact/route.js
└── components/
    ├── Navbar.js
    ├── Footer.js
    ├── CTABanner.js
    ├── ui/
    │   ├── Button.js
    │   └── SectionTag.js
    └── home/
        ├── Hero.js
        ├── StatsBar.js
        ├── ServicesGrid.js
        ├── HowWeWork.js
        ├── Industries.js
        └── Testimonials.js
```

### 3.6 External Image Whitelist (only if needed)

For external image URLs, edit `next.config.mjs`:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'example.com' },
    ],
  },
}
export default nextConfig
```

For this project, all images live in `public/` so this is not needed at launch.

### 3.7 Push to GitHub + Verify Vercel

```bash
git add .
git commit -m "Setup: project structure and config"
git push
```

Watch the Vercel deployment in dashboard — should take ~30 seconds. Send the live URL to Niranjan.
