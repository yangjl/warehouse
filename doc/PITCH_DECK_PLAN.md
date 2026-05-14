# Pitch Deck Plan

## Purpose

Plan the HTML-PPT business plan or pitch deck narrative, slide structure, and review status.

## Reporting Tool

Use the HTML-PPT skill for presentation reporting. The template assumes this skill is installed at the user level; if it is missing, install it with:

```bash
npx skills add https://github.com/lewislulu/html-ppt-skill
```

Follow the skill's authoring rules:

- Start from an existing template or layout.
- Use token-based themes rather than literal colors.
- Include speaker notes in each slide.
- Keep the deck as static HTML/CSS/JS that can be reviewed locally.
- Author mobile-first: portrait phones before 16:9 laptops, responsive units (`clamp()`, `vh`, `dvh`), 44 × 44 px touch targets.
- Follow the layout contract in `web/README.md` so the deck inherits the mobile theme and slide navigation.

## Render Targets

| Audience                | Source                            | Web-delivered                 | Offline export |
| ----------------------- | --------------------------------- | ----------------------------- | -------------- |
| Investors               | `presentations/investor/deck.md`  | `web/investor/index.html`     | `reports/`     |
| Internal team / sponsor | `presentations/internal/deck.md`  | `web/internal/index.html`     | `reports/`     |

The web-delivered version is served by Vercel from the `web/` directory (config: `vercel.json`).

## Draft Deck Outline

| Slide | Purpose | Evidence needed | Review status |
|-------|---------|-----------------|---------------|
| Cover | Name the business and audience. | Business name, tagline, date. | draft |
| Problem | State the customer pain. | Discovery evidence. | draft |
| Solution | Explain the offer. | Product or service description. | draft |
| Customer | Define target segment. | Customer research. | draft |
| Market | Size and trend the opportunity. | Market research sources. | draft |
| Competition | Show alternatives and differentiation. | Competitive landscape. | draft |
| Business model | Explain pricing and revenue logic. | Business assumptions. | draft |
| Go to market | Describe acquisition and sales motion. | Channel assumptions. | draft |
| Financials | Summarize model scenarios. | Financial model notes. | draft |
| Roadmap | Show milestones and execution plan. | Project status and decisions. | draft |
| Ask | State what support or decision is needed. | Human-approved ask. | draft |

## Version Notes

- Record major narrative or deck-structure decisions in `doc/DECISIONS.md`.
