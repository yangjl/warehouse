# Stable Template And Agent Memory

Do not casually rewrite this file when starting a new business plan from the template.

This file is the stable memory contract for the repository. It defines the shared workflow and structure that human collaborators and AI assistants rely on across copied projects.

## What This Template Does

This template keeps business-plan memory in plain Markdown files inside the repository so humans, GitHub Copilot, Claude Code, and Codex can all work from the same source of truth.

The goal is simple:

- humans stay in control of strategy, assumptions, interpretation, and external-facing claims
- assistants help with drafting, organization, validation, data cleanup, documentation, and presentation production
- project context stays portable instead of being trapped inside one AI tool

## Core Tracking Files

Review these files regularly.

| File | Purpose | Typical update time |
|------|---------|---------------------|
| `doc/PROJECT_STATUS.md` | What is done, what is active, what is next | After a phase changes |
| `doc/DECISIONS.md` | Important choices and why they were made | When direction, assumptions, or positioning changes |
| `doc/BUSINESS_ASSUMPTIONS.md` | Core assumptions, evidence, confidence, and review status | When assumptions are added or changed |
| `doc/MARKET_RESEARCH.md` | Market definition, evidence, sizing notes, and open gaps | When market evidence is gathered or interpreted |
| `doc/CUSTOMER_DISCOVERY.md` | Customer interviews, surveys, and validation notes | After discovery work |
| `doc/COMPETITIVE_LANDSCAPE.md` | Competitors, substitutes, differentiation, and risks | When positioning changes |
| `doc/FINANCIAL_MODEL_NOTES.md` | Revenue, cost, margin, growth, and funding assumptions | When model assumptions change |
| `doc/PITCH_DECK_PLAN.md` | Deck outline, narrative, evidence needs, and review status | When presentation structure changes |
| `doc/DAILY_LOG.md` | One human-readable record per commit | After each commit |
| `doc/WORKLOG.md` | Session notes and handoff context | End of a work session |
| `doc/ENVIRONMENT.md` | Local setup and reporting workflow notes | When environment details change |
| `doc/NEW_PROJECT_CHECKLIST.md` | Startup checklist for a copied business-plan project | When a new project starts |
| `AGENTS.md` | Shared assistant rules and coding expectations | Only when template behavior changes |

## Directory Layout

| Directory | Purpose |
|-----------|---------|
| `inputs/` | Source notes, interviews, surveys, market exports, and other business-plan inputs |
| `models/` | Financial models, scenario tables, and assumption worksheets |
| `presentations/` | Source HTML-PPT presentation decks, with parallel `investor/` and `internal/` tracks |
| `web/` | Deploy-ready, mobile-friendly static site served by Vercel (`investor/` and `internal/` rendered decks) |
| `reports/` | Rendered decks, exported reports, and shareable deliverables |
| `assets/` | Logos, product images, screenshots, charts, and presentation assets |
| `cache/` | Rebuildable intermediate files |
| `doc/` | Status, decisions, assumptions, environment notes, and logs |
| `scripts/` | Small utilities for validation, logging, and repeatable workflows |

## Planning Workflow

### 1. Decide before you automate

Before substantial new work, review `doc/PROJECT_STATUS.md`, `doc/DECISIONS.md`, and `doc/BUSINESS_ASSUMPTIONS.md`.

If the work changes business direction, customer interpretation, market sizing, positioning, pricing, financial assumptions, or investor-facing claims, a human should decide before an assistant proceeds.

### 2. Keep assumptions traceable

- Put major assumptions in `doc/BUSINESS_ASSUMPTIONS.md`.
- Link assumptions to evidence where possible.
- Label confidence and review status.
- Record direction-changing decisions in `doc/DECISIONS.md`.
- Keep source notes in `inputs/` and generated outputs in `reports/`.

### 3. Keep financial and market claims reviewable

- Treat financial outputs as planning estimates, not guarantees.
- Make market-size logic and source quality visible.
- Separate raw evidence from interpretation.
- Pause before publishing legal, regulatory, tax, medical, or financial claims.

### 4. Report with HTML-PPT

Presentation reporting uses the HTML-PPT skill:

```bash
npx skills add https://github.com/lewislulu/html-ppt-skill
```

Use `presentations/` for source decks. Render each deck twice:

- into `web/<track>/index.html` for the mobile-friendly, Vercel-hosted site (see `web/README.md` for the layout contract: viewport meta, `.deck`/`.slide`/`.slide__notes`/`.deck__nav` classes, responsive units, 44 px touch targets).
- into `reports/` for offline or shareable exports (PDF, archive).

The default structure includes `presentations/investor/` for a concise external pitch deck and `presentations/internal/` for a fuller internal business plan deck. Start from HTML-PPT templates and layouts, use token-based themes, and include speaker notes for human review.

### 5. Record work as you go

After each commit, append one matching entry to `doc/DAILY_LOG.md` with `python3 scripts/log_commit.py` or by editing the file directly.

Each entry should include:

- commit hash
- summary of what changed
- main files touched
- result or impact
- next concrete step

At the end of a work session, update `doc/WORKLOG.md` if a future collaborator or assistant would benefit from the context.

## Minimum Project Metadata

Every project created from this template should fill in these README fields before planning work begins:

- Project lead
- Business or venture name
- Target customer or buyer
- Market or sector
- Business model
- Data or source steward
- Planning stage
- Expected deliverables
- Review status

## Assistant Configuration

These files define assistant behavior:

| File | Used by |
|------|---------|
| `AGENTS.md` | Shared rules for all assistants |
| `CLAUDE.md` | Claude Code |
| `.github/copilot-instructions.md` | GitHub Copilot |

For normal project startup, edit `README.md` for project-specific context and leave this file stable. Change this file only when you intentionally want to change the template's shared assistant workflow.
