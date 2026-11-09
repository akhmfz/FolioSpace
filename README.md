# FolioSpace Website Starter v6

A static HTML, CSS, and vanilla JavaScript website for a personal portfolio website service.

## Pages
- `index.html` — FolioSpace homepage
- `templates.html` — twelve portfolio website examples, three per category
- `template.html?slug=minimalist|index|garden|professional|developer|opensource|creative|motion|storyboard|academic|scholar|lecturer` — example details and responsive preview

## Twelve website examples
- Minimalist — Alex Morgan, writer and content strategist
- Professional — Jordan Lee, business analyst
- Creative — Sam Rivera, independent designer
- Academic — Dr. Maya Pratama, researcher and lecturer
- Developer — Asha Rahman, frontend engineer
- Motion Designer — Rafi Santoso, motion designer and creative coder
- The Index — Eka Putri, bilingual editor
- The Notes Garden — Lintang Ardi, independent educator
- The Open-Source Builder — Faris Nugraha, software contributor
- The Storyboarder — Mika Purnama, storyboard artist
- The Research Garden — Sari Wibowo, graduate researcher
- The Lecturer — Dr. Nabila Hasan, lecturer

All profile names, institutions, employers, projects, and contact details are fictional sample content. Four profiles use original local SVG illustrations; the remaining pages use CSS layouts and original decorative artwork, not external photos. The gallery shows live examples for a custom-build service; it does not offer downloadable themes.

## Run locally
Build and validate a clean deployable copy with `python3 build.py`. Serve the generated `dist/` directory locally with `python3 -m http.server 4174 --directory dist`, then visit `http://127.0.0.1:4174/`.

## GitHub Pages
Prepare the public site in `docs/` with `python3 build.py --output docs`, push the repository, then select **Settings → Pages → Deploy from a branch → `main` / `/docs`**. `CNAME` binds `foliospace.akhmfz.my.id`; its DNS CNAME should point to `akhmfz.github.io`. The source tree and archive are not published by that setting.

## Configuration
Edit `assets/js/config.js` to update the WhatsApp number and social profile URL.

## Assets and build
Each page loads one editable CSS/JS source directly; there are no duplicate `.min` copies to drift out of sync. The standard-library build script copies only public pages, assets, and demos, validates local links/anchors, and runs `node --check` on JavaScript. It refuses to overwrite an existing output directory. `assets/css/catalog.css` contains the shared brand type, color, spacing, and control rules.

## Research and handoff
- `REFERENCE_RESEARCH.md` — source-derived findings, shortlist, and limitations of the provided reference list
- `references/portfolio-reference-database.csv` — structured 118-entry reference database
- `references/Portfolio-Ideas-Reference-List.txt` — original pasted source text
- `CHANGELOG_V4.md` — redesign summary
- `CHANGELOG_V5.md` / `CHANGELOG_V6.md` — source studies, twelve-example catalog, and copy updates
- `COPILOT_HANDOFF.md` — next QA and live-reference verification instructions
- `AUDIT.md` — UI/UX and implementation audit
- `DESIGN_SYSTEM.md` — shared brand rules and per-example baseline
- `references/open-source-adaptations.md` — exact GitHub references, license checks, and the design cues adapted for v5/v6

Google Fonts are optional; system font fallbacks remain available offline. Source-led layout adaptations use FolioSpace-authored code, copy, and artwork. Small credits and checked repository/license details are recorded in `references/open-source-adaptations.md`.
