# Internal Business Plan Deck

> Starter slide-by-slide source for the internal track. Use this when the audience is the founding team, an internal sponsor, or a non-investor reviewer who needs the full operating context. Render via the `html-ppt-skill`.
>
> Render targets:
> - `web/internal/index.html` is the web-delivered, mobile-responsive deck served by Vercel. Use the layout contract in `web/README.md` (viewport meta tag, `.deck` / `.deck__viewport` / `.slide` / `.slide__notes` / `.deck__nav` classes, `web/styles/deck.css`, `web/scripts/deck.js`).
> - `reports/` is for offline or shareable exports (PDF, archived HTML).
>
> Authoring constraints:
> - Mobile first: assume a portrait phone before a 16:9 laptop. Use responsive units (`clamp()`, `vh`, `dvh`) and aim for one main idea per slide.
> - Keep speaker notes inside `<aside class="slide__notes">…</aside>` so the rendered deck stays reviewable.
> - Touch targets (buttons, links) must be at least 44 × 44 px.

## Slide 1 — Business Concept

- One-sentence concept:
- Origin and motivation:
- Scope of this plan:

Speaker notes: bound the plan; what is in scope vs. out of scope.

## Slide 2 — Customer Discovery

- Segments studied:
- Methods used:
- Key signals:

Speaker notes: link to `doc/CUSTOMER_DISCOVERY.md` for raw evidence.

## Slide 3 — Market Evidence

- Market definition:
- Sizing approach:
- Confidence and gaps:

Speaker notes: separate validated evidence from inferred estimates.

## Slide 4 — Competitive Landscape

- Direct competitors:
- Substitutes:
- White space:

Speaker notes: include both ends of the spectrum — entrants and incumbents.

## Slide 5 — Business Model

- Offer:
- Pricing:
- Revenue streams:
- Cost structure:

Speaker notes: link assumptions to `doc/BUSINESS_ASSUMPTIONS.md`.

## Slide 6 — Go-to-Market Plan

- Channels:
- Sales motion:
- Acquisition cost assumptions:

Speaker notes: identify the single largest unknown.

## Slide 7 — Operating Plan

- Team and roles:
- Operating cadence:
- Tooling and infrastructure:

Speaker notes: note any hires or vendor decisions that gate execution.

## Slide 8 — Financial Assumptions

- Revenue model:
- Cost model:
- Funding need:
- Scenarios:

Speaker notes: cite `doc/FINANCIAL_MODEL_NOTES.md`; flag review status.

## Slide 9 — Risks

- Market risks:
- Execution risks:
- Regulatory or legal risks:

Speaker notes: pair each risk with the leading indicator that would warn early.

## Slide 10 — Milestones

- Next 90 days:
- 12-month plan:
- Decision points:

Speaker notes: cite `doc/PROJECT_STATUS.md`.

## Slide 11 — Decisions Needed

- Open decisions:
- Required input:
- Deadlines:

Speaker notes: name owners and dates.
