import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const Link = z.object({
  label: z.string(),
  path: z.string().url(),
})

const Date = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
})

const List = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
  }),
)

const Home = z.object({
  hero: z.object({
    headline: z.string(),
    lead: z.string(),
    cta: Link,
  }),
  sectionRealisation: z.object({
    headline: z.string(),
    cta: Link,
  }),
  sectionPrestations: z.object({
    headline: z.string(),
  }),
  sectionBlog: z.object({
    headline: z.string(),
    cta: Link,
  }),
})

const Page = z.object({
  headline: z.string(),
})

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
    questions: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
  }),
})

const Agence = z.object({
  headline: z.string(),
  lead: z.string(),
  sectionMethod: z.object({
    headline: z.string(),
    list: List,
  }),
  sectionChoose: z.object({
    headline: z.string(),
    list: List,
  }),
})

const Contact = z.object({
  lead: z.string(),
  other: z.string(),
  address: z.object({
    streetAddress: z.string(),
    postalCode: z.string(),
    addressLocality: z.string(),
  }),
  platforms: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
    }),
  ),
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
    home_fr: defineCollection({
      type: 'page',
      source: 'fr/index.yaml',
      schema: Home,
    }),
    home_en: defineCollection({
      type: 'page',
      source: 'en/index.yaml',
      schema: Home,
    }),
    home_ar: defineCollection({
      type: 'page',
      source: 'ar/index.yaml',
      schema: Home,
    }),

    realisations_page_fr: defineCollection({
      type: 'page',
      source: 'fr/realisations/index.yaml',
      schema: Page,
    }),
    realisations_page_en: defineCollection({
      type: 'page',
      source: 'en/realisations/index.yaml',
      schema: Page,
    }),
    realisations_page_ar: defineCollection({
      type: 'page',
      source: 'ar/realisations/index.yaml',
      schema: Page,
    }),

    realisations_item: defineCollection({
      type: 'page',
      source: 'realisations/*.yaml',
      schema: z.object({
        category: z.string(),
        tags: z.array(z.string()),
        website: z.string().url().optional(),
      }),
    }),
    realisations_item_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/realisations/*.yaml', exclude: ['fr/realisations/index.yaml'], prefix: 'realisations' },
      schema: Realisation,
    }),
    realisations_item_en: defineCollection({
      type: 'page',
      source: { include: 'en/realisations/*.yaml', exclude: ['en/realisations/index.yaml'] },
      schema: Realisation,
    }),
    realisations_item_ar: defineCollection({
      type: 'page',
      source: { include: 'ar/realisations/*.yaml', exclude: ['ar/realisations/index.yaml'] },
      schema: Realisation,
    }),

    prestations_page_fr: defineCollection({
      type: 'page',
      source: 'fr/prestations/index.yaml',
      schema: Page,
    }),
    prestations_page_en: defineCollection({
      type: 'page',
      source: 'en/prestations/index.yaml',
      schema: Page,
    }),
    prestations_page_ar: defineCollection({
      type: 'page',
      source: 'ar/prestations/index.yaml',
      schema: Page,
    }),

    prestations_item_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/prestations/*.yaml', exclude: ['fr/prestations/index.yaml'], prefix: 'prestations' },
      schema: Prestation,
    }),
    prestations_item_en: defineCollection({
      type: 'page',
      source: { include: 'en/prestations/*.yaml', exclude: ['en/prestations/index.yaml'] },
      schema: Prestation,
    }),
    prestations_item_ar: defineCollection({
      type: 'page',
      source: { include: 'ar/prestations/*.yaml', exclude: ['ar/prestations/index.yaml'] },
      schema: Prestation,
    }),

    agence_fr: defineCollection({
      type: 'page',
      source: 'fr/agence.yaml',
      schema: Agence,
    }),
    agence_en: defineCollection({
      type: 'page',
      source: 'en/agence.yaml',
      schema: Agence,
    }),
    agence_ar: defineCollection({
      type: 'page',
      source: 'ar/agence.yaml',
      schema: Agence,
    }),

    contact_fr: defineCollection({
      type: 'page',
      source: 'fr/contact.yaml',
      schema: Contact,
    }),
    contact_en: defineCollection({
      type: 'page',
      source: 'en/contact.yaml',
      schema: Contact,
    }),
    contact_ar: defineCollection({
      type: 'page',
      source: 'ar/contact.yaml',
      schema: Contact,
    }),

    blog_page_fr: defineCollection({
      type: 'page',
      source: 'fr/blog/index.yaml',
      schema: Page,
    }),
    blog_page_en: defineCollection({
      type: 'page',
      source: 'en/blog/index.yaml',
      schema: Page,
    }),
    blog_page_ar: defineCollection({
      type: 'page',
      source: 'ar/blog/index.yaml',
      schema: Page,
    }),

    blog_item_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/blog/*.md', exclude: ['fr/blog/index.yaml'], prefix: 'blog' },
      schema: Article,
    }),
    blog_item_en: defineCollection({
      type: 'page',
      source: { include: 'en/blog/*.md', exclude: ['en/blog/index.yaml'] },
      schema: Article,
    }),
    blog_item_ar: defineCollection({
      type: 'page',
      source: { include: 'ar/blog/*.md', exclude: ['ar/blog/index.yaml'] },
      schema: Article,
    }),
  },
})
