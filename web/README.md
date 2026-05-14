# Web

Deploy-ready, mobile-friendly static site for the business plan's
presentations. Vercel serves this directory as the project root.

## Layout

```
web/
  index.html            landing page linking to each deck
  styles/
    site.css            landing-page tokens and layout
    deck.css            mobile-first deck theme (CSS variables + slide grid)
  scripts/
    deck.js             keyboard, click, and touch-swipe slide navigation
  investor/index.html   rendered investor deck (placeholder until filled)
  internal/index.html   rendered internal deck (placeholder until filled)
```

## Mobile-compatibility contract

Every rendered deck under `web/` must:

- Set `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.
- Use the `.deck`, `.deck__viewport`, `.slide`, `.slide__inner`,
  `.slide__notes`, `.deck__nav`, and `.deck__progress` classes from
  `styles/deck.css` (or mirror its tokens and breakpoints).
- Define interactive controls with at least a 44 × 44 px touch target.
- Use responsive units (`clamp()`, `vh`, `dvh`, `%`) — never fixed widths
  that assume desktop or 16:9.
- Respect `prefers-color-scheme`, `prefers-reduced-motion`, and the
  `safe-area-inset-*` environment variables.

## Rendering workflow

1. Edit the source deck under `presentations/investor/deck.md` or
   `presentations/internal/deck.md`.
2. Use the HTML-PPT skill to render the deck. Have the rendering target
   `web/<track>/index.html` so the same site serves the latest version.
3. Keep speaker notes inside `<aside class="slide__notes">…</aside>` so
   reviewers can read them on the page and presenters can hide them with
   the `P` key.
4. Open `web/index.html` in a browser to smoke-test, then commit.

## Hosting on Vercel

- The repository root contains `vercel.json` pointing the static build
  at `web/`. No build step or `package.json` is needed.
- To deploy: connect the repository to Vercel and accept the defaults,
  or run `vercel deploy --prod` from the repository root. Vercel will
  serve `web/index.html` at `/`, `web/investor/index.html` at
  `/investor/`, and `web/internal/index.html` at `/internal/`.
- Decks are marked `noindex` by default; remove the `<meta
  name="robots" content="noindex">` tag when a deck is ready for public
  sharing and has cleared human review.

## Review gates

This site is investor- and reviewer-facing. Before publishing changes
that touch narrative, claims, financials, or positioning, follow the
human review gates in `AGENTS.md`.
