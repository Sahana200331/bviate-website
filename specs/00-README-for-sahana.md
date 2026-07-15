# Bviate Solutions — Website Fix Pack (for Sahana / Claude Code)

**Project:** bviatesolutions.com (Next.js)
**Date:** 11 July 2026
**Prepared for:** Sahana (Claude Code in VS Code)

## What's in this pack

| File | Purpose |
|------|---------|
| `01-website-fixes.md` | Full spec of all bugs + changes with acceptance criteria. This is the main task file. |
| `02-privacy-policy.md` | Ready page content for `/privacy-policy` (currently "Coming soon"). |
| `03-terms-of-service.md` | Ready page content for `/terms` (currently "Coming soon"). |
| `04-n8n-chatbot-integration.md` | Spec for embedding the n8n chat widget. Needs the Chat URL from Niranjan before starting (see file). |

## How to use with Claude Code

1. Copy all four files into the repo root (e.g. a `/specs` folder) or drop them into the project's Claude context.
2. Open Claude Code in VS Code inside the project and run a prompt like:

```
Read specs/01-website-fixes.md and implement every item in it, one commit
per numbered item. Follow the acceptance criteria exactly. For items 7a
and 7b, create the pages using the content in specs/02-privacy-policy.md
and specs/03-terms-of-service.md — convert the markdown into styled page
components consistent with the rest of the site (dark theme, same
typography). Do not change anything not listed in the spec. After each
item, tell me what files you changed so I can review before the next one.
```

3. For the chatbot, run a second session after Niranjan sends the Chat URL:

```
Read specs/04-n8n-chatbot-integration.md and implement it.
```

## Placeholders to fill before deploying legal pages

Search both legal files for `[[` — there are a few placeholders (CIN,
registered address) that Niranjan must confirm. Everything else is final.

## Priority order

1. Item 3 (form backend failure) — the contact form is silently broken; this loses leads today.
2. Items 1, 2, 4, 5, 6, 8 — quick fixes, same PR is fine.
3. Items 7a/7b (legal pages).
4. Item 7 (Calendly inline embed + CTA scroll) — ⛔ needs the Calendly event link from Niranjan.
5. Chatbot embed (`04-n8n-chatbot-integration.md`) — ⛔ needs the n8n Chat URL from Niranjan.

## Inputs Niranjan owes (nothing else is blocked on him)

| Input | Blocks |
|-------|--------|
| Calendly event link (his "Free 30-Min Discovery Call" URL) | Item 7 |
| n8n Chat URL (from the Chat Trigger node, workflow activated) | Chatbot embed |
| CIN number | Footer legal line (Item 9) |
