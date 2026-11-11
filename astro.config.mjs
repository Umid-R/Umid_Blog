// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://umid-blog.vercel.app',
  markdown: {
    shikiConfig: {
      // Code block colours: light theme by default, dark theme via CSS vars (see Base.astro)
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
