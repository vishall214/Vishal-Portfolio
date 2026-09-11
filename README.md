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

The frontend and API deploy as separate services:

### Backend on Render

1. Push this repository to GitHub.
2. In Render, choose **New > Blueprint** and select the repository. Render will read `render.yaml`.
3. Set `FRONTEND_URL` to the deployed Vercel URL, for example `https://your-portfolio.vercel.app`.
4. After deployment, verify `https://your-api.onrender.com/api/health` returns `{ "status": "ok" }`.

The equivalent manual Render settings are:

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

### Frontend on Vercel

1. Import the same GitHub repository into Vercel.
2. Set the project root to the directory containing the frontend `package.json`.
3. Use the Vite preset, build command `npm run build`, and output directory `dist`.
4. Add `VITE_API_URL` with the Render API URL, for example `https://your-api.onrender.com`.
5. Redeploy after adding the environment variable.

For local development, copy `.env.example` to `.env` and use `VITE_API_URL=http://localhost:5000`.
