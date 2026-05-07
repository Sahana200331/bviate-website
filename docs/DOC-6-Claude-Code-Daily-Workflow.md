# BVIATE VENTURES — DOC-6: Claude Code & VS Code Daily Workflow

*How to use Claude Code + VS Code efficiently every day*

Document 6 of 6

---

## Tool Roles

| Tool | What it is | When |
|---|---|---|
| VS Code | Code editor | Every day — view files, edit, file tree |
| Claude Code (terminal) | AI that reads/writes code in the project | Building components, fixing errors, writing pages |
| Claude Chat (claude.ai) | AI for complex decisions, architecture, screenshots | When Claude Code can't fix it; debugging with screenshots |
| GitHub | Stores code online | After every build session — add/commit/push |
| Vercel | Hosts live website | Auto-deploys after every push |

> Claude Code replaces Cursor AI. Everything Cursor did (autocomplete, chat, rewrite) Claude Code does in the terminal. No separate AI editor needed.

---

## Section 1 — One-Time Setup

### 1.1 Install VS Code

[code.visualstudio.com](https://code.visualstudio.com) — download and install for Windows.

### 1.2 Install Claude Extension

- VS Code → Ctrl+Shift+X (Extensions)
- Search: `Claude`
- Install: **Claude for VS Code** by Anthropic
- Sign in with Claude Pro account

### 1.3 Install Claude Code (CLI)

```bash
npm install -g @anthropic-ai/claude-code

# Verify:
claude --version
```

### 1.4 Login

```bash
claude login
```

When prompted: select **Claude account with subscription** (Pro/Max/Team/Enterprise). Browser opens — sign in. Done once. After this, just type `claude` daily — no login.

---

## Section 2 — Starting Every Day

| Step | Action | How |
|---|---|---|
| 1 | Open VS Code | Double-click |
| 2 | Open project folder | File → Open Folder → `bviate-website` |
| 3 | Open terminal | `Ctrl + ` (backtick above Tab) |
| 4 | Confirm path | Should show: `C:\Users\Sahana G\bviate-website>` |
| 5 | Start Claude Code | Type: `claude` → Enter |
| 6 | Start dev server | `+` button in terminal panel → `npm run dev` |
| 7 | Open browser | `http://localhost:3000` |
| 8 | Message Niranjan | WhatsApp: "Starting today — building [section]" |
| 9 | Open HTML reference | Open the relevant `.html` from ZIP in Chrome |

> Always have TWO terminals: one running `claude`, one running `npm run dev`. Use the `+` button for the second.

---

## Section 3 — Using Claude Code Efficiently

### 3.1 The Basic Pattern

In the `claude` terminal, describe what you want:

```
> Build the About page matching the HTML reference design.
  Use brand colors: navy #0D1B2A, primary #2563EB.
  Page is at src/app/about/page.js
```

Claude Code will:
1. Read existing files for context
2. Write the component
3. Save it directly to the right file
4. Tell you what it did

### 3.2 Best Prompts for This Project

#### Build a new component
```
Read existing components in src/components/home/ and build a [Name]
component that matches our dark navy design. Save to
src/components/home/[Name].js. Use the same patterns as existing components.
```

#### Convert HTML reference to Next.js
```
Read src/components/home/Hero.js to understand our component style.
Now build a new ServicesGrid at src/components/home/ServicesGrid.js
matching this HTML: [paste HTML section]
```

#### Fix an error
```
I am getting this error when running npm run dev:
[paste exact error]
Read the relevant files and fix it.
```

#### Make something mobile responsive
```
Open src/components/home/Hero.js and make it fully mobile responsive
for screens below 768px. Stack columns vertically, reduce font sizes.
```

#### Build an entire page
```
Build the Contact page at src/app/contact/page.js. It needs:
form with Name/Email/WhatsApp/Service/Message fields, Calendly button
on the right, WhatsApp click button. Match style of existing pages.
Use our brand colors.
```

#### Audit for problems
```
Read all files in src/components/ and check for:
1. Missing "use client" on components using useState
2. Imports pointing to files that do not exist
3. Syntax errors
List all issues found.
```

#### Run git
```
Run git add, commit with message "Add: Hero component with animated cards", push to GitHub.
```

> Claude Code reads the entire project before responding. Always mention the file path. Example: "save to `src/components/home/Hero.js`"

---

## Section 4 — Debugging with Claude Code

### 4.1 New Method (replaces screenshots)

**OLD (do not use):** Screenshot error → send to Niranjan → he pastes in Claude → sends fix back → apply manually.

**NEW:** Paste error into Claude Code terminal → Claude Code reads files and fixes directly → done in 30 seconds.

### 4.2 Debugging Steps

1. See the error (terminal or browser console — F12)
2. Copy ALL the red error text
3. Switch to Claude Code terminal
4. Type: `Fix this error:` then paste full message
5. Claude Code reads files automatically
6. Claude Code edits and tells you what changed
7. Check localhost:3000 — dev server auto-reloads
8. If fixed → continue. If not → escalate.

### 4.3 When to Escalate

Claude Code fixes ~90% of errors. Escalate to Niranjan if:
- Same error after 2 fix attempts
- Involves environment variables, Supabase, or N8N webhooks
- Vercel build passes locally but fails on live site
- Error mentions something Claude Code says it cannot access
- Stuck for >30 minutes

> When escalating: paste the **exact** error text. Do not describe it.

### 4.4 Browser Console Errors

- F12 in browser → Console tab
- Copy red error text
- Paste in Claude Code: `Fix this browser console error: [paste]`

---

## Section 5 — Terminal Commands

### 5.1 Claude Code

| Command | Purpose |
|---|---|
| `claude` | Start session in project folder |
| `claude --version` | Verify install |
| `claude login` | One-time login |
| `Ctrl + C` | Stop session |
| `/help` | All commands inside Claude Code |
| `/clear` | Clear conversation, start fresh |

### 5.2 Development

| Command | Purpose |
|---|---|
| `npm run dev` | Start local dev server (localhost:3000) |
| `Ctrl + C` | Stop dev server |
| `npm run build` | Production build — check for errors before push |
| `npm run lint` | Code lint check |

### 5.3 Cache + Fix

| Command | Purpose |
|---|---|
| `Remove-Item -Recurse -Force .next` | Delete Next.js cache (Manifest errors, stuck changes) |
| `Remove-Item -Recurse -Force .next; npm run dev` | Clear + restart in one |
| `npm install` | Reinstall packages if `next is not recognized` |
| `taskkill /PID [n] /F` | Kill stuck process when port 3000 in use |

### 5.4 Git

| Command | Purpose |
|---|---|
| `git status` | See changed files |
| `git add .` | Stage everything |
| `git commit -m "message"` | Save with description |
| `git push` | Upload to GitHub → Vercel deploys |
| `git pull origin main` | Download latest if push rejected |
| `git log --oneline -5` | Last 5 commits |

### 5.5 File Checks

| Command | Purpose |
|---|---|
| `Get-ChildItem src\app\ -Name` | List app files |
| `Get-ChildItem src\components\ -Name -Recurse` | List all components |
| `Get-ChildItem -Name` | List project root |
| `type src\app\page.js` | Show file content |

---

## Section 6 — Daily Loop

```
Describe task to Claude Code  →  Claude Code writes file
        ↓
Ctrl+S  →  Check localhost:3000  →  Looks correct?
        ↓
git add . → git commit -m "what you built" → git push
        ↓
Wait 30s → Check Vercel URL → Send to Niranjan
```

### Ending the Day
- ALWAYS push code before closing — never leave uncommitted work
- Ctrl+C in claude terminal
- Ctrl+C in dev server terminal
- Send Niranjan: "Built [name] today — live at [URL]"
- Note anything Claude Code couldn't fix → first question tomorrow

---

## Section 7 — Common Errors → Fix

| Error | Cause | Claude Code Prompt |
|---|---|---|
| Manifest file is empty | Corrupted `.next` cache | "Stop dev server. Delete .next folder. Restart npm run dev." |
| Port 3000 in use | Another dev server running | "Run taskkill /PID [n] /F then restart npm run dev" |
| `next is not recognized` | node_modules missing | "Run npm install then npm run dev" |
| Changes not showing | Unsaved file | "Check unsaved changes. Save all then Ctrl+Shift+R" |
| 404 on a page route | Missing page.js | "Check src/app/[route]/page.js exists. Create if missing." |
| `needs useState — use client missing` | Missing directive | "Add `use client` as first line of [file]" |
| Cannot find module | Wrong import path | "Fix import in [file] — use @/ prefix for src/" |
| Vercel 404 after build | Corrupted Vercel cache | Tell Niranjan — delete project + reconnect |
| `git push rejected` | GitHub has newer changes | "Run git pull origin main then git push" |
| Merge editor opens | Merge conflict | "Run git commit --no-edit then git push" |

---

## Section 8 — Daily Quick Card

### START OF DAY
- Open VS Code → bviate-website
- Ctrl+\` → type `claude` (terminal 1)
- `+` → `npm run dev` (terminal 2)
- localhost:3000
- HTML reference in Chrome
- WhatsApp Niranjan what you're building

### END OF DAY
```bash
git add .
git commit -m "what you built today"
git push
```
Wait 30s → check Vercel URL → send to Niranjan → Ctrl+C both terminals.

### WHEN STUCK
- Paste error into Claude Code terminal
- Claude Code reads + fixes
- Still broken after 2 tries → tell Niranjan with exact error
- Ctrl+C → delete `.next` → `npm run dev`
- Never spend 30+ min stuck alone

### KEY PROMPTS
- `Build [component] at [file path]`
- `Fix this error: [paste]`
- `Make [component] mobile responsive`
- `Read [file] and check for issues`
- `Run git add, commit "[msg]", push`
- `Check all imports in src/components/`

**Claude Code does the coding. Git pushes it. Vercel shows it live.**
