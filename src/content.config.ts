import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['入门指南', '工具评测', '横向对比', '实用教程', '行业观察']),
    tags: z.array(z.string()),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('燕子测评组'),
    readingTime: z.number(),
    featured: z.boolean().default(false),
    affiliate: z.boolean().default(false),
    coverTone: z.enum(['coral', 'green', 'ink', 'gold', 'blue']).default('ink'),
    draft: z.boolean().default(false)
  })
});

const brands = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/brands' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    founded: z.string().optional(),
    jurisdiction: z.string().optional(),
    platforms: z.array(z.string()).default([]),
    strengths: z.array(z.string()).default([]),
    limitations: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    affiliate: z.boolean().default(false),
    reviewedAt: z.coerce.date(),
    status: z.enum(['已评测', '待复查', '资料整理中']).default('资料整理中'),
    draft: z.boolean().default(true)
  })
});

export const collections = { posts, brands };
