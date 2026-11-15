# Noor Alizah Afifah R — Portfolio

A responsive portfolio built with React, TypeScript, and Vite. Includes 26 projects, searchable project and technology filters, grid/index views, accessible project dialogs, interactive toolkit tiles, pointer-responsive screenshot cards, scroll reveals, career history, Solusi Proteksi Mandiri, and direct WhatsApp, email, LinkedIn, and GitHub links. Motion respects reduced-motion preferences. No contact form or backend.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, normally http://127.0.0.1:5173/.

## Production

```sh
npm run build
npm run preview
```

## Vercel deployment

Import `nooralizahar0925/my-portfolio` into Vercel. The included `vercel.json` selects Vite, runs `npm run build`, and serves `dist`. No environment variables are required. The root directory is the repository root. GitHub Actions checks the production build; deployment is managed by Vercel.

## Edit the portfolio

- `src/data.ts`: projects, project-specific skills, career roles, and contact links. Omit a project's `url` to hide its website link completely.
- `src/App.tsx`: sections and content.
- `src/styles.css`: responsive styling, typography, and motion.
- `public/favicon.svg`: local vector favicon.
- `public/projects/`: optimized screenshots used by project cards and detail dialogs.

Public website links point to the current live sites, which may have changed since the listed engagement. Public projects use locally stored screenshots of the current live websites in `public/projects/`, captured in November 2026 and compressed as WebP. Internal projects without public access use labeled illustrative artwork.

## Content references

Professional background and historical project contributions: [LinkedIn](https://www.linkedin.com/in/noor-alizah-afifah-r-826630148/).

Additional projects and main-developer role for Hello Matcha, NTU Engineering, NTU Nanofab, and Kandooma were supplied directly by Noor. Company ownership and contact information were also supplied directly. WordPress is observable in the public source for Hello Matcha, NTU Nanofab, and Kandooma; Kandooma also loads GSAP. Project technologies are based on a live website audit, public professional background, and the existing SAPA Gampong and Momentree repositories. See `PROJECT-AUDIT.md` for evidence and verification limits. Historical stacks are preserved when a client has since changed platforms.

Public project references:

- https://www.hellomatcha.sg/
- https://www.ntu.edu.sg/engineering/
- https://www.ntunanofab.com/
- https://kandooma-maldives.com/
- https://www.cetaphilfriends.com.sg/
- https://gili-lankanfushi.com/
- https://momentree.co.id/
- https://www.myfirstskool.com/

Google Fonts provides optional typography; system fonts are the fallback if it is unavailable.
