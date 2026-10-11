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

`npm run validate:content` checks project/case-study parity, sitemap coverage, duplicate IDs, and referenced project assets.

The site is configured for deployment at [sofienezayati.tn](https://sofienezayati.tn).

## Sobly client case study

The featured `/project/sobly` case study links to the deployed [Sobly storefront](https://sobly.tn/) and covers its customer journeys, owner admin, and Ubuntu VPS deployment with Docker Compose, Caddy HTTPS, persistent SQLite storage, and GitHub updates.

Screenshots under `public/images/projects/sobly` were captured from the real running application. The desktop and mobile home views show the public website; catalog, checkout, and admin views use an isolated local preview with sample products. Gallery captions identify the source. The checkout capture contains no customer details or submitted order. The card cover composes the actual desktop and mobile captures. Images are optimized as WebP, and the brand mark comes from the project’s existing SVG.
