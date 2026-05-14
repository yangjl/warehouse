# Business Assumptions — Xu Logistics Center

## Purpose

Track the core assumptions behind the business plan, the evidence supporting them, and the current review status. Every line below is **DRAFT** until Mr. Xu (and the relevant outside professional — broker, engineer, CPA, counsel) signs off.

## Notation

- Confidence: **low** (no primary evidence yet), **medium** (industry benchmark or partial evidence), **high** (Mr. Xu's direct experience or signed LOI / quote).
- Review status: **draft** → **human reviewed** → **accepted** → **retired**.
- "Mr. Xu — direct" means an assumption is anchored in his 40+ years of ocean freight and 7 years of trucking operations and should be confirmed in a short interview log entry in `doc/CUSTOMER_DISCOVERY.md`.

## Assumption Register

### Site And Entitlement

| ID | Assumption | Evidence | Confidence | Review status | Next check |
|----|------------|----------|------------|---------------|------------|
| S-01 | The 21-acre parcel is located in Council Bluffs, Pottawattamie County, Iowa, on the east side of I-29 near Bunge Avenue. | Geography: I-29 runs on the Iowa side of the Missouri River; Bunge Avenue serves Bunge's CB soybean complex. Needs APN from Mr. Xu. | medium | draft | Obtain APN, plat, and current title work. |
| S-02 | The site is zoned for heavy industrial use (Council Bluffs I-2 or equivalent) compatible with a container yard, transload operation, and warehousing. | County / city zoning maps; needs confirmation. | low | draft | Pull zoning letter from City of Council Bluffs Planning. |
| S-03 | The site has direct or near-direct access to I-29 and is within ~5 truck miles of UP Council Bluffs Yard and BNSF Gibson / Lincoln intermodal flows. | Map evidence; needs confirmed driving route and any haul-road constraints (overweight permits, time-of-day restrictions). | medium | draft | Drive route audit; confirm with IDOT and city traffic engineering. |
| S-04 | The site can be graded, paved (heavy-duty asphalt or concrete), drained (per Iowa DNR NPDES general permit for industrial stormwater), fenced, and lit within 9–12 months of closing. | Industry benchmark for greenfield CY; assumes no significant wetlands, archaeology, or Phase II ESA findings. | low | draft | Phase I ESA, geotech, civil concept, stormwater plan. |
| S-05 | Iowa property tax abatement (Urban Revitalization Plan), High Quality Jobs Program, and / or Pottawattamie County / CB incentives are available for a project of this scale (~$15–35M capex, 25–60 jobs). | IEDA program guidelines; needs application. | low | draft | Pre-application meeting with IEDA and Council Bluffs / Pottawattamie ED office. |

### Market

| ID | Assumption | Evidence | Confidence | Review status | Next check |
|----|------------|----------|------------|---------------|------------|
| M-01 | UP's Council Bluffs intermodal and carload throughput, combined with BNSF's Lincoln / KC / Gibson flows, generate enough off-rail container demand within a 75-mile radius to support a 21-acre inland container yard. | UP and BNSF public intermodal volume statements; AAR Rail Time Indicators; needs facility-level estimate. | medium | draft | Build a sized funnel in `doc/MARKET_RESEARCH.md`. |
| M-02 | The Omaha / Council Bluffs MSA is structurally **import-light, export-heavy** (ag commodity outflow, manufactured-goods inflow), so empty marine container availability is a chronic constraint that an independent CY with shipping-line relationships can monetize. | Industry-standard inland imbalance pattern; Mr. Xu — direct. | medium | draft | Interview 3 steamship lines and 2 NVOCCs. |
| M-03 | Soybean, DDGS, corn, and pork export demand from Bunge / ADM / Cargill / CHS / Tyson / Smithfield / JBS feeders within ~150 miles supports a transload throughput of at least 60–120 export containers per week by Year 3. | Mr. Xu — direct relationships with ag exporters and steamship lines; USDA / USDA-FAS soy and pork export series. | medium | draft | Confirm with 2–3 ag exporter interviews; cross-check USDA AMS data. |
| M-04 | Import distributors of consumer durables (appliances, e-bikes, e-scooters, EV components, furniture, machinery) and automotive parts moving through West Coast / Gulf ports into the Midwest are willing to use a Council Bluffs bonded warehouse and/or FTZ subzone to defer duty and stage regional distribution. | CBP bonded warehouse and FTZ program literature; competitor footprint analysis; Mr. Xu — direct. | low | draft | Interview 3 import distributors and 1 customs broker. |
| M-05 | Drayage rates and dwell penalties at congested West Coast and inland-port nodes make Council Bluffs-based bonded storage and transloading cost-competitive vs. door-direct moves for at least 20% of relevant Midwest-bound import volume. | Drayage benchmark surveys; Mr. Xu — direct. | low | draft | Build a 5-lane cost comparison in the financial model. |

### Customer

| ID | Assumption | Evidence | Confidence | Review status | Next check |
|----|------------|----------|------------|---------------|------------|
| C-01 | At least 2 ocean carriers will name the facility as an approved off-dock container depot within 12 months of paving / fencing / gate-system completion. | Mr. Xu — direct carrier relationships. | medium | draft | Soft LOIs from carriers during pre-build phase. |
| C-02 | At least 3 ag exporters will sign 12-month transloading agreements covering a baseline of 40 containers per week combined by Year 2. | Mr. Xu — direct. | medium | draft | LOI / take-or-pay structure during pre-build phase. |
| C-03 | At least 2 import distributors will commit to ≥ 10,000 sq ft each of bonded or general warehouse space within 18 months of opening the warehouse. | Mr. Xu — direct; competitor proxy. | low | draft | Customer interviews; pre-leasing memo. |
| C-04 | Mr. Xu's trucking company can absorb at least the first 10–15 daily drayage moves from the facility at marginal cost advantage, providing a captive demand floor. | Mr. Xu — direct. | high | draft | Confirm fleet size, ELD utilization, and dispatch capacity. |

### Pricing

All pricing assumptions are placeholders subject to a market-rate survey for Council Bluffs / Omaha / Kansas City / Chicago.

| ID | Service line | Draft price | Unit | Notes |
|----|--------------|-------------|------|-------|
| P-01 | Empty container storage | $3.00–$5.00 | per TEU per day | Free time 3–5 days for line accounts; carrier-account tiered rates. |
| P-02 | Loaded container storage | $6.00–$10.00 | per TEU per day | Free time 24–72 hours; demurrage thereafter. |
| P-03 | Gate in / gate out (per move) | $35–$55 | per move | Bundled with storage for line accounts. |
| P-04 | Transload — container to bulk truck or rail (or reverse) | $325–$525 | per container | Includes labor, forklift, dunnage; excludes chassis split fees and storage. |
| P-05 | Transload — bulk to ISO container (ag export) | $400–$700 | per container | Higher labor and dunnage for soybean / DDGS loading. |
| P-06 | Standard warehouse storage — rack pallet | $14–$22 | per pallet per month | Pallet in/out billed separately. |
| P-07 | Standard warehouse storage — floor / bulk | $0.55–$0.85 | per sq ft per month | Minimum 5,000 sq ft / 90 day commitments. |
| P-08 | Bonded warehouse storage premium | +25–40% | over standard storage | Reflects security, recordkeeping, surety bond, CBP audit cost. |
| P-09 | Drayage (captive to Mr. Xu's trucking) | $185–$285 | per move within ~75 mile radius | Pass-through with margin; out-of-radius quoted by lane. |

### Cost And Capex

| ID | Item | Draft estimate | Notes |
|----|------|----------------|-------|
| K-01 | Land basis (21 acres, Council Bluffs industrial) | $4.2M–$8.4M total ($200K–$400K per acre) | Confirm with appraisal and current asking comps; ownership structure may already include the land. |
| K-02 | Site work: grading, drainage, paving (asphalt with concrete pads at gates and M&R), fencing, lighting, gates (OCR + RFID), security cameras | $9M–$15M for ~16 acres of paved CY | Heavy-duty paving for loaded boxes is the dominant cost; engineer estimate required. |
| K-03 | Standard warehouse buildout (Phase 2): ~80,000–120,000 sq ft tilt-up | $90–$130 per sq ft turnkey = $7.2M–$15.6M | Includes racking, sprinkler, dock doors, climate control as needed. |
| K-04 | Bonded warehouse buildout (Phase 3): ~30,000–50,000 sq ft within or adjacent to Phase 2 with CBP-grade security, segregation, alarm, surveillance | $110–$160 per sq ft = $3.3M–$8.0M | Includes CBP application costs, surety bond, IT for recordkeeping. |
| K-05 | Equipment: reach stacker(s), top-pick, empty handlers, forklifts, chassis pool seed | $3M–$6M | Used / refurbished reach stacker is a common Phase 1 cost saver; financing typical. |
| K-06 | Soft costs: A&E, civil, permits, legal, environmental, FTZ / bonded application, IT (TOS / WMS), startup working capital | 12–18% of hard costs | Includes contingency. |
| K-07 | Annual opex — labor (Year 1 baseline: ~18–25 FTEs across operations, dispatch, admin, security; scales to 45–60 by Year 3) | $1.6M–$2.4M Year 1 → $4.5M–$6.0M Year 3 | Iowa wage rates; confirm with IWD. |
| K-08 | Annual opex — equipment lease / fuel / maintenance, utilities, insurance, surety bond, property tax (post-abatement), software | $1.8M–$2.8M Year 1 → $3.5M–$4.5M Year 3 | Insurance and surety are non-trivial for a bonded operator. |

### Growth

| ID | Assumption | Draft trajectory | Notes |
|----|------------|------------------|-------|
| G-01 | Phase 1 (CY + transload) opens Month 9–12 post-closing; ramp to ~70% of Phase 1 utilization by Month 18. | Year 1 revenue: $3.5M–$5.5M | Carrier go-live cadence drives ramp. |
| G-02 | Phase 2 (standard warehouse) opens Month 18–24; ramps to 80% leased by Month 30. | Year 2 revenue: $7.5M–$11.0M | Pre-leasing memo required before breaking ground. |
| G-03 | Phase 3 (bonded warehouse + optional FTZ subzone) opens Month 24–30; ramps to anchor-tenant occupancy by Month 36. | Year 3 revenue: $12.0M–$17.0M | Customs approval lead time is the critical-path risk. |
| G-04 | Stabilized EBITDA margin: 28–35% by Year 4. | Year 4 EBITDA: $4.0M–$6.5M | Reflects mature CY utilization and stable bonded tenancy. |

## Review Notes

- All assumptions above are **DRAFT**. Record changes to major assumptions in `doc/DECISIONS.md`.
- Pause for human review before using unreviewed assumptions in investor-facing or external materials.
- Cross-reference: market evidence in `doc/MARKET_RESEARCH.md`, customer evidence in `doc/CUSTOMER_DISCOVERY.md`, competitive proxies in `doc/COMPETITIVE_LANDSCAPE.md`, and modeled financials in `doc/FINANCIAL_MODEL_NOTES.md`.
