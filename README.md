# Ram Avtar — Portfolio (Next.js + TypeScript)

Next.js 14 (App Router) + TypeScript portfolio with dark/light theme toggle (`next-themes`).

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Add your photo
Your photo lives inside your old HTML as base64. Extract it once:
```bash
npm run extract-avatar -- path/to/old-portfolio.html
```
This writes `public/avatar.jpg`. Until then, an "RA" initials avatar is shown.

## Structure
```
src/
  app/
    layout.tsx        # fonts, ThemeProvider, Nav, Footer
    page.tsx          # /            Home (hero)
    skills/           # /skills
    experience/       # /experience
    projects/         # /projects
    education/        # /education
    contact/          # /contact
    not-found.tsx     # 404
    globals.css       # design tokens (dark + light themes)
  components/         # Nav, ThemeToggle, Avatar, ProjectCard, ...
  lib/data.ts         # ALL content lives here (edit this to update the site)
scripts/extract-avatar.mjs
```

## Editing content
Everything (skills, experience, projects, links, education) is in `src/lib/data.ts`.

## Theme
Toggle in the navbar. Colors are CSS variables in `globals.css` under `[data-theme="dark"]` / `[data-theme="light"]`.

## Deploy
Push to GitHub and import in Vercel (zero config).
