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
