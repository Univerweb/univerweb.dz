import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
  tags: z.array(z.string()),
})

const work = commonSchema.extend({
  category: z.string(),
  lead: z.string(),
  link: z.string().optional(),
})

const post = commonSchema.extend({
  author: z.object({
    name: z.string(),
    url: z.string(),
  }).optional(),
})

export default defineContentConfig({
  collections: {
    work_fr: defineCollection({
      source: {
        include: 'fr/realisations/*.yaml',
        prefix: 'realisations',
      },
      type: 'page',
      schema: work,
    }),
    work_en: defineCollection({
      source: 'en/realisations/*.yaml',
      type: 'page',
      schema: work,
    }),
    work_ar: defineCollection({
      source: 'ar/realisations/*.yaml',
      type: 'page',
      schema: work,
    }),
    post_fr: defineCollection({
      source: {
        include: 'fr/blog/*.md',
        prefix: 'blog',
      },
      type: 'page',
      schema: post,
    }),
    post_en: defineCollection({
      source: 'en/blog/*.md',
      type: 'page',
      schema: post,
    }),
    post_ar: defineCollection({
      source: 'ar/blog/*.md',
      type: 'page',
      schema: post,
    }),
  },
})
