import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    demoLabel: z.string().optional(),
    role: z.string().optional(),
    duration: z.string().optional(),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projects };
