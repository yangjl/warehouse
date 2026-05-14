# Copilot Repository Instructions

Use `AGENTS.md` as the cross-tool source of truth for this repository.

Important file rule:

- `README.md` is project-specific and can be edited for each new business plan.
- `MEMORY.md` is the stable template memory contract and should not be casually rewritten for project-specific needs.

This is a human-in-the-loop business planning project. When your work affects strategy, assumptions, market interpretation, customer interpretation, pricing, financial forecasts, positioning, funding asks, or external-facing claims, flag the decision for human review.

Follow these conventions:

- Use Markdown for durable planning memory.
- Use Python or R only when useful for data cleanup, market sizing, financial checks, or repeatable analysis.
- Store source inputs in `inputs/`.
- Store financial models and scenario tables in `models/`.
- Store HTML-PPT source decks in `presentations/`.
- Render the web-delivered version of each deck into `web/<track>/index.html` (mobile-responsive, Vercel-hosted — see `web/README.md` for the layout contract).
- Store offline or shareable deliverables in `reports/`.
- Preserve the documented directory roles in `README.md` and `MEMORY.md`.
- Review `doc/PROJECT_STATUS.md`, `doc/DECISIONS.md`, and `doc/BUSINESS_ASSUMPTIONS.md` before major changes.
- Update project memory in `doc/` after meaningful work.
- After each commit, run `python3 scripts/log_commit.py` when available or append one matching record to `doc/DAILY_LOG.md`.
