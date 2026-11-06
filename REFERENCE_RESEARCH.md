# FolioSpace — Reference Research Notes

## Scope and evidence

This review uses the user-provided `Pasted text.txt` reference list and the current FolioSpace v3 source. The pasted list contains **118 portfolio entries** in the copied section, not the 200+ entries mentioned in the pasted text's introduction. The source categories are: Professional 66, Creative 30, Minimalist 18, Academic 4.

The list provides author names, live URLs, a repo column represented mostly by GitHub account names or `None`, tech-stack text, and a category. It does **not** provide exact repository URLs for every entry, repository-level license details, screenshots, or design annotations. The live sites and GitHub repositories were not reachable from this editing environment, so no current visual state, source code, or license has been verified in this pass.

Important: a GitHub profile link is not an exact source repository. A public repository is not automatically open source; do not copy code or assets until the exact repository and its license are checked. This v4 is an original implementation informed by the broad category and technology metadata, not a copy of any named portfolio.

## Source-derived signals

- Professional is the largest category in the supplied excerpt (66 entries), followed by Creative (30), Minimalist (18), and Academic (4).
- Common stack terms in the 118 rows include JavaScript (75), CSS (50), React (50), HTML (40), Next.js (33), Tailwind (30), and GSAP (17). These are simple text matches in the supplied stack column and can overlap.
- Minimalist examples include Max Böck (`mxb.dev`, Eleventy/SCSS/Nunjucks), Jemima Abu (`jemimaabu.com`, HTML/CSS/JS), Tania Rascia (`taniarascia.com`, React/Gatsby/CSS), Anthony Fu (`antfu.me`, Vue/Markdown/TS/CSS/HTML), and Timothy Lin (`timlrx.com`, Next.js/MDX/Tailwind).
- Professional examples include Kent C. Dodds (`kentcdodds.com`, React/TS/Remix), Lee Robinson (`leerob.io`, Next.js/MDX and related tools), Braydon Coyer (`braydoncoyer.dev`, React/Next.js/Tailwind), and Jason Lengstorf (`jason.energy`, JS/TS/Nunjucks/CSS).
- Creative examples include Bruno Simon (`bruno-simon.com`, GSAP/Three.js/JS), Dennis Snellenberg (`dennissnellenberg.com`, GSAP/jQuery/PHP/Vue), George Francis (`georgefrancis.dev`, GSAP/HTML/CSS/JS), Rafael Conde (`rafa.design`, Nunjucks/JS/CSS), and Adeola Adeoti (`adeolaadeoti.site`, TS/GSAP/Next.js/SCSS).
- Academic examples in the supplied excerpt are Aditya Vikram (`people.umass.edu/avsingh`), Tri Dang (`tri-dang.github.io`, Jekyll/Markdown), Jacob Valdez (`jacobfv.github.io`, Jekyll), and Maggie Appleton (`maggieappleton.com`, React/Next.js/MDX/Framer Motion). The category is small and heterogeneous; Maggie Appleton is a knowledge-sharing/digital-garden style reference rather than a conventional faculty CV.

## Design decisions for the four FolioSpace demos

### 01 — The Minimalist / Alex Morgan

**Direction:** text-first editorial personal website.

**Design inference:** the static-site and Markdown-oriented examples in this category suggest a content-led structure. The new demo uses a restrained header, a clear introduction, a small portrait, current-focus note, project rows with context, a writing index, and a short biography. It deliberately avoids a generic card grid and dashboard UI.

### 02 — The Professional / Jordan Lee

**Direction:** recruiter-friendly professional profile with evidence-led case studies.

**Design inference:** the larger professional category and common React/Next/Tailwind stacks point toward polished, scan-friendly sites. The new demo uses a concise value proposition, experience history, case studies, education, and skills. It avoids decorative KPI tiles and an app-dashboard appearance; outcomes are described in context.

### 03 — The Creative / Sam Rivera

**Direction:** work-first art-directed showcase.

**Design inference:** the creative subset includes several GSAP and Three.js stacks. Rather than adding heavy 3D by default, the new demo uses bespoke CSS project compositions, strong typography, asymmetry, and a dark canvas. This keeps the visual identity distinctive while remaining lightweight and accessible.

### 04 — The Academic / Dr. Maya Pratama

**Direction:** scholarly profile with publication-first information hierarchy.

**Design inference:** the academic subset is small. The new demo uses the conventional information needs implied by the examples: appointment, research themes, publication bibliography, teaching, and correspondence. It avoids fabricated DOI identifiers and avoids presenting a fictional university affiliation as a real institution.

## Implementation constraints

- The four demo pages retain separate HTML and separate stylesheets.
- The homepage and catalog continue to embed the real demo pages in iframes.
- The current static HTML/CSS/vanilla-JS architecture is preserved; no framework migration is required.
- Portrait images remain remote Unsplash images in this draft. Replace with approved local portraits before production, and verify image licensing and availability.
- Project art in the Creative and other demos is authored in HTML/CSS rather than copied from a portfolio source.
- All names, institutions, employers, projects, and contact addresses in the demos are fictional sample content.

## Next live research pass

When network access is available:

1. Open each shortlisted live URL and capture desktop/mobile screenshots.
2. Find the exact repository linked by the reference page, not merely the author's GitHub profile.
3. Verify the repository license and required attribution.
4. Record which specific layout patterns are worth learning from.
5. Compare each pattern with the v4 demo and make a deliberate adaptation only where it improves the result.
