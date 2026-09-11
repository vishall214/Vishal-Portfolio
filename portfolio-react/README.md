# Vishal Nyapathi, Portfolio

Personal portfolio site, built with React, TypeScript, Vite, and Tailwind CSS v4.

## Stack

- React 19 + TypeScript for the UI
- Vite for the dev server and build
- Tailwind CSS v4, using the `@tailwindcss/vite` plugin so there's no separate config file

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build, outputs to dist/
npm run preview   # preview the production build locally
```

## Structure

```
src/
  data.ts               # all portfolio content: profile, experience, projects, skills
  index.css             # Tailwind import and theme tokens (colors, fonts)
  App.tsx                # page composition
  components/
    Header.tsx
    Hero.tsx
    Experience.tsx
    Projects.tsx
    SkillsAndMore.tsx    # Skills, Achievements, Education
    Footer.tsx
```

To update content, like a new project or a changed link, edit `src/data.ts`. Nothing else needs to change.

## Deploying

After `npm run build`, this is a static site (output in `dist/`). It deploys directly to Vercel, Netlify, or GitHub Pages. Pushing this repo to GitHub and importing it into Vercel is the simplest path, and matches how Overwatch and MetaMeal are already deployed.
