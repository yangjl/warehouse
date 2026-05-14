# Human-In-The-Loop Business Plan Template

Use this repository as a portable template for developing business plans with humans and AI assistants working from the same durable project memory.

This template is designed for business planning, customer discovery, market research, financial assumptions, and HTML presentation reporting. Humans remain responsible for strategy, interpretation, forecasts, and external-facing claims.

## Business Plan Snapshot

- Business or venture name:
- Target customer:
- Market or sector:
- Business model:
- Primary evidence sources:
- Main outputs: HTML-PPT deck, business plan notes, assumptions log, financial model notes
- Current phase: concept / discovery / validation / planning / fundraising / operating

## Required Project Metadata

Fill these in when a new business plan starts. They are the minimum shared context expected by humans and AI assistants.

- Project lead:
- Business or venture name:
- Target customer or buyer:
- Market or sector:
- Business model:
- Data or source steward:
- Planning stage:
- Expected deliverables:
- Review status: planning / human reviewed / ready to present / archived

## Human Review Checkpoints

Pause for human review before changing or finalizing:

- market sizing assumptions
- customer segmentation
- competitive positioning
- pricing, revenue, cost, margin, or growth assumptions
- go-to-market strategy
- funding asks or investor-facing claims
- legal, regulatory, medical, tax, or financial claims
- interpretation of customer discovery evidence

## Reporting With HTML-PPT

Presentation reporting should use the HTML-PPT skill:

The template assumes the skill is installed at the user level. If it is missing, install it with the command documented by the skill repository:

```bash
npx skills add https://github.com/lewislulu/html-ppt-skill
```

Use source decks in `presentations/`, render the web-delivered version into `web/<track>/index.html`, and put offline or shareable exports in `reports/`.

When authoring decks:

- start from an existing HTML-PPT template or layout
- use token-based themes rather than hard-coded colors
- include speaker notes for human review
- author mobile-first: portrait phones before 16:9 laptops, responsive units (`clamp()`, `vh`, `dvh`), and at least 44 × 44 px touch targets
- follow the layout contract in `web/README.md` so the rendered deck inherits the mobile theme and navigation
- record major narrative or deck-structure decisions in `doc/DECISIONS.md`

The pitch deck plan lives in `doc/PITCH_DECK_PLAN.md`.

## Web Delivery (Vercel)

The `web/` directory is the deploy-ready, mobile-responsive static site for the project's decks.

- `web/index.html` is the landing page linking to each deck track.
- `web/styles/deck.css` and `web/scripts/deck.js` provide the mobile-first theme and touch/keyboard slide navigation.
- `web/investor/index.html` and `web/internal/index.html` hold the rendered decks. They start as placeholders until the HTML-PPT skill writes the real deck into them.
- `vercel.json` configures a pure-static deploy. No `package.json` or build step is required.

To preview locally, open `web/index.html` directly in a browser or run any static file server from the repository root (for example `python3 -m http.server` and visit `http://localhost:8000/web/`).

To deploy, connect this repository to Vercel and accept the defaults, or run `vercel deploy --prod` from the repository root. Decks ship with `<meta name="robots" content="noindex">` by default; remove it only after human review clears the deck for public sharing.

## Project Memory

Review these files before substantial work:

1. `README.md`
2. `MEMORY.md`
3. `doc/PROJECT_STATUS.md`
4. `doc/DECISIONS.md`
5. `doc/BUSINESS_ASSUMPTIONS.md`
6. `doc/WORKLOG.md`

After meaningful work, update the relevant file in `doc/`. After each commit, append one matching record to `doc/DAILY_LOG.md`.

## Directory Layout

| Directory | Purpose |
|-----------|---------|
| `inputs/` | Source notes, interviews, surveys, market exports, and other business-plan inputs |
| `models/` | Financial models, scenario tables, and assumption worksheets |
| `presentations/` | Source HTML-PPT presentation decks, with parallel `investor/` and `internal/` tracks |
| `web/` | Deploy-ready, mobile-responsive static site served by Vercel (`investor/` and `internal/` rendered decks) |
| `reports/` | Rendered decks, exported reports, and shareable deliverables |
| `assets/` | Logos, product images, screenshots, charts, and presentation assets |
| `cache/` | Rebuildable intermediate files |
| `doc/` | Project memory, status, assumptions, decisions, and work logs |
| `scripts/` | Small project utilities such as validation and commit logging |

## Core Planning Files

| File | Purpose |
|------|---------|
| `doc/BUSINESS_ASSUMPTIONS.md` | Core assumptions, evidence, confidence, and review status |
| `doc/MARKET_RESEARCH.md` | Market definition, sources, sizing logic, and open gaps |
| `doc/CUSTOMER_DISCOVERY.md` | Interview, survey, and customer validation notes |
| `doc/COMPETITIVE_LANDSCAPE.md` | Competitors, substitutes, differentiation, and risks |
| `doc/FINANCIAL_MODEL_NOTES.md` | Pricing, revenue, cost, margin, growth, and funding assumptions |
| `doc/PITCH_DECK_PLAN.md` | Deck outline, narrative, evidence needs, and review status |
| `doc/PROJECT_STATUS.md` | What is done, active, and next |
| `doc/DECISIONS.md` | Important decisions and why they were made |
| `doc/DAILY_LOG.md` | One human-readable record per commit |
| `doc/WORKLOG.md` | Session notes and handoff context |
| `doc/ENVIRONMENT.md` | Local setup, tools, and reporting workflow notes |

## Template Check

Run this from the repository root after setup or before handoff:

```bash
python3 scripts/doctor.py
```

## License

Free and open source, licensed under [GPLv3](LICENSE). This is a business planning template intended for human-in-the-loop work and adaptation.
