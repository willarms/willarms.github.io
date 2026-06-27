# willarms.github.io

Personal portfolio site built with [Astro](https://astro.build).

## Getting started

```bash
npm install
npm run dev       # local dev server at localhost:4321
npm run build     # build for production → ./dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/
    projects.ts         ← ADD / EDIT PROJECTS HERE
  pages/
    index.astro         ← homepage content
    projects/
      [slug].astro      ← individual project page template (future)
  components/
    ProjectCard.astro   ← card design for the projects grid
  layouts/
    BaseLayout.astro    ← nav, footer, global styles, design tokens
public/
  assets/
    screenshots/        ← drop project screenshots here
.github/
  workflows/
    deploy.yml          ← auto-deploys to GitHub Pages on push to main
```

## How to add a project

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array:

```ts
{
  slug: "my-project",           // used in the URL: /projects/my-project
  title: "My Project",
  shortDescription: "What it does in one sentence.",
  techStack: ["Python", "SQL"],
  status: "complete",           // "complete" | "in-progress" | "planned"
  featured: false,              // true = shows in the Featured section
  githubUrl: "https://github.com/willarms/my-project",
}
```

That's it. The card appears automatically.

## How to enable individual project pages (future)

When you're ready to add `/projects/betwise`-style pages:

1. Add `longDescription` and `highlights` fields to the project in `projects.ts`
2. In `ProjectCard.astro`, change the GitHub link href from `githubUrl` to `/projects/${slug}`
3. The `src/pages/projects/[slug].astro` template is already built — it just needs content

## Deployment

Pushing to `main` automatically deploys via GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup: go to **Settings → Pages → Source** and set it to **GitHub Actions**.
