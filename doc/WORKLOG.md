# Work Log

## Purpose

Keep short dated notes so a business planner or AI assistant can resume work quickly.

## 2026-05-13

- Linked the repository remote to `git@github.com:yangjl/busplan.git`.
- Drafted `doc/BUSINESS_PLAN_TEMPLATE_REFACTOR_PLAN.md` to guide the conversion into a human-in-the-loop business plan template.
- Recorded the business-template decisions in `doc/DECISIONS.md`, including source presentations in `presentations/`, parallel investor/internal deck tracks, Python utility retention, and the HTML-PPT skill prerequisite.
- Added business-plan folders and memory docs for assumptions, market research, customer discovery, competitive landscape, financial model notes, and pitch deck planning.
- Rewrote README, MEMORY, assistant instructions, environment notes, checklist, status, ignore rules, and validation checks for the business-plan workflow.
- Removed the old research-analysis and local web-dashboard scaffold from the active template structure.
- Ran `python3 scripts/doctor.py`; validation passed with zero failures and zero warnings.

## 2026-05-14

- Conducted a second-look internal research pass on the Xu Logistics Center business plan, focused on facts rather than pitch language.
- Created `reports/internal-logistics-market-map.html` with three internal visuals: rough Bunge Rd / I-29 location map, China-to-U.S.-to-Midwest container-flow map, and evidence-backed niche-market fit table.
- Updated `doc/MARKET_RESEARCH.md` with the internal map link, source-backed niche finding, data points from FMC, USDA AMS, USTR, UP, BNSF, Bunge, LoopNet, and 19 CFR 19.1, plus explicit human-review gates.
- Updated `doc/PROJECT_STATUS.md` so the next review with Mr. Xu includes the narrower niche hypothesis: carrier-named off-dock CY + food/feed-grade ag transload first, bonded storage as a secondary import-side option to validate.
- Rebuilt the internal deck with the HTML-PPT skill direction and rendered it to `web/internal/index.html` as a 10-slide mobile-first deck. Updated `presentations/internal/deck.md` as the source outline, refreshed the web deck index copy, and recorded the deck-structure decision in `doc/DECISIONS.md`.
