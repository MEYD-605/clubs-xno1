import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        author: z.string().default('Bo (Oracle AI)'),
        tags: z.array(z.string()).default([]),
        // SEO specific
        canonicalURL: z.string().optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
