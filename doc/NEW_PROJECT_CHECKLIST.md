# New Business Plan Checklist

Use this checklist when copying the template into a real business planning project.

## Project Identity

- [ ] Rename the project in `README.md`.
- [ ] Replace the business plan snapshot with the real venture, target customer, market, model, outputs, and current phase.
- [ ] Fill the required project metadata in `README.md`.
- [ ] Remove or archive example material that is not relevant to the new business plan.

## Human Review Gates

- [ ] Confirm the business concept with the project lead.
- [ ] Confirm the target customer and economic buyer.
- [ ] Confirm the first-pass market definition before market sizing.
- [ ] Confirm pricing, revenue, cost, and growth assumptions before using them in external materials.
- [ ] Confirm competitive positioning before using it in a pitch deck.
- [ ] Record strategy-changing or assumption-changing decisions in `doc/DECISIONS.md`.

## Evidence And Assumptions

- [ ] Add starting assumptions to `doc/BUSINESS_ASSUMPTIONS.md`.
- [ ] Add market sources and sizing notes to `doc/MARKET_RESEARCH.md`.
- [ ] Add customer discovery notes to `doc/CUSTOMER_DISCOVERY.md`.
- [ ] Add competitors and substitutes to `doc/COMPETITIVE_LANDSCAPE.md`.
- [ ] Add financial-model assumptions to `doc/FINANCIAL_MODEL_NOTES.md`.

## Reporting

- [ ] Install or confirm the HTML-PPT skill: `npx skills add https://github.com/lewislulu/html-ppt-skill`.
- [ ] Create source presentation decks in `presentations/investor/` and `presentations/internal/` as needed.
- [ ] Track the deck narrative in `doc/PITCH_DECK_PLAN.md`.
- [ ] Store rendered or shareable outputs in `reports/`.
- [ ] Include speaker notes for human review.

## Git And Project Memory

- [ ] Initialize fresh Git history for the copied project when needed.
- [ ] Create or connect the private GitHub repository when needed.
- [ ] Update `doc/PROJECT_STATUS.md` with current state and next step.
- [ ] Add the first project-specific entry to `doc/WORKLOG.md`.
- [ ] Keep one `doc/DAILY_LOG.md` entry per commit.
- [ ] Run `python3 scripts/doctor.py` before the first handoff.
