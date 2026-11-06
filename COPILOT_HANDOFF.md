# FolioSpace v4 — Copilot Handoff

## Goal

FolioSpace offers personal portfolio websites. The four demo links must open complete sample websites that feel like they belong to four different people. They are not component showcases or abstract AI mockups.

## Read first

1. `REFERENCE_RESEARCH.md` — summarizes the 118-row user-provided Portfolio Ideas excerpt, reference shortlist, source limitations, and design rationale.
2. `CHANGELOG_V4.md` — summarizes the four redesigns.

The pasted reference list contains author names, live URLs, categories, stack metadata, and GitHub profile handles in many rows. It does not provide exact repository URLs and licenses for every entry. Do not treat a public GitHub profile or repository as proof of an open-source license. When internet access is available, open the original gallery, inspect each live example, locate the exact repository, and verify its license before adapting code.

## Four demos

| Demo | Fictional owner | Design direction |
|---|---|---|
| Minimalist | Alex Morgan, writer / content strategist | Text-first editorial personal website |
| Professional | Jordan Lee, business analyst | Recruiter-friendly profile and evidence-led case studies |
| Creative | Sam Rivera, independent designer | Work-first art-directed showcase with custom CSS project artwork |
| Academic | Dr. Maya Pratama, researcher / lecturer | Scholarly profile with publication-first hierarchy |

## Key files

- `index.html` — homepage and featured template cards
- `templates.html` — catalog and filters
- `template.html` — template detail page with live iframe preview
- `assets/js/data.js` — four template descriptions and metadata
- `assets/js/home.js` — homepage cards
- `assets/js/templates.js` — catalog cards and filters
- `assets/js/template-detail.js` — detail preview and viewport controls
- `demos/<slug>/index.html` — each independent sample website
- `assets/css/demos/<slug>.css` — each independent design system

## Non-negotiables

- Keep the four layouts structurally distinct; do not merge them into one generic layout with color changes.
- Keep the homepage and catalog live iframe previews pointing to the real demo pages.
- Do not add a FolioSpace concept banner inside the personal portfolio demos.
- Keep content consistent with each fictional person and use believable, restrained sample details.
- Avoid fake metrics, fabricated DOI identifiers, or links that pretend to be working downloads.
- Replace remote Unsplash portrait images with customer-approved/licensed local assets before production.
- Preserve the current static HTML/CSS/vanilla-JS architecture unless the project owner approves a migration.
- Do not change WhatsApp configuration or unrelated marketing-site flows without approval.

## QA

1. Run `node --check` for every file in `assets/js`.
2. Open `index.html`, `templates.html`, and `template.html?slug=minimalist` through Live Server.
3. Confirm each catalog card previews the correct real demo.
4. Test all four demos at approximately 1440px, 1024px, 768px, and 390px.
5. Check keyboard navigation, contrast, image alt text, and reduced-motion behavior.
6. Verify all local links and email links.
7. When network access is available, inspect shortlisted reference websites and verify exact repositories/licenses before adapting anything upstream.
