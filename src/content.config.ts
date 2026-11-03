import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		tagline: z.string(),
		description: z.string(),
		year: z.number(),
		status: z.enum(['Live', 'In progress', 'Archived']),
		role: z.string(),
		category: z.enum(['Product', 'Client work', 'Open source', 'Education']),
		tags: z.array(z.string()).default([]),
		stack: z.array(z.string()).default([]),
		accent: z.string().default('#c8ff3d'),
		pattern: z.enum(['grid', 'rings', 'bars', 'dots']).default('grid'),
		url: z.string().optional(),
		repo: z.string().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(100),
		metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
	}),
});

export const collections = { projects };
