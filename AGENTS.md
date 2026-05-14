# Business Plan Project Agent Instructions

This repository is a portable business plan template. Treat the repository itself as the durable project memory.

This is a human-in-the-loop business planning project. When your work affects strategy, assumptions, interpretation, market claims, customer claims, financial forecasts, pricing, positioning, or investor-facing language, pause and flag the decision for human review before proceeding.

## README And MEMORY Rule

- `README.md` is the human-facing project guide and should be edited when a new business plan starts.
- `MEMORY.md` is the stable template memory contract and should not be casually rewritten for project-specific needs.
- Only change `MEMORY.md` when intentionally maintaining the template itself.

## Read First

Before major work, review:

1. `README.md`
2. `MEMORY.md`
3. `doc/PROJECT_STATUS.md`
4. `doc/DECISIONS.md`
5. `doc/BUSINESS_ASSUMPTIONS.md`
6. `doc/WORKLOG.md`

After meaningful work, update the relevant file in `doc/`. After each commit, append one matching record to `doc/DAILY_LOG.md`.

## Business Planning Preferences

- Keep assumptions, sources, outputs, and review status visible near the top of planning documents and scripts.
- Favor clear business and customer language over short clever labels.
- Keep scripts runnable from the project root whenever possible.
- Prefer Markdown for durable planning memory.
- Use Python or R only when they are useful for data cleanup, financial checks, market sizing, or repeatable analysis.
- Keep reusable helpers in `scripts/` unless a larger code structure becomes necessary.

## HTML-PPT Reporting

- Presentation reporting should use the HTML-PPT skill from <https://github.com/lewislulu/html-ppt-skill>.
- Install with `npx skills add https://github.com/lewislulu/html-ppt-skill` when the skill is not already available.
- Store source decks in `presentations/`.
- Render the web-delivered version of each deck into `web/<track>/index.html` (`web/investor/index.html` and `web/internal/index.html`) so Vercel serves the latest version automatically.
- Store offline or shareable exports (PDF, archived HTML) in `reports/`.
- Start from an existing HTML-PPT template or layout.
- Use token-based themes and CSS variables rather than hard-coded colors.
- Include speaker notes in slides (inside `<aside class="slide__notes">`) so the deck can be reviewed by humans.
- Record major narrative, deck-structure, or audience changes in `doc/DECISIONS.md`.

## Mobile And Web Delivery

- Author decks mobile-first: assume a portrait phone before a 16:9 laptop. Use responsive units (`clamp()`, `vh`, `dvh`, `%`) and avoid fixed widths.
- Every rendered deck under `web/` must set `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` and use the `.deck` / `.deck__viewport` / `.slide` / `.slide__notes` / `.deck__nav` layout contract documented in `web/README.md`.
- Interactive controls must be at least 44 × 44 px.
- Respect `prefers-color-scheme`, `prefers-reduced-motion`, and the `safe-area-inset-*` environment variables.
- Vercel hosts the `web/` directory as a pure-static site. The hosting config is `vercel.json` at the repository root. Do not reintroduce `package.json` or a Node build step; the doctor script intentionally enforces this.
- Decks ship with `<meta name="robots" content="noindex">` by default. Removing it counts as an investor- or customer-facing claim and requires human review.

## Directory Conventions

- `inputs/` contains source notes, interviews, surveys, market exports, and other business-plan inputs.
- `models/` contains financial models, scenario tables, and assumption worksheets.
- `presentations/` contains source HTML-PPT presentation decks, with `investor/` and `internal/` tracks.
- `web/` contains the deploy-ready, mobile-responsive static site served by Vercel, with `investor/` and `internal/` rendered decks plus shared `styles/` and `scripts/`.
- `reports/` contains rendered decks, exported reports, and shareable deliverables.
- `assets/` contains logos, product images, screenshots, charts, and presentation assets.
- `cache/` contains rebuildable intermediates.
- `doc/` contains plans, status, decisions, assumptions, environment notes, and work logs.
- `scripts/` contains small project utilities.

## Human Review Gates

Pause for human review before changing or finalizing:

- market sizing assumptions
- customer segmentation
- competitive positioning
- pricing, revenue, cost, margin, or growth assumptions
- go-to-market strategy
- funding asks or investor-facing claims
- legal, regulatory, medical, tax, or financial claims
- interpretation of customer discovery evidence
- final deck narrative for an external audience

## Version Control

- GitHub is the authoritative history for tracked code and documentation.
- Do not commit files larger than 100 MB.
- Avoid committing large generated files unless they are intentional deliverables.
- When a strategy, assumption, positioning, or model changes, record the change in `doc/DECISIONS.md`.
- When a task ends, leave a concrete next step in `doc/PROJECT_STATUS.md`.
- After each commit, run `python3 scripts/log_commit.py` when available, or manually add one `doc/DAILY_LOG.md` entry with the commit hash, summary, touched files, impact, and next step.
