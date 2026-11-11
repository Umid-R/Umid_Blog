# umid-blog

My personal blog, built with [Astro](https://astro.build).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Edit

- Text in all 4 languages (about, education, experience, project descriptions) → `src/i18n/ui.ts`
- Contacts, skills (+ icons), project links/stack → `src/data/profile.ts`
- Page layouts → `src/pages/[...lang]/` (English at `/`, others at `/ru`, `/ko`, `/uz`)
- New post → add a `.md` file in `src/content/blog/`:

```md
---
title: 'My post'
description: 'One-line summary'
date: 2026-11-11
tags: ['airflow', 'docker']
draft: false
---

Post content here.
```

## Deploy (Vercel, free)

1. Push this folder to a new GitHub repo.
2. vercel.com → Add New → Project → import the repo → Deploy (Astro is auto-detected).
3. Every `git push` redeploys automatically.
4. Put your real URL in `astro.config.mjs` → `site`.
