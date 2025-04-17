import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
  tags: z.array(z.string()),
  lead: z.string(),
})

const work = commonSchema.extend({
  category: z.string(),
  link: z.string().optional(),
})

const presta = commonSchema.extend({
  label: z.string(),
  intro: z.string().optional(),
  features: z.object({
    title: z.string(),
    list: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
  tags: z.object({
    title: z.string(),
    list: z.array(z.string()),
  }),
  process: z.object({
    title: z.string(),
    steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
  faq: z.object({
    title: z.string(),
    questions: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
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
    presta_fr: defineCollection({
      source: {
        include: 'fr/prestations/*.yaml',
        prefix: 'prestations',
      },
      type: 'page',
      schema: presta,
    }),
    presta_en: defineCollection({
      source: 'en/prestations/*.yaml',
      type: 'page',
      schema: presta,
    }),
    presta_ar: defineCollection({
      source: 'ar/prestations/*.yaml',
      type: 'page',
      schema: presta,
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
