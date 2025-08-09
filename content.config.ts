import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const Date = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
})

const List = z.array(z.object({
  title: z.string(),
  description: z.string(),
}))

const Realisation = Date.extend({
  about: z.string(),
})

const Prestation = z.object({
  cta: z.string(),
  alt: z.string(),
  intro: z.array(z.string()),
  solutions: z.object({
    title: z.string(),
    list: List,
  }),
  features: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
  process: z.object({
    title: z.string(),
    steps: List,
  }),
  faq: z.object({
    title: z.string(),
    questions: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
})

const Article = Date.extend({
  alt: z.string(),
  tags: z.array(z.string()),
  author: z.object({
    name: z.string(),
    url: z.string().url(),
  }).optional(),
})

export default defineContentConfig({
  collections: {
    realisation: defineCollection({
      type: 'page',
      source: 'realisations/*.yaml',
      schema: z.object({
        category: z.string(),
        tags: z.array(z.string()),
        website: z.string().url().optional(),
      }),
    }),
    realisation_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/realisations/*.yaml', prefix: 'realisations' },
      schema: Realisation,
    }),
    realisation_en: defineCollection({
      type: 'page',
      source: 'en/realisations/*.yaml',
      schema: Realisation,
    }),
    realisation_ar: defineCollection({
      type: 'page',
      source: 'ar/realisations/*.yaml',
      schema: Realisation,
    }),

    prestation_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/prestations/*.yaml', prefix: 'prestations' },
      schema: Prestation,
    }),
    prestation_en: defineCollection({
      type: 'page',
      source: 'en/prestations/*.yaml',
      schema: Prestation,
    }),
    prestation_ar: defineCollection({
      type: 'page',
      source: 'ar/prestations/*.yaml',
      schema: Prestation,
    }),

    article_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/blog/*.md', prefix: 'blog' },
      schema: Article,
    }),
    article_en: defineCollection({
      type: 'page',
      source: 'en/blog/*.md',
      schema: Article,
    }),
    article_ar: defineCollection({
      type: 'page',
      source: 'ar/blog/*.md',
      schema: Article,
    }),
  },
})
