# Sofiene Zayati — Portfolio

A responsive engineering portfolio showcasing embedded systems, IoT, AI automation, and full-stack product work through detailed case studies.

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
npm run build
```

`npm run preview` serves the production build locally.

## Content structure

- `src/data/projects.ts` — project summaries, links, and preview images
- `src/data/projectContent.ts` — detailed case-study content
- `src/data/experience.ts` — education and work history
- `src/data/profile.ts` — contact details, positioning, and languages
- `public/images/projects` — project media

The site is configured for deployment at [sofienezayati.tn](https://sofienezayati.tn).
