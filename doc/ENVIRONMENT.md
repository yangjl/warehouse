# Environment Notes

## Purpose

Document how the business plan template runs locally, how presentation reporting is produced, and which tools are expected.

## Local Development

- Use the repository root as the working directory for scripts, decks, and reports.
- Keep source notes, interviews, surveys, and market exports in `inputs/`.
- Keep financial models and scenario tables in `models/`.
- Keep logos, screenshots, charts, and other presentation assets in `assets/`.
- Keep generated deliverables in `reports/`.
- Avoid committing large generated files unless they are intentional deliverables.
- Do not commit files larger than 100 MB.

## HTML-PPT Reporting

Presentation reporting should use the HTML-PPT skill:

```bash
npx skills add https://github.com/lewislulu/html-ppt-skill
```

Source decks should live in `presentations/`. The web-delivered, mobile-responsive version of each deck should be rendered into `web/<track>/index.html`. Offline or shareable exports (PDF, archived HTML) belong in `reports/`.

Authoring expectations:

- Start from an existing HTML-PPT template or layout.
- Use token-based themes and CSS variables.
- Author mobile-first: assume a portrait phone before a 16:9 laptop. Use responsive units (`clamp()`, `vh`, `dvh`) and at least 44 × 44 px touch targets.
- Follow the layout contract documented in `web/README.md` (viewport meta tag, `.deck` / `.deck__viewport` / `.slide` / `.slide__notes` / `.deck__nav` classes, shared `web/styles/deck.css`, navigation script `web/scripts/deck.js`).
- Include speaker notes (in `<aside class="slide__notes">`) for human review.
- Record major narrative or deck-structure decisions in `doc/DECISIONS.md`.

## Web Delivery (Vercel)

The `web/` directory is the deploy-ready static site served by Vercel. Hosting is configured by `vercel.json` at the repository root — no `package.json` or build step is required.

- Preview locally by opening `web/index.html` directly, or run a static server from the repo root (`python3 -m http.server`) and visit `http://localhost:8000/web/`.
- Deploy by connecting the repository to Vercel and accepting the defaults, or by running `vercel deploy --prod` from the repository root.
- Decks default to `noindex`. Treat removing the `noindex` meta tag as an external-facing claim and pause for human review before publishing.

## Python And R

- Python or R may be used for repeatable data cleanup, market sizing, financial checks, or chart generation.
- Keep scripts runnable from the project root whenever possible.
- Document assumptions, inputs, outputs, and parameters near the top of each script.
- Record Python dependencies in `requirements.txt` only if dependencies are added.
- Record R environment decisions here if the project adopts R package management.

## GitHub

- Use GitHub as the authoritative history for tracked code and documentation.
- Keep heavy generated outputs out of Git unless they are deliberate deliverables.
- Write commit messages that describe the business-planning or template change clearly.
