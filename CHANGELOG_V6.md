# FolioSpace v6 — twelve options, four categories

## Template expansion

The catalog now has three options in each category:

- **Minimalist:** Alex's editorial profile, Eka's editing index, and Lintang's linked teaching notes.
- **Professional:** Jordan's operations case studies, Asha's engineering timeline, and Faris's repository-first profile.
- **Creative:** Sam's visual identity cases, Rafi's motion studies, and Mika's storyboard sequences.
- **Academic:** Maya's faculty profile, Sari's research notes, and Nabila's course-first lecturer profile.

The catalog filters by category; each card opens its own demo and detail page. Six designs are also previewed on the homepage.

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
