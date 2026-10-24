# Sofiene Zayati — Engineering Portfolio

A responsive portfolio positioning Sofiene as a full-stack developer with an embedded-systems foundation. It presents professional, academic, and personal work through scope-aware engineering case studies.

## Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4 plus a small custom design system
- Framer Motion for reduced-motion-aware transitions
- React Router for project case-study routes
- Formspree for the contact form

## Local development

```bash
npm install
npm run dev
```

The development server prints the local URL in the terminal.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run validate:content
npm run build
```

`npm run preview` serves the production build locally.

## Content structure

- `src/data/projects.ts` — project summaries, links, and preview images
- `src/data/projectContent.ts` — detailed case-study content
- `src/data/experience.ts` — education and work history
- `src/data/profile.ts` — contact details, positioning, and languages
- `public/images/projects` — project media

`npm run validate:content` checks project/case-study parity, sitemap coverage, duplicate IDs, featured selections, experience links, and referenced project assets. `npm run build` also validates the production assets after pruning, including encoded download filenames.

The homepage presents six selected projects with a searchable archive of all 22. Three engineering-focus links lead directly to the LeadX, Prigado, and MacroPark system sections; a recent-case-study link surfaces OliveTrace. Presentation styles live in `src/portfolio.css`; global styles and system diagrams live in `src/index.css`, and case-study layouts live in `src/case-studies.css`. See `PORTFOLIO_REVIEW.md` for the design and content review, verification, and remaining content opportunities.

The site is configured for deployment at [sofienezayati.tn](https://sofienezayati.tn).

## CV

`public/cv.html` is the editable source for the two-page English CV. The owner chose to retain the original two-page version on 24 October 2026. Run `npm run generate:cv` to render it with local Microsoft Edge and rebuild the portfolio with the updated download. The generator reads the current source directly, checks both A4 pages for height and horizontal overflow in print mode, and emits a tagged PDF at `public/Sofiene_Zayati_CV.pdf` plus a local copy and per-page previews in the ignored `output/pdf` directory. Inspect the rendered PDF after content changes; successful generation alone is not a visual review.

## OliveTrace team case study

`/project/olivetrace` describes Sofiene's Producer/Farm module within the five-person university project. Ownership is grounded in the application's `docs/sofiene-production.md`: shared authentication, layouts, infrastructure, and other supply-chain modules are explicitly credited as team work. The case study does not claim public deployment.

The four WebP screenshots were captured on 23 October 2026 from the local Laravel application using its documented Producer Demo account and existing fictional farms/activities. The saved-advice view shows an existing report; no AI request, farm edit, or activity submission was made during capture. All four images retain their genuine interface content and have captions identifying demonstration data. The code-native system diagram separates the Producer/Farm domain, reviewed AI workflow, and adjacent team modules.

## MacroPark Experience — work in progress

Present MacroPark Experience as **work in progress**, with a public 3D preview. Its homepage card and case study use that status, describe the current preview scope, and identify the next refinement and validation work.

The featured `/project/macroparkexperience` case study links to [MacroPark on Vercel](https://macropark-web.vercel.app/). It occupies the second large selected-work position, alongside the existing client-product showcases. The entry covers the current architectural models, attributed concept car, orbit inspection, independent parking plans, adaptive rendering, and project-brief export. The underlying embedded/mobile system remains a separate case study, with links in both directions.

The eight WebP screenshots under `public/images/projects/macropark-experience` were captured from the public production experience on 2026-10-23. The brief contains a sample parking plan and empty optional personal fields. The gallery includes the Home planner, villa inspection, place chooser, Residence, Retail, charging with solar, brief export, and mobile guidance. No customer data or submitted enquiry is shown. Source code is private, so the public portfolio links to the live demo and asset credits.

The case study has a responsive journey diagram and two native SVG diagrams documenting the interface/state/rendering boundary and asset pipeline. Regenerate the SVGs with `node scripts/generate-macropark-diagrams.mjs`. The model is attributed to Eric Chadwick / Darmstadt Graphics Group GmbH under CC BY 4.0, and PBR maps to Poly Haven under CC0; the case-study resources link to the application's full asset credits.

## Sobly client case study

The featured `/project/sobly` case study links to the deployed [Sobly storefront](https://sobly.tn/) and covers its customer journeys, owner admin, and Ubuntu VPS deployment with Docker Compose, Caddy HTTPS, persistent SQLite storage, and GitHub updates.

Screenshots under `public/images/projects/sobly` were captured from the real running application. The desktop and mobile home views show the public website; catalog, checkout, and admin views use an isolated local preview with sample products. Gallery captions identify the source. The checkout capture contains no customer details or submitted order. The card cover composes the actual desktop and mobile captures. Images are optimized as WebP, and the brand mark comes from the project’s existing SVG.

## Static generation

`npm run build` creates the client bundle, an SSR build, and static HTML for the homepage and all project routes. React hydrates the generated pages; local development still uses the normal Vite client. `src/data/projectNarratives.ts` holds short case-study briefs, and `src/data/projectDiagrams.ts` supplies the additional system maps. Vercel serves each generated project page and a proper not-found fallback.

Project descriptions, scope, captions, and planned integrations should stay grounded in the documented build. The review identifies where real prototype captures would improve the remaining concept-based galleries.
