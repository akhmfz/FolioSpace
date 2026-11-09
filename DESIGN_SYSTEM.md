# FolioSpace UI standard

FolioSpace builds custom portfolio websites. The twelve pages in the gallery are **examples**, not downloadable themes. The main site should say that clearly and help a visitor choose a direction.

## Shared marketing UI

- **Type roles:** DM Sans for body/UI and Archivo for display headings. Body 16px / 1.65; lead 18px; section headings 28–40px; hero headings scale with the viewport. Use sentence case. Let headings wrap naturally instead of inserting decorative line breaks or an italicized last word.
- **Layout:** content max 1200px; one responsive gutter token; section spacing uses `--section-space`. Keep one dominant CTA, left-aligned copy, and a readable line length. Use the live examples as the visual proof.
- **Color:** white surface, dark ink, FolioSpace green as the single brand accent, sage-gray for secondary surfaces, visible borders. Text contrast must pass WCAG AA. Sample sites keep their own deliberate palettes.
- **Controls:** minimum 44px targets and a shared 3px radius for filters, preview controls, and primary buttons; visible keyboard focus; reduced-motion support. No hover-only information.
- **Copy:** say what the visitor sees and what FolioSpace will build. Use “Examples,” “Open demo,” and “Ask for a quote.” Don't imply the example is a ready-to-download theme.

Tokens and marketing-page overrides live in `assets/css/catalog.css`; use them on `index.html`, `templates.html`, and `template.html`.

## Portfolio examples

The examples should not collapse into one reskinned layout. Keep each profession's information hierarchy and source-informed art direction, but share the baseline for readability, mobile reflow, contrast, keyboard access, and honest sample content.

- Replace generic slogans with a role, project, field, deliverable, or section name.
- Keep invented people, institutions, dates, outcomes, repositories, and citations clearly marked as fictional. Never show fake metrics, clients, publications, testimonials, or links as real.
- Use an eyebrow/label only when it carries navigation or project metadata. Remove decorative section numbers and labels that repeat the heading.
- A source adaptation names the exact repo, license, revision, and pattern studied; the demo footer gives a small credit. If code/assets are copied, include the required license notice in the published output. If only the visual structure was studied, state that no code/assets were reused.

Shared responsive/accessibility overrides for examples live in `assets/css/demos/portfolio-layouts.css`; individual example stylesheets retain their own visual direction.

## QA baseline

Run `python3 build.py` and `python3 build.py --output docs`. Check marketing routes, every example/detail page, and category filters at 320, 390, 768, 1024, and 1440px. Verify no horizontal overflow, missing in-page targets, preview scaling problems, contrast failures, keyboard-focus gaps, or console errors. Inspect at least one desktop and one mobile screenshot after any layout change.
