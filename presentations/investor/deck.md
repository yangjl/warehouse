# Investor Pitch Deck

> Starter slide-by-slide source for the investor track. Replace each section's content with project-specific material before producing a finished deck via the `html-ppt-skill`. Keep this file as the canonical narrative source.
>
> Render targets:
> - `web/investor/index.html` is the web-delivered, mobile-responsive deck served by Vercel. Use the layout contract in `web/README.md` (viewport meta tag, `.deck` / `.deck__viewport` / `.slide` / `.slide__notes` / `.deck__nav` classes, `web/styles/deck.css`, `web/scripts/deck.js`).
> - `reports/` is for offline or shareable exports (PDF, archived HTML).
>
> Authoring constraints:
> - Mobile first: assume a portrait phone before a 16:9 laptop. Use responsive units (`clamp()`, `vh`, `dvh`) and aim for one main idea per slide.
> - Keep speaker notes inside `<aside class="slide__notes">…</aside>` so the rendered deck stays reviewable.
> - Touch targets (buttons, links) must be at least 44 × 44 px.
> - Pause for human review before publishing investor-facing narrative or claims.

## Slide 1 — Cover

- Business name:
- Tagline:
- Audience:
- Date:

Speaker notes: who is presenting, who is in the room, what decision is being requested.

## Slide 2 — Problem

- Customer:
- Pain point:
- Evidence:

Speaker notes: ground the problem in observed customer behavior, not opinion.

## Slide 3 — Solution

- Offer:
- Why now:
- Differentiated mechanism:

Speaker notes: connect the solution back to the specific pain on the previous slide.

## Slide 4 — Customer

- Primary segment:
- Economic buyer:
- Adoption trigger:

Speaker notes: cite `doc/CUSTOMER_DISCOVERY.md` evidence.

## Slide 5 — Market

- Market definition:
- Sizing logic:
- Trend:

Speaker notes: cite `doc/MARKET_RESEARCH.md` sources; flag confidence level.

## Slide 6 — Competition

- Direct competitors:
- Substitutes:
- Differentiation:

Speaker notes: cite `doc/COMPETITIVE_LANDSCAPE.md`.

## Slide 7 — Business Model

- Pricing:
- Revenue streams:
- Unit economics:

Speaker notes: cite `doc/FINANCIAL_MODEL_NOTES.md`; mark assumptions vs. validated numbers.

## Slide 8 — Traction or Validation

- Signal:
- Metric:
- Evidence:

Speaker notes: prefer measurable signals over anecdotes.

## Slide 9 — Financials

- Planning horizon:
- Scenario summary:
- Funding need:

Speaker notes: treat as planning estimates; do not present as guarantees.

## Slide 10 — Roadmap

- Next milestone:
- 12-month plan:
- Risks:

Speaker notes: cite `doc/PROJECT_STATUS.md` and `doc/DECISIONS.md`.

## Slide 11 — Ask

- Specific ask:
- Use of funds or support:
- Decision needed:

Speaker notes: name the decision and the deadline.
