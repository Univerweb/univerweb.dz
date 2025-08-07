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
    work_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/realisations/*.yaml', prefix: 'realisations' },
      schema: Realisation,
    }),
    work_en: defineCollection({
      type: 'page',
      source: 'en/realisations/*.yaml',
      schema: Realisation,
    }),
    work_ar: defineCollection({
      type: 'page',
      source: 'ar/realisations/*.yaml',
      schema: Realisation,
    }),

    presta_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/prestations/*.yaml', prefix: 'prestations' },
      schema: Prestation,
    }),
    presta_en: defineCollection({
      type: 'page',
      source: 'en/prestations/*.yaml',
      schema: Prestation,
    }),
    presta_ar: defineCollection({
      type: 'page',
      source: 'ar/prestations/*.yaml',
      schema: Prestation,
    }),

    post_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/blog/*.md', prefix: 'blog' },
      schema: Article,
    }),
    post_en: defineCollection({
      type: 'page',
      source: 'en/blog/*.md',
      schema: Article,
    }),
    post_ar: defineCollection({
      type: 'page',
      source: 'ar/blog/*.md',
      schema: Article,
    }),

    tags_fr: defineCollection({
      type: 'data',
      source: 'fr/tags/*.yaml',
      schema: Tag,
    }),
    tags_en: defineCollection({
      type: 'data',
      source: 'en/tags/*.yaml',
      schema: Tag,
    }),
    tags_ar: defineCollection({
      type: 'data',
      source: 'ar/tags/*.yaml',
      schema: Tag,
    }),
  },
})
