# Claude Code Project Instructions

Use `AGENTS.md` as the main instruction file for business planning conventions and workflow rules.

Important file rule:

- `README.md` is for project-specific human-facing context.
- `MEMORY.md` is the stable template memory contract and should remain stable unless you are intentionally maintaining the template.

Before substantial work, review:

1. `AGENTS.md`
2. `README.md`
3. `MEMORY.md`
4. `doc/PROJECT_STATUS.md`
5. `doc/DECISIONS.md`
6. `doc/BUSINESS_ASSUMPTIONS.md`

After meaningful work, update the relevant file in `doc/`. After each commit, run `python3 scripts/log_commit.py` when available or add one matching entry to `doc/DAILY_LOG.md`.

This is a human-in-the-loop business planning project. When proposing changes that affect strategy, assumptions, market interpretation, customer interpretation, pricing, financial forecasts, positioning, funding asks, or external-facing claims, flag them for human review rather than proceeding autonomously.

Presentation reporting should use the HTML-PPT skill from <https://github.com/lewislulu/html-ppt-skill>. Store source decks in `presentations/`, render the web-delivered version into `web/<track>/index.html` (mobile-friendly, served by Vercel — see `web/README.md` for the layout contract), keep offline exports in `reports/`, and include speaker notes for human review.
