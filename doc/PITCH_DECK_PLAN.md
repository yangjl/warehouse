# Pitch Deck Plan — Xu Logistics Center

## Purpose

Plan two parallel HTML-PPT decks: a concise **investor pitch** and a longer **internal business plan**. Both narratives draw from the same memory in `doc/`. Every slide here is **DRAFT** until Mr. Xu reviews the narrative and approves the figures.

## Reporting Tool

Use the HTML-PPT skill for presentation reporting. The template assumes the skill is installed at the user level; install with:

```bash
npx skills add https://github.com/lewislulu/html-ppt-skill
```

Authoring rules:

- Start from an existing template / layout; use token-based themes.
- Include speaker notes in each slide (`<aside class="slide__notes">`).
- Author mobile-first; obey the layout contract in `web/README.md`; ≥ 44 × 44 px touch targets.
- Ship `noindex` until human review clears for public sharing.

## Render Targets

| Audience | Source | Web-delivered | Offline export |
|----------|--------|---------------|----------------|
| Investors and lenders | `presentations/investor/deck.md` | `web/investor/index.html` | `reports/xu-logistics-investor-deck.pdf` |
| Internal team and sponsor | `presentations/internal/deck.md` | `web/internal/index.html` | `reports/xu-logistics-internal-deck.pdf` |

## Investor Deck Outline (10–12 slides)

| # | Slide | Purpose | Evidence needed | Review status |
|---|-------|---------|-----------------|---------------|
| 1 | Cover | Name, tagline, audience, date. Tagline draft: "The carrier-neutral inland gateway for Omaha / Council Bluffs — container yard, transload, bonded warehouse." | Confirm legal entity name and tagline. | draft |
| 2 | Problem | Midwest empty-container imbalance + lack of integrated CY + transload + bonded option in the I-29 / I-80 corridor. | Discovery quotes from carriers and ag exporters. | draft |
| 3 | Solution | 21-acre site adjacent to Bunge, UP Council Bluffs Yard, BNSF flows, and I-29. CY + transload + standard WH + bonded WH under one operator with captive drayage. | Site map, phasing diagram. | draft |
| 4 | Why now | Containerized ag exports, tariff-driven demand for bonded / deferred-duty storage, regional inventory pushback away from coastal megaclusters. | Trade volume series, tariff timeline. | draft |
| 5 | Market | Omaha / CB intermodal corridor; catchment radius; sizing logic (60K–75K TEU/yr CY, 3.5K–4.5K transload boxes/yr, ~140K sq ft warehouse). | `doc/MARKET_RESEARCH.md` sizing. | draft |
| 6 | Customers and traction | Steamship lines, ag exporters, import distributors, NVOCCs, 3PLs. Soft commitments / LOIs once collected. | `doc/CUSTOMER_DISCOVERY.md` log. | draft |
| 7 | Founder | Mr. Xu: 40+ years ocean freight and logistics, 7 years owning a trucking company. Captive drayage is a structural advantage. | Bio, vessel and carrier relationships, fleet stats. | draft |
| 8 | Competition and differentiation | Carrier-owned ramps vs. third-party CYs vs. coastal inland-port operators. We are carrier-neutral, multi-service, and Mr. Xu-anchored. | `doc/COMPETITIVE_LANDSCAPE.md`. | draft |
| 9 | Business model | Per-TEU storage, gate, transload throughput, warehouse storage / handling, bonded premium, captive drayage margin. | `doc/BUSINESS_ASSUMPTIONS.md` pricing rows. | draft |
| 10 | Financials | 7-year revenue and EBITDA: Conservative / Base / Upside. Year 4 Base ~$22M revenue, ~$6M–$8M EBITDA. | `doc/FINANCIAL_MODEL_NOTES.md`. | draft |
| 11 | Roadmap | Phase 0 → Phase 3 (months 1–30) with carrier go-live, transload start, warehouse open, bonded open. | Phasing diagram, milestones. | draft |
| 12 | Ask | Phase 1 ask **$18M–$24M** capital stack, mix of senior debt + equity + incentives; what we want from the investor / lender (term, draw schedule, board / oversight). | Sponsor-approved ask only. | **draft — human review required** |

## Internal Deck Outline (Longer Business Plan, 25–35 slides)

Use the same 12 investor slides as the spine, then add:

- **Site detail**: parcel APN, zoning letter, easements, environmental status, civil concept, paving spec, gate / fence design, lighting design, security plan.
- **Operations detail**: organization chart by year, FTE plan, shift coverage, gate process, M&R triage policy, EDI flows, TOS / WMS selection, chassis pool relationship.
- **Regulatory detail**: bonded warehouse class selection (most likely Class 3 public bonded for storage; possibly Class 8 for cleaning / repacking); FTZ #64 subzone application option; CBP surety bond size; recordkeeping and audit plan; USDA / FSIS where applicable.
- **Safety detail**: OSHA program, near-miss reporting, equipment certification cadence, cold-weather operations, levee district awareness, NPDES stormwater compliance.
- **HR and labor**: wage band, recruitment plan with IWD and local unions, training program, drug-screen and CDL policy.
- **IT and integrations**: TOS, WMS, customs interface, EDI 322/323/315/214, accounting integration.
- **Risk register**: detailed list with owners and mitigations (mirrors the risk section of `doc/BUSINESS_PLAN.md`).
- **Permit and incentive timeline**: Gantt of city / IDOT / Iowa DNR / IEDA / CBP touchpoints.
- **Capital plan and draw schedule**: monthly draw vs. milestones, DSCR projections, covenant headroom.
- **Customer commitment log**: scrubbed for external sharing as needed.

## Version Notes

- Record major narrative or deck-structure decisions in `doc/DECISIONS.md`.
- Keep speaker notes substantive — every figure should have a footnote pointing to its source file under `doc/`.
- Build the investor deck **after** Mr. Xu's first round of review of the planning docs; do not render an investor deck from `draft` assumptions.
