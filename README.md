# Kanat Umertayev — Career Portfolio

A premium, recruiter-focused personal website for Kanat Umertayev, Project Engineer, Employer’s Representative, and Civil Engineer. The content is structured from Kanat’s CV and presented as a responsive multi-page portfolio with project case studies.

## Features

- Next.js 16 App Router with TypeScript
- Tailwind CSS 4 visual system
- Framer Motion page, scroll, timeline, and diagram animations
- Automatic light/dark theme with a manual toggle
- Fully responsive desktop, tablet, and mobile layouts
- Dynamic project routes and interactive sector filtering
- Print-ready CV page and downloadable PDF
- Contact form that opens a private, pre-filled email draft
- Metadata, Open Graph image, JSON-LD, sitemap, robots, and web manifest
- Reduced-motion, keyboard, focus, semantic, and contrast accessibility

## Run locally

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```powershell
npm run typecheck
npm run lint
npm run build
```

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage, positioning, proof points, featured work |
| `/about` | Professional summary, approach, capabilities, education, credentials |
| `/experience` | Complete career timeline and lifecycle coverage |
| `/projects` | Filterable project archive |
| `/projects/[slug]` | Dynamic project case study |
| `/contact` | Direct contact details and email composer |
| `/cv` | Browser and print-optimized curriculum vitae |

## Content updates

Most portfolio content lives in `data/portfolio.ts`. Updating that file propagates changes across the homepage, route pages, case studies, CV, and SEO surfaces.

## Production configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed HTTPS origin before building. The contact form intentionally uses the visitor’s email client, so no API key or personal data processor is required.

## Design note

The CV did not include source photography or reusable company/institution logo files. The site therefore uses bespoke engineering diagrams and clean monogram marks rather than hotlinking unreliable third-party assets. These can be replaced with authorized brand assets later without changing page structure.
