# FolioSpace v3 changes

## What changed

- Replaced the abstract SVG mockup previews in the homepage/catalog/detail flow with live iframe previews of the actual demo websites.
- Rebuilt all four demo pages around fictional but coherent personal profiles and fuller content.
- Added portrait and project photography using Unsplash image CDN URLs.
- Removed the visible FolioSpace concept/demo banners from the portfolio websites so they read as personal sites owned by individual people.
- Added desktop/tablet/mobile preview controls to the template detail page.
- Updated the catalog copy, template descriptions, README, and Copilot handoff.
- Added `OPEN_SOURCE_REFERENCE.md` so Copilot can inspect the user-provided open-source gallery, verify licenses, and adapt suitable examples when external access is available.

## Important limitation

The reference URL could not be fetched during this editing session. This update is based on the user's explicit direction and the existing FolioSpace source, not on verified source code from the reference gallery. Copilot should complete that source/license review before integrating any upstream template code.

## Validation performed

- JavaScript syntax checks passed with `node --check`.
- Template data loaded and contains exactly four demo entries.
- All seven HTML pages parsed.
- All five CSS files parsed without syntax errors.
- All local `href` and `src` references checked; no missing local files were found.
- Browser visual QA remains to be completed in VS Code Live Server. External Unsplash imagery requires internet access.
