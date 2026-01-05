import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Bo Clubs'),
        image: z.string().optional(),
        tags: z.array(z.string()),
        isFeatured: z.boolean().default(false),
    }),
});

export const collections = {
    'blog': blogCollection,
};
