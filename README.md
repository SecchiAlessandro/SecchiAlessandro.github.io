# Alessandro Secchi — Personal Blog & Portfolio

Source code for [alessandrosecchi.com](https://alessandrosecchi.com) — the personal website and blog of Alessandro Secchi, hosted on GitHub Pages.

## Overview

The site is a digital space to share:

- Thoughts and reflections (particularly on Energy, AI, and Leadership)
- Professional experiences and studies
- Side projects and hobbies
- Book readings

## Tech Stack

- **Framework:** [Astro](https://astro.build) — static site, zero JS by default
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/typography`
- **Content:** Markdown/MDX content collections (`src/content/blog/`)
- **Fonts:** Saira Extra Condensed (display) + Mulish (body) via Fontsource
- **Hosting:** GitHub Pages, deployed by GitHub Actions (`.github/workflows/deploy.yml`)

## Project Structure

```
src/
├── content/blog/        # Blog posts as .md/.mdx, one folder per topic
│   ├── thoughts/
│   ├── energy/
│   └── ai/
├── pages/
│   ├── index.astro      # Home: about, experience, studies, projects, hobbies, books, contacts
│   ├── [topic]/index.astro   # Topic listing pages (/thoughts/, /energy/, /ai/)
│   └── [topic]/[slug].astro  # Individual post pages
├── layouts/             # BaseLayout (shell), PostLayout (article pages)
├── components/          # Nav, Footer, PostCard, GooglePhotos widgets, VideoEmbed, ...
├── data/albums.ts       # Google Photos shared-album data used by the widgets
├── assets/img/          # Images (optimized by Astro at build time)
└── styles/global.css    # Tailwind theme tokens and base styles
public/
├── CNAME                # Custom domain for GitHub Pages
└── media/               # Videos and audio served as-is
```

## Writing a New Post

Add a Markdown file under `src/content/blog/<topic>/` (`topic` is `thoughts`, `energy` or `ai`):

```markdown
---
title: My New Post
description: One-line summary shown in listings and search results.
pubDate: 2026-07-14
dateDisplay: July 2026        # optional, overrides the formatted pubDate
topic: energy
---

Post content in Markdown. Local images go in `src/assets/img/` and are
referenced relatively: ![alt](../../../assets/img/picture.png)
```

Use the `.mdx` extension instead if the post embeds components (Google Photos albums, videos, YouTube):

```mdx
import VideoEmbed from '../../../components/VideoEmbed.astro';

<VideoEmbed src="/media/clip.mp4" label="My clip" />
```

## Development

```bash
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deployment

Every push to `main` triggers the GitHub Actions workflow, which builds the site and deploys it to GitHub Pages (Settings → Pages → Source must be set to "GitHub Actions"). The custom domain is kept via `public/CNAME`.
