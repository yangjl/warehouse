# Presentations

Store source HTML-PPT decks here.

The default template has two deck tracks:

- `investor/`: concise external pitch deck
- `internal/`: fuller internal business plan deck

Use the HTML-PPT skill's templates and layouts rather than writing presentation structure from scratch.

## Render targets

| Audience                | Source                            | Rendered for web              | Exports                   |
| ----------------------- | --------------------------------- | ----------------------------- | ------------------------- |
| Investors               | `presentations/investor/deck.md`  | `web/investor/index.html`     | `reports/` (PDF, archive) |
| Internal team / sponsor | `presentations/internal/deck.md`  | `web/internal/index.html`     | `reports/`                |

The `web/` directory is the deploy-ready, mobile-friendly site served by
Vercel. See `web/README.md` for the layout contract every rendered deck
must follow (viewport meta tag, deck classes, responsive units, touch
targets). See `vercel.json` at the repository root for the hosting
configuration.
