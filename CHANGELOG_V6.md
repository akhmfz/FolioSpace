# FolioSpace v6 — twelve examples, four categories

## Template expansion

The catalog now has three examples in each category:

- **Minimalist:** Alex's editorial profile, Eka's editing index, and Lintang's linked teaching notes.
- **Professional:** Jordan's operations case studies, Asha's engineering timeline, and Faris's repository-first profile.
- **Creative:** Sam's visual identity cases, Rafi's motion studies, and Mika's storyboard sequences.
- **Academic:** Maya's faculty profile, Sari's research notes, and Nabila's course-first lecturer profile.

The catalog filters by category; each card opens its own demo and detail page. Six examples are also previewed on the homepage.

## Copy and sample-content cleanup

- Existing copy now names the work artifact, audience, or decision instead of relying on broad portfolio slogans.
- The business-analyst sample no longer displays an unlabeled made-up performance chart or implies results.
- The academic sample marks citation records as invented format examples, with no fabricated journal/page metadata.
- The writing sample is a static list of sample topics, not fake articles or reading-time links.
- All people, organizations, courses, and projects remain fictional and are disclosed as samples.

## Reference process

GitHub repositories and MIT license files were verified for the eight new examples. The references informed layout/content structure only; the v5/v6 FolioSpace HTML, copy, CSS artwork, and styles were authored for this project. See `references/open-source-adaptations.md` for repository revisions and caveats, especially where an author's repo is not the exact live site from the supplied list.

## QA

- Run `python3 build.py` and `python3 build.py --output docs`.
- Test all twelve catalog cards and category counts (3 each).
- Check all twelve detail/demo routes at 320, 390, 768, 1024, and 1440px; test filter/resize after render, keyboard access, contrast, local links, and console errors.

## Copy and layout pass (2026-11-08)

The homepage was rebuilt as a catalog-first page:

- Removed the tilted mockups, floating badge, phone mockup, trust strip, and duplicate showcase/quote blocks.
- The hero now states what the catalog is and links to one full demo; the remaining page covers content preparation, process, and FAQ.
- Brand lines such as "Your journey, your space" were replaced with service facts; footer notes now disclose that demo profiles are fictional.

The twelve demos were revised where the layout was the problem, not only the copy:

- Technical and academic samples (Index, Notes Garden, Open Source, Research Garden, Lecturer) use compact reading columns, full-width project/course rows, and open note entries instead of promotional cards and decorative badges.
- Original Editorial, Professional, Academic, Developer, and Storyboard samples use smaller, left-aligned headings and denser section spacing.
- Metaphor headlines ("Words for the next clear step", "Two problems, made legible") were replaced with section names readers can scan.
- Invented note counts ("3 notes") and decorative performance charts were removed.
- Italic accent treatment is now reserved for the creative samples; other pages use the same typeface and color for headings and emphasis.

## Source-led refinement (2026-11-08)

- **The Minimalist / Alex Morgan** now follows a more useful editorial homepage sequence: short profile, dated background timeline, recent notes, then selected projects. The structure was studied from Tania Rascia's current site and exact MIT repo; the page content and code remain FolioSpace's.
- **The Motion Designer / Rafi Santoso** now gives each project a separate offset color plane, adapted from the project-card treatment in Israel Mitolu's MIT portfolio repo. The sample artwork and implementation remain original.
- Both templates include a small footer credit. Exact source revisions and license metadata are recorded in `references/open-source-adaptations.md`.

## FolioSpace UI standard (2026-11-09)

- Renamed visitor-facing “Templates” to “Examples”; existing HTML routes remain unchanged. Catalog and detail pages state that the samples are not downloadable themes.
- Shared marketing pages use white surfaces, Archivo headings, DM Sans body text, one spacing/type scale, 44px control targets, and visible focus states.
- Removed repeated marketing eyebrows, duplicate footer notes, and technical-stack footer copy. Portfolio examples keep their own visual direction while sharing focus-visible, reduced-motion, and responsive basics.
- See `DESIGN_SYSTEM.md` for the standard used in future changes.

Shared layout overrides live in `assets/css/catalog.css` and `assets/css/demos/portfolio-layouts.css`.
