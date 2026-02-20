# CLAUDE.md — Strutura

This file provides Claude Code with context about the Strutura project, conventions, and rules to follow during development.

---

## 🏢 Project Overview

**Strutura** is an AI automation agency based in Portugal that helps businesses scale operations without increasing headcount. The website at `strutura.ai` is the primary marketing and lead generation tool for the business.

The site exists to:

- Communicate Strutura's value proposition clearly to Portuguese SMBs
- Generate leads through a free business audit offer
- Build credibility and trust in a market still unfamiliar with AI automation
- Convert visitors into booked audit sessions via Cal.com

The core message is: **"Automação personalizada para empresas portuguesas. Auditoria gratuita, sem compromisso."**

---

## 👤 Owner

- **Name:** Leonardo
- **Email:** leonardo@strutura.ai
- **Website:** strutura.ai

---

## 🎨 Brand & Design

### Colors

| Name              | Hex       |
| ----------------- | --------- |
| Background (dark) | `#1A1A1A` |
| Accent (yellow)   | `#E9D73A` |
| White             | `#FFFFFF` |
| Light background  | `#f9f9f9` |
| Text (dark)       | `#1a1a1a` |
| Text (muted)      | `#444444` |

### Typography & Style

- Dark backgrounds with yellow accents are the primary visual identity
- Clean, minimal design — avoid visual clutter
- Professional but approachable tone
- All user-facing copy should be in **Portuguese (Portugal)**

---

## 🛠️ Tech Stack

| Layer           | Technology           |
| --------------- | -------------------- |
| Framework       | Next.js (App Router) |
| Language        | TypeScript           |
| Styling         | Tailwind CSS         |
| Components      | shadcn/ui            |
| Icons           | Lucide React         |
| Version Control | Git + GitHub         |

### Conventions

- Use TypeScript strictly — avoid `any` types
- Use Tailwind utility classes for styling — avoid inline styles
- Use shadcn/ui components where possible before building custom ones
- Use Lucide React for all icons
- Component files use PascalCase (e.g. `HeroSection.tsx`)
- Utility/helper files use camelCase (e.g. `formatDate.ts`)
- Keep components small and focused — split when a file exceeds ~150 lines

---

## 🚫 Rules — Read Carefully

### Git

> ⛔ **Never touch Git without explicit permission.**
>
> Do not run `git add`, `git commit`, `git push`, `git pull`, `git merge`, `git rebase`, `git reset`, or any other Git command unless Leonardo explicitly asks for it in that message. This applies even if a task feels "complete" or "ready to commit."

### Files

- Never delete files without confirming with Leonardo first
- Never rename files or move them between directories without asking

### Communication

- If something is unclear or could be done in multiple ways, ask before implementing
- When a task is done, briefly summarize what was changed and why
- Flag any decisions that could have side effects elsewhere in the codebase

---

## 📁 Key Pages & Structure

| Route             | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `/`               | Homepage — hero, services, how it works, CTA |
| `/privacidade`    | Privacy Policy (WhatsApp Business)           |
| `/termos`         | Terms of Service (WhatsApp Business)         |
| `/eliminar-dados` | User Data Deletion instructions              |

---

## 🔗 Integrations & External Services

- **Cal.com** — appointment booking for free business audits
- **WhatsApp Business** — primary communication channel with leads
- **n8n** — backend workflow automation

---

_Last updated: February 2026_
