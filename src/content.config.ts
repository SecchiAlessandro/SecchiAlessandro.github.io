import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    // Some older posts only carry a month/year in the source material
    dateDisplay: z.string().optional(),
    topic: z.enum(['thoughts', 'energy', 'ai']),
  }),
});

export const collections = { blog };
