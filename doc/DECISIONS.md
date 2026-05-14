# Decisions

## Purpose

Record important project decisions and the reasoning behind them. Keep entries short and dated. Use this format:

- **Decision**: what you chose to do
- **Why**: the reasoning behind it
- **Alternatives considered**: what else you looked at (optional)
- **Status**: active / superseded / revisit by [date]

## 2026-05-14

### Internal deck rebuilt as a fact-based logistics market deck

- Decision: rebuild the internal deck around a fact-based logistics and niche-market map rather than the broader placeholder internal business-plan outline. The rendered deck is `web/internal/index.html`, with source outline in `presentations/internal/deck.md`.
- Why: the current planning need is not an investor pitch; it is an internal decision deck to test the rough site location, China-to-Midwest container flow, and the narrower niche hypothesis of off-dock CY + ag/feed transload first, bonded storage second.
- Alternatives considered: keep the original broad internal deck outline (too generic for the user's request); use the one-page report only (not a real deck); render investor-style pitch language (rejected because the request was internal research, not pitch).
- Status: active, pending Mr. Xu review.

## 2026-05-13

### Mobile-friendly web delivery via Vercel

- Decision: add a tracked `web/` static site (landing page, mobile-first deck theme in `web/styles/deck.css`, framework-free touch/keyboard navigation in `web/scripts/deck.js`, placeholder `web/investor/index.html` and `web/internal/index.html`) plus a `vercel.json` static deploy config at the repository root. The HTML-PPT skill renders each deck into `web/<track>/index.html`; offline exports continue to live in `reports/`.
- Why: presentations need to be readable on phones and shareable as a URL. Vercel offers zero-config static hosting and Git-based deploys, which keeps the template lightweight and portable.
- Alternatives considered: keeping rendered decks in `reports/` only (no mobile theme, gitignored — not deployable); introducing a Node build step with `package.json` (rejected because `package.json` is listed in `doctor.py`'s `REMOVED_PATHS` to keep the template language-light); GitHub Pages instead of Vercel (workable, but Vercel's preview deployments and per-PR URLs better fit the human-in-the-loop review workflow).
- Status: active

### Mobile-first deck authoring contract

- Decision: every deck rendered into `web/` must set a `width=device-width` viewport, use the `.deck` / `.deck__viewport` / `.slide` / `.slide__notes` / `.deck__nav` layout, use responsive units (`clamp()`, `vh`, `dvh`), and provide ≥ 44 × 44 px touch targets. The contract is documented in `web/README.md` and enforced by `scripts/doctor.py`.
- Why: business plans are now consumed on phones as often as laptops; without an enforced contract the rendered HTML drifts toward desktop-only layouts.
- Status: active

### Decks ship with `noindex` by default

- Decision: rendered decks include `<meta name="robots" content="noindex">` until a human review clears them for public sharing. Removing the tag is treated as an external-facing claim under the existing human review gates.
- Why: the template is investor- and reviewer-facing; we should not accidentally publish drafts to search engines just because a Vercel URL exists.
- Status: active

## 2026-03-29

### Stable template memory moved to `MEMORY.md`

- Decision: move the stable template and agent-memory guidance out of `README.md` and into `MEMORY.md`.
- Why: this keeps `README.md` lightweight and human-friendly while preserving a stable shared memory contract for assistants.
- Alternatives considered: keeping the stable section inside `README.md`, but that made the main project guide heavier and more confusing for new projects.
- Status: active

### README split into editable and stable sections

- Decision: make the top of `README.md` project-specific and human-facing, and keep a stable lower section for template memory and shared workflow rules.
- Why: new projects should be easy for people to customize without accidentally breaking the memory structure that assistants rely on.
- Alternatives considered: moving all stable instructions out of `README.md`, but keeping the stable section in the same file makes the boundary visible and easy to follow.
- Status: active

### README restructured for human readers

- Decision: rewrite README.md as a human-friendly project guide; move agent/memory system details out of the README.
- Why: the old README was written for AI assistants. Humans reading the repo need to understand the research workflow, directory layout, and how to track progress — not the memory system architecture.
- Alternatives considered: creating a separate MEMORY.md index file, but the existing `AGENTS.md` + `CLAUDE.md` + `.github/copilot-instructions.md` already serve that role.
- Status: active

### Dashboard prioritizes research tracking over agent config

- Decision: reorder the project website navigation to lead with Status, Decisions, and Daily Log; move Agent Rules to the end.
- Why: human researchers visiting the site care about project state and decisions first, not agent configuration.
- Status: active

### Durable memory stays in the repository

- Decision: use tracked Markdown files as the main project memory layer.
- Why: repository memory is portable across Copilot, Claude Code, Codex, GitHub, and local workflows.

### Shared instruction file is `AGENTS.md`

- Decision: use `AGENTS.md` as the cross-tool source of truth and keep thin adapter files for individual assistants.
- Why: this keeps conventions synchronized and reduces duplication.

### Research-first coding defaults

- Decision: prefer R and Python, with `.Rmd` as the default literate analysis format and `.ipynb` when interactive Python work is appropriate.
- Why: this supports reproducible research while fitting common lab workflows.
- Status: superseded by the 2026-05-13 business planning workflow.

### Large-file rule

- Decision: files larger than 100 MB should not be kept in `data/` or committed to Git. They belong in `largedata/`.
- Why: this keeps the repository lightweight, copyable, and aligned with Git hosting limits and good project hygiene.
- Status: superseded by the 2026-05-13 business planning layout; the 100 MB tracked-file limit remains active, but `data/` and `largedata/` are no longer template directories.

### HCC large-data caveat

- Decision: treat `largedata/` as working storage that fits HCC usage, not as the only copy of important large files.
- Why: inactive large files on HCC may be purged after about three months, so durable raw data should also live in a safer long-term location.
- Status: superseded by the 2026-05-13 business planning workflow.

### HCC workflow is explicit

- Decision: keep cluster execution details in dedicated Slurm scripts and preserve logs separately.
- Why: this improves reproducibility, debugging, and handoff between local and cluster execution.
- Status: superseded by the 2026-05-13 business planning workflow.

## 2026-04-01

### Slurm jobs must self-check runtime and avoid head-node compute

- Decision: add a starter Slurm template that reports whether it is running locally or in a remote Slurm job, refuses to do compute work without a Slurm allocation, and verifies module setup before execution.
- Why: this makes the "do not run heavy work on the HCC head/login node" rule executable rather than just documented, while giving future projects a safer default job wrapper.
- Alternatives considered: documenting the rule only in Markdown, but that leaves too much room for accidental misuse.
- Status: superseded by the 2026-05-13 business planning workflow.

### Slurm wrappers should stay thin

- Decision: keep Slurm job files minimal and prefer a one-line handoff to the real Bash, Python, R, or other compute script.
- Why: this keeps resource requests and execution environment separate from scientific logic, which improves reproducibility, debugging, and reuse across local and HCC runs.
- Alternatives considered: embedding more analysis logic directly in the Slurm script, but that makes jobs harder to test and maintain.
- Status: superseded by the 2026-05-13 business planning workflow.

## 2026-04-02

### HCC software discovery order is standardized

- Decision: require HCC work to verify runtime first, obtain a compute-node allocation before doing compute work, check system-wide software with `module avail`, record the exact loaded module version, and only then fall back to `$HOME/bin` if the software is not provided by modules.
- Why: this creates a predictable order for environment setup, reduces accidental login-node work, and makes software provenance easier to reproduce across local, interactive, and batch runs.
- Alternatives considered: relying on ad hoc shell habits or checking `$PATH` first, but that makes HCC behavior less reproducible and easier to mis-document.
- Status: superseded by the 2026-05-13 business planning workflow.

## 2026-05-10

### `.Rmd` is the default literate workflow

- Decision: use `.Rmd` as the default reproducible analysis format for future projects created from this template.
- Why: the lab workflow already favors R for statistical analysis and reporting, and one default reduces startup ambiguity for humans and AI assistants.
- Alternatives considered: defaulting to `.qmd` or a mixed `.Rmd`/`.qmd` workflow, but that adds a format choice before a new project has real analysis needs.
- Status: superseded by the 2026-05-13 business planning workflow.

### `slurm-scripts/` remains the HCC script directory

- Decision: keep the directory name `slurm-scripts/`.
- Why: it is explicit, already documented across the template, and avoids a broad rename with little practical benefit.
- Alternatives considered: renaming it to `slurm/`, but the shorter name is less descriptive.
- Status: superseded by the 2026-05-13 business planning workflow.

### Minimum project metadata is standardized

- Decision: require README metadata fields for principal investigator or project lead, biological system or study domain, data owner or steward, compute environment, expected deliverables, and review status.
- Why: these fields give humans and AI assistants enough shared context to start work without over-specifying project-specific details.
- Alternatives considered: a larger metadata schema, but that would make project startup heavier than needed.
- Status: superseded by the 2026-05-13 business planning metadata.

## 2026-05-13 (Xu Logistics Center project kickoff)

### Initialize the first business plan from the template — Xu Logistics Center

- Decision: use this repository to develop the business plan for **Xu Logistics Center**, a 21-acre inland container yard, transloading, and warehouse (standard + bonded) facility along I-29 near Bunge Avenue, on the east side of the Missouri River, opposite Omaha, NE. README and `doc/` planning files populated as DRAFT v0.1.
- Why: Mr. Xu has a 21-acre site, 40+ years of ocean freight experience, and 7 years of trucking operations. The intersection of those three assets and an inland intermodal location adjacent to Bunge and UP's Council Bluffs Yard fits the carrier-neutral, multi-service inland-gateway thesis.
- Alternatives considered: scoping a single-line CY-only business (rejected because the bonded and warehouse upside is the highest-margin layer and Mr. Xu has the customer pipeline for it); scoping a warehouse-only play (rejected because it forfeits the empty-container imbalance opportunity and the ocean-freight pedigree).
- Status: active.

### Treat the site as Council Bluffs, Iowa, not Omaha, Nebraska

- Decision: write the plan with the site located in **Council Bluffs, Pottawattamie County, Iowa**, and apply Iowa state tax, zoning, and incentive frameworks throughout. The description "east of Omaha, NE near Bunge Avenue along Interstate 29" is geographically on the Iowa side of the Missouri River; Bunge Avenue serves Bunge's CB soybean complex.
- Why: state of record drives property tax, incentive eligibility (IEDA, HQJP, Urban Revitalization Plan vs. Nebraska Advantage Act), highway access (IDOT), environmental regulator (Iowa DNR), and labor authority (IWD). Getting this wrong cascades into the financial model and the regulatory timeline.
- Alternatives considered: treating the site as Nebraska (only correct if the parcel is actually west of the river, which would conflict with the Bunge Avenue / I-29 reference). Flagged for Mr. Xu's confirmation.
- Status: active, pending Mr. Xu confirmation.

### Phased buildout — CY → standard warehouse → bonded warehouse

- Decision: structure the project as Phase 1 (CY + transload + initial equipment), Phase 2 (standard warehouse), Phase 3 (bonded warehouse with optional FTZ subzone), with Phase 4 reserved for heavy M&R / reefer expansion.
- Why: phasing matches both capital efficiency (cash flow from CY funds part of Phase 2) and regulatory critical path (CBP application can run in parallel with Phase 2 construction).
- Alternatives considered: single Phase 1 ribbon-cutting of all four service lines (rejected — concentrates capex risk and forces simultaneous customer ramps); CY-only build with no warehouse (rejected — leaves the highest-margin segment on the table).
- Status: active.

### Pricing, capex, opex, and forecasts are DRAFT until Mr. Xu, CPA, engineer, and customs broker review

- Decision: every number in the planning documents carries a DRAFT marker and is excluded from external use until the six approvals listed at the bottom of `doc/BUSINESS_PLAN.md` are logged here.
- Why: this is a human-in-the-loop business plan; investor-facing claims require professional review.
- Status: active.

## 2026-05-13

### Repurpose template from research to business planning

- Decision: refactor this repository from a human-in-the-loop research coding template into a human-in-the-loop business plan template. Plan recorded in `doc/BUSINESS_PLAN_TEMPLATE_REFACTOR_PLAN.md`.
- Why: the durable project-memory workflow generalizes well beyond research, and the lab needs a business-planning starter that preserves the same assumption-tracking and human-review gates. Pivoting the template is cheaper than maintaining two parallel scaffolds.
- Alternatives considered: forking into a separate `busplan-template` repo, but that would duplicate the memory contract and diverge over time; or layering business-template scaffolding on top of the research template, but that leaves HCC/Slurm/R-research surface area in place to confuse business-plan users.
- Status: active. Pre-existing research workflow decisions above were flipped to superseded as part of the refactor implementation.

### Source deck folder is `presentations/`

- Decision: store source decks under `presentations/`, not `deck/`.
- Why: the template ships two parallel decks (investor and internal); the plural name makes the multi-deck structure obvious from the directory listing.
- Alternatives considered: `deck/` (shorter, but implies a single primary deck).
- Status: active

### Drop the Node memory dashboard from the template

- Decision: remove `server.js`, `site/`, `package.json`, and `package-lock.json` from the business-plan template. Memory files stay browsable as Markdown.
- Why: the dashboard added a Node runtime dependency for a feature that mostly duplicated what reading the Markdown files already provides, and removing it keeps the template lean for non-engineer users.
- Alternatives considered: keeping the dashboard repurposed for business memory; or keeping it as an opt-in subfolder. Both add maintenance surface for marginal benefit in a planning-focused template.
- Status: active

### Retain Python utilities broadly

- Decision: keep Python in scope for the business-plan template. `scripts/log_commit.py` and `scripts/doctor.py` stay, and `requirements.txt` is retained as a real dependency manifest for financial-model checks and data cleaning.
- Why: financial models, market-data cleaning, and template health checks benefit from real Python, and the lab already has Python familiarity. A reservation for future helpers is cheaper than re-introducing Python later.
- Alternatives considered: keeping only the commit logger and doctor with no `requirements.txt`; or removing Python entirely in favor of shell or Node. Both close off financial-modeling automation we expect to want.
- Status: active

### Ship parallel investor and internal decks

- Decision: the default reporting output is two parallel deck tracks: `presentations/investor/` (pitch deck) and `presentations/internal/` (full internal business plan), sharing tokens and themes from the HTML-PPT skill but with separate narratives.
- Why: the same business plan needs both an external 10-slide investor narrative and a longer internal working document; users almost always want both eventually, and shipping them as parallel tracks from day one prevents one track from becoming an afterthought.
- Alternatives considered: investor pitch deck only (forces an internal-plan retrofit later); full internal plan only (no fundraising path); customer-discovery report only (only fits pre-product cases).
- Status: active

### Assume `html-ppt-skill` installed at the Claude Code user level

- Decision: the template assumes the `html-ppt-skill` Claude Code skill is already installed at the user level. The template does not vendor the skill and does not run an install step; the README points users to the skill's own install instructions.
- Why: vendoring duplicates the skill and creates a sync burden; an explicit npx install step adds a setup gate before a user can render anything. Assuming the skill is preinstalled keeps the template thin and lets the skill's own repo own its lifecycle.
- Alternatives considered: vendoring the skill's templates into the repo, or documenting an npx install command. Either could be revisited if the skill becomes unstable or if users routinely arrive without it.
- Status: active

### Placeholder folders carry sibling READMEs, not `.gitkeep`

- Decision: keep `assets/`, `inputs/`, and `models/` as placeholder folders, each documented by a sibling `README.md` describing its purpose (assets = deck imagery and brand assets; inputs = raw interview transcripts and market reports; models = financial spreadsheets).
- Why: empty `.gitkeep` folders accrete no usage signal; a one-paragraph README tells the next user what belongs in each folder and prevents them from sprawling into ambiguous catch-alls.
- Alternatives considered: collapsing `assets/` into `presentations/` (loses cross-deck reuse); dropping placeholders entirely (loses the convention).
- Status: active

### Keep refactor plan as a worked historical example

- Decision: once the refactor lands, leave `doc/BUSINESS_PLAN_TEMPLATE_REFACTOR_PLAN.md` in `doc/` with a "historical" banner at the top. Do not move to an archive folder, do not delete.
- Why: the plan is useful as a meta-example of how to plan a destructive refactor inside this template's memory contract, and it documents how the eight decisions were reached.
- Alternatives considered: moving to `doc/archive/` (creates a new folder for a single file); deleting in favor of git history (loses discoverability for future template users).
- Status: active

### Refactor work happens directly on `main` with staged commits

- Decision: execute the refactor on `main` as a sequence of staged commits (create new structure → rewrite docs → delete old → tooling → validate), not on a feature branch with a PR.
- Why: this is a solo template repo with no review pipeline; the destructive deletion step gets its review at the working-tree level (step 9 of the Implementation Order) rather than via PR. Direct commits keep the daily-log pairing simple.
- Alternatives considered: a `refactor/business-plan-template` branch with a PR for the review gate. Would be the right call in a multi-contributor repo; overkill here.
- Status: active
