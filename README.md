# FolioSpace Website Starter v4

A static HTML, CSS, and vanilla JavaScript website for a personal portfolio website service.

## Pages
- `index.html` — FolioSpace homepage
- `templates.html` — four complete portfolio sample websites with live iframe previews
- `template.html?slug=minimalist|professional|creative|academic` — template detail and responsive live preview

## Four sample websites
- Minimalist — Alex Morgan, writer and content strategist
- Professional — Jordan Lee, business analyst
- Creative — Sam Rivera, independent designer
- Academic — Dr. Maya Pratama, researcher and lecturer

All profile names, institutions, employers, projects, and contact details are fictional sample content. Portraits are original local SVG illustrations; they do not depict the fictional profiles.

## Run locally
Build and validate a clean deployable copy with `python3 build.py`. Serve the generated `dist/` directory locally with `python3 -m http.server 4174 --directory dist`, then visit `http://127.0.0.1:4174/`.

## GitHub Pages
Prepare the public site in `docs/` with `python3 build.py --output docs`, push the repository, then select **Settings → Pages → Deploy from a branch → `main` / `/docs`**. The source tree and archive are not published by that setting.

## Configuration
Edit `assets/js/config.js` to update the WhatsApp number and social profile URL.

## Assets and build
Each page loads one editable CSS/JS source directly; there are no duplicate `.min` copies to drift out of sync. The standard-library build script copies only public pages, assets, and demos, validates local links/anchors, and runs `node --check` on JavaScript. It refuses to overwrite an existing output directory.

## Research and handoff
- `REFERENCE_RESEARCH.md` — source-derived findings, shortlist, and limitations of the provided reference list
- `references/portfolio-reference-database.csv` — structured 118-entry reference database
- `references/Portfolio-Ideas-Reference-List.txt` — original pasted source text
- `CHANGELOG_V4.md` — redesign summary
- `COPILOT_HANDOFF.md` — next QA and live-reference verification instructions
- `AUDIT.md` — UI/UX and implementation audit

Google Fonts are optional; system font fallbacks remain available offline. No upstream portfolio code was copied in this version. Verify exact repositories and licenses before adapting any reference source.
