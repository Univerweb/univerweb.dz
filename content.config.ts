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

const Project = Date.extend({
  about: z.string(),
})

const Service = z.object({
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
  method: z.object({
    headline: z.string(),
    list: List,
  }),
  choose: z.object({
    headline: z.string(),
    list: List,
  }),
})

const Contact = z.object({
  lead: z.string(),
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

const Error = z.object({
  headline: z.string(),
  lead: z.string(),
  cta: z.string(),
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

    realisations_fr: defineCollection({
      type: 'page',
      source: 'fr/realisations/index.yaml',
      schema: Page,
    }),
    realisations_en: defineCollection({
      type: 'page',
      source: 'en/realisations/index.yaml',
      schema: Page,
    }),
    realisations_ar: defineCollection({
      type: 'page',
      source: 'ar/realisations/index.yaml',
      schema: Page,
    }),

    project: defineCollection({
      type: 'page',
      source: 'realisations/*.yaml',
      schema: z.object({
        category: z.string(),
        tags: z.array(z.string()),
        website: z.string().url().optional(),
      }),
    }),
    project_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/realisations/*.yaml', exclude: ['fr/realisations/index.yaml'], prefix: 'realisations' },
      schema: Project,
    }),
    project_en: defineCollection({
      type: 'page',
      source: { include: 'en/realisations/*.yaml', exclude: ['en/realisations/index.yaml'] },
      schema: Project,
    }),
    project_ar: defineCollection({
      type: 'page',
      source: { include: 'ar/realisations/*.yaml', exclude: ['ar/realisations/index.yaml'] },
      schema: Project,
    }),

    prestations_fr: defineCollection({
      type: 'page',
      source: 'fr/prestations/index.yaml',
      schema: Page,
    }),
    prestations_en: defineCollection({
      type: 'page',
      source: 'en/prestations/index.yaml',
      schema: Page,
    }),
    prestations_ar: defineCollection({
      type: 'page',
      source: 'ar/prestations/index.yaml',
      schema: Page,
    }),

    service_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/prestations/*.yaml', exclude: ['fr/prestations/index.yaml'], prefix: 'prestations' },
      schema: Service,
    }),
    service_en: defineCollection({
      type: 'page',
      source: { include: 'en/prestations/*.yaml', exclude: ['en/prestations/index.yaml'] },
      schema: Service,
    }),
    service_ar: defineCollection({
      type: 'page',
      source: { include: 'ar/prestations/*.yaml', exclude: ['ar/prestations/index.yaml'] },
      schema: Service,
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

    blog_fr: defineCollection({
      type: 'page',
      source: 'fr/blog/index.yaml',
      schema: Page,
    }),
    blog_en: defineCollection({
      type: 'page',
      source: 'en/blog/index.yaml',
      schema: Page,
    }),
    blog_ar: defineCollection({
      type: 'page',
      source: 'ar/blog/index.yaml',
      schema: Page,
    }),

    article_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/blog/*.md', exclude: ['fr/blog/index.yaml'], prefix: 'blog' },
      schema: Article,
    }),
    article_en: defineCollection({
      type: 'page',
      source: { include: 'en/blog/*.md', exclude: ['en/blog/index.yaml'] },
      schema: Article,
    }),
    article_ar: defineCollection({
      type: 'page',
      source: { include: 'ar/blog/*.md', exclude: ['ar/blog/index.yaml'] },
      schema: Article,
    }),

    error_404_fr: defineCollection({
      type: 'page',
      source: 'fr/errors/404.yaml',
      schema: Error,
    }),
    error_404_en: defineCollection({
      type: 'page',
      source: 'en/errors/404.yaml',
      schema: Error,
    }),
    error_404_ar: defineCollection({
      type: 'page',
      source: 'ar/errors/404.yaml',
      schema: Error,
    }),

    error_500_fr: defineCollection({
      type: 'page',
      source: 'fr/errors/500.yaml',
      schema: Error,
    }),
    error_500_en: defineCollection({
      type: 'page',
      source: 'en/errors/500.yaml',
      schema: Error,
    }),
    error_500_ar: defineCollection({
      type: 'page',
      source: 'ar/errors/500.yaml',
      schema: Error,
    }),
  },
})
