# Project Status

## Purpose

Check here first to understand where the business plan template stands. This file tracks what has been done, what is active, and what should happen next.

## Completed

- Established shared instruction files for Codex, Claude Code, and GitHub Copilot (`AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`).
- Set up repository-native tracking files for status, decisions, environment notes, work logs, and daily commit journal.
- Split the template docs so `README.md` is project-facing and `MEMORY.md` holds the stable shared memory contract.
- Linked this repository to `git@github.com:yangjl/busplan.git`.
- Drafted `doc/BUSINESS_PLAN_TEMPLATE_REFACTOR_PLAN.md`.
- Created business-plan memory docs for assumptions, market research, customer discovery, competitive landscape, financial model notes, and pitch deck planning.
- Rewrote the README, stable memory contract, assistant instructions, environment notes, and new-project checklist for a human-in-the-loop business plan workflow.
- Added `presentations/investor/` and `presentations/internal/` as parallel HTML-PPT source deck tracks.
- Removed the old analysis-oriented scaffold and local web-dashboard scaffold from the active template structure.
- Rewrote `scripts/doctor.py` for the business-plan template and validated the refactor with zero failures and zero warnings.

## In Progress

- Awaiting review and commit of the business plan template refactor.

## Next Steps

- Commit the refactor and run `python3 scripts/log_commit.py`.
- Start the first business plan by filling in README metadata and the assumption, market, customer, competitor, financial, and presentation planning docs.

## Open Questions

- None at the template level. All eight refactor decisions were resolved on 2026-05-13 (see `doc/DECISIONS.md`). New questions for each business plan project should be tracked under the project-specific evidence and assumption docs in `doc/`.
