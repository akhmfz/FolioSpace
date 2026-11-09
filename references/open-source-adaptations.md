# FolioSpace v5/v6 — open-source design studies

Checked 2026-11-09. The supplied CSV mostly provides GitHub handles, not exact repositories or licenses. The list below records exact repository/license checks for the source-informed demos and later refinements. It does not imply that every CSV entry is open source.

## Sources and what we observed

| FolioSpace sample | Reference from supplied list | Exact repository / revision | License | Design cue studied |
|---|---|---|---|---|
| Developer — Asha Rahman | Brittany Chiang, `v4.brittanychiang.com` | [bchiang7/v4](https://github.com/bchiang7/v4), `539cef0bf60cad438499a69d76dba2c27cc16c9a` (`main`) | MIT | Numbered section index, clear typography, work/experience sequence |
| Motion Designer — Rafi Santoso | Israel Mitolu, `mitolu.dev` | [israelmitolu/premier-portfolio](https://github.com/israelmitolu/premier-portfolio), `ffa22e0c5d5a362c5a8b2ea0ce29cc15895c2f18` (`main`) | MIT | Framed canvas, expressive type, vivid accents, and offset color planes on the project cards |
| Index — Eka Putri | Max Böck, `mxb.dev` | [maxboeck/mxb-jekyll](https://github.com/maxboeck/mxb-jekyll), `89fcc3646e33e742061f079635281eac1c30e989` (`master`) | MIT | Sparse nav, compact index, writing/project scan path |
| Notes Garden — Lintang Ardi | Anthony Fu, `antfu.me` | [antfu/antfu.me](https://github.com/antfu/antfu.me), `0be14a9ef6fdad5ccaf72010e8e1fed508920102` (`main`) | MIT code; site content separately CC BY-NC-SA 4.0 | Compact profile sections and a curated set of interests/projects |
| Open-Source Builder — Faris Nugraha | Arifszn, `arifszn.github.io/gitprofile` | [arifszn/gitprofile](https://github.com/arifszn/gitprofile), `0e58cd05cc68a1295694fc2003cf282c08c8f781` (`main`) | MIT | Repository-oriented project grouping |
| Storyboarder — Mika Purnama | Bruno Simon, `bruno-simon.com` | [brunosimon/belkun_portfolio](https://github.com/brunosimon/belkun_portfolio), `6b3fc8c1fb9496cc1b6347e2fc7ee5f49d4e3638` (`main`) | MIT | Narrative sequence and experimental presentation |
| Research Garden — Sari Wibowo | Maggie Appleton, `maggieappleton.com` | [MaggieAppleton/digital-gardeners](https://github.com/MaggieAppleton/digital-gardeners), `5bdd8509dc6e142a889d3343c8f8e1af674f287a` (`main`) | MIT | Topic-linked notes instead of date-only chronology |
| Lecturer — Dr. Nabila Hasan | Anthony Fu, `antfu.me` | Same `antfu/antfu.me` revision above | MIT code; site content separately CC BY-NC-SA 4.0 | Compact grouping of work, talks, and profile sections |
| The Minimalist — Alex Morgan (refined) | Tania Rascia, `taniarascia.com` | [TaniaRascia/taniarascia.com](https://github.com/TaniaRascia/taniarascia.com), `eb61b7f11a2d32dac73db123fd072b9e6a3641e7` (`master`) | MIT | Short bio → dated personal timeline → recent writing → selected projects; compact navigation |

## Important source boundaries

- `maxboeck/mxb-jekyll` is an older personal-site version whose README names `mxb.at`; it is not verified as the source for the current `mxb.dev` site.
- `MaggieAppleton/digital-gardeners` is a resource directory about digital gardening, not the source repository for `maggieappleton.com`.
- `brunosimon/belkun_portfolio` is Bruno Simon's first-year portfolio experiment, not the source for his current `bruno-simon.com` site. Its README notes unfinished interaction work. FolioSpace uses only the narrative-pacing cue.
- The GitProfile sample uses fictional repository names and does not call GitHub or claim real stars, downloads, or contributions.
- The academic samples use fictional records. They contain no fabricated DOI, journal/page data, or claimed research results.

## FolioSpace modifications

All twelve demos use FolioSpace-authored HTML/CSS and sample copy. The source-inspired updates for Alex and Rafi adapt specific page structures: Alex's page groups a short profile, dated timeline, recent notes, and selected projects; Rafi's cards use separate offset color planes behind each project. These are visual/layout adaptations, not copied code, posts, photos, logos, or assets. MIT licenses were checked from each repository's `LICENSE` file/API metadata; small source credits appear in the relevant footers.

- **The Minimalist — Alex Morgan:** [TaniaRascia/taniarascia.com](https://github.com/TaniaRascia/taniarascia.com), exact current-site repository, MIT, revision `eb61b7f11a2d32dac73db123fd072b9e6a3641e7` (`master`, latest checked commit 2026-08-18). Studied homepage sequence: short introduction, personal timeline, recent writing, and project index. FolioSpace keeps Alex's fictional profile and content, and uses its own HTML/CSS. Footer credit links directly to Tania's repository/site.
- **The Motion Designer — Rafi Santoso:** [israelmitolu/premier-portfolio](https://github.com/israelmitolu/premier-portfolio), linked from the referenced `mitolu.dev`, MIT, revision `ffa22e0c5d5a362c5a8b2ea0ce29cc15895c2f18`. The project grid's staggered offset color backing informed Rafi's own project cards. CSS artwork, card markup, palette, and descriptions are original; footer credit links to the repository.

The v6 pages add two minimalist, one professional, one creative, and two academic choices so the catalog has three options in each category. Remaining CSV handles still need exact repository and license checks before any further source-based adaptation.
