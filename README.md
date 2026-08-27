# Madhavan P — Portfolio

A fast, responsive personal portfolio built with **Vite + React + TypeScript + Tailwind CSS**.

## What's inside

- **Hero, About, Experience, Projects, Achievements, Toolkit, Certificates & Proofs, Contact** — all on one scrollable home page, plus dedicated detail pages for every project (`/projects/:slug`), internship (`/experience/:slug`) and hackathon achievement (`/achievements/:slug`).
- A cursor-reactive ambient background (no heavy animation library — plain CSS variables updated on pointer move).
- Every internship, project and hackathon detail page lists the **tools used and why**, the **team members**, and links to the **certificate / proof document**.
- A **Certificates & Proofs** gallery with all 22 Coursera certificates, both internship letters, and every hackathon certificate — each opens the original PDF/image.
- Icons appear **only** in the Toolkit section (official brand marks that link out to each tool's site); everywhere else is icon-free and typographic.
- No emojis anywhere.

## Running it locally

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Editing content

Everything — your bio, experience, projects, achievements, toolkit, and certificate list — lives in one file:

```
src/data/portfolio.ts
```

Edit the text there and the whole site updates. Images and PDFs live under `public/` (`/images`, `/certificates`, `/proofs`, `/projects`), referenced by path from `portfolio.ts`.

## Deploying

`dist/` after `npm run build` is a fully static site — drop it on Vercel, Netlify, GitHub Pages, or any static host.
