import { defineCollection, z } from 'astro:content';

// トーナメントイベントのコレクション
const eventsCollection = defineCollection({
  type: 'content', // or 'data'
  schema: z.object({
    title: z.string(),
    eventType: z.enum(['Main Event', 'Side Event', 'Satellite']),
    buyIn: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    isFeatured: z.boolean().default(false), // トップページで特集するか
  }),
});

// ニュース記事のコレクション
const newsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string().default('RSOP運営'),
        publishDate: z.date(),
        coverImage: z.string().optional(), // public/images/news/...
    })
});

export const collections = {
  'events': eventsCollection,
  'news': newsCollection,
};