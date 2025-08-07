import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const Realisation = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
  category: z.string(),
  tags: z.array(z.string()),
  link: z.string().optional(),
})

const Prestation = z.object({
  cta: z.string(),
  alt: z.string(),
  intro: z.array(z.string()),
  solutions: z.object({
    title: z.string(),
    list: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
  features: z.object({
    title: z.string(),
    tags: z.array(z.string()),
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

const Article = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
  alt: z.string(),
  tags: z.array(z.string()),
  author: z.object({
    name: z.string(),
    url: z.string().url(),
  }).optional(),
})

const Tag = z.object({
  uid: z.string(),
  name: z.string(),
  icon: z.array(z.string()),
})

export default defineContentConfig({
  collections: {
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

    tag_fr: defineCollection({
      type: 'data',
      source: 'fr/tags/*.yaml',
      schema: Tag,
    }),
    tag_en: defineCollection({
      type: 'data',
      source: 'en/tags/*.yaml',
      schema: Tag,
    }),
    tag_ar: defineCollection({
      type: 'data',
      source: 'ar/tags/*.yaml',
      schema: Tag,
    }),
  },
})
