interface SeoOptions {
  page?: 'home' | 'realisations' | 'prestations' | 'agence' | 'contact' | 'blog'
  pageSlug?: 'realisations' | 'prestations' | 'blog'
  title?: () => string
  description?: () => string
  ogTitle?: () => string
  ogImageAlt?: () => string
  ogImageWidth?: number
  ogImageHeight?: number
}

export function useSeo(options: SeoOptions) {
  const img = useImage()
  const localePath = useLocalePath()
  const { path } = useRoute()
  const { t, locale } = useI18n()
  const { baseUrl, localeBaseUrl } = useUrl()
  const mode = useColorMode({ disableTransition: false })
  const config = useRuntimeConfig()

  const unrefString = (val: string | Ref<string>): string => {
    return isRef(val) ? val.value : val
  }

  const locales = { fr: 'fr_FR', en: 'en_US', ar: 'ar_DZ' }

  const ogSiteName = computed(() => t('site.name'))
  const ogUrl = baseUrl(path)
  const ogLocale = computed(() => locales[locale.value as keyof typeof locales] || 'fr_FR')
  const ogLocaleAlternate = computed(() => Object.values(locales).filter(localeCode => localeCode !== ogLocale.value))

  const defaultOgImage = computed(() => baseUrl(`/images/univerweb${unrefString(locale) === 'ar' ? '-ar' : ''}.jpg`))
  const defaultOgImageWidth = 2400
  const defaultOgImageHeight = 1256

  const linkAltFr = baseUrl(localePath(path, 'fr'))
  const linkAltEn = baseUrl(localePath(path, 'en'))
  const linkAltAr = baseUrl(localePath(path, 'ar'))

  const title: () => string = (() => {
    if (options.pageSlug && options.title && options.description) {
      return options.title
    }

    else if (options.page) {
      return () => t(`${options.page}.title`)
    }

    else {
      return () => t('home.title')
    }
  })()

  const description: () => string = (() => {
    if (options.pageSlug && options.title && options.description) {
      return options.description
    }

    else if (options.page) {
      return () => t(`${options.page}.description`)
    }

    else {
      return () => t('home.description')
    }
  })()

  const ogTitle: () => string = (() => {
    if (options.pageSlug && options.title && options.description) {
      return options.ogTitle || options.title
    }

    else if (options.page) {
      return title
    }

    else {
      return () => t('home.title')
    }
  })()

  const ogImage: ComputedRef<string | undefined> = (() => {
    if (options.pageSlug && options.ogImageAlt) {
      return computed(() =>
        unrefString(
          img(
            unrefString(localePath(`${path}_banner`, 'fr')),
            { format: 'webp', width: options.ogImageWidth || defaultOgImageWidth, height: options.ogImageHeight || defaultOgImageHeight },
            { provider: 'cloudinary' },
          ),
        ),
      )
    }

    else {
      return defaultOgImage
    }
  })()

  const ogImageAlt: () => string = (() => {
    if (options.pageSlug && options.ogImageAlt) {
      return options.ogImageAlt
    }

    else {
      return () => t('site.logo')
    }
  })()

  useSeoMeta({
    titleTemplate: computed(() => `%s | ${ogSiteName.value}`),
    title,
    description,
    ogSiteName,
    ogTitle,
    ogDescription: description,
    ogUrl,
    ogLocale,
    ogLocaleAlternate,
    ogImage,
    ogImageSecureUrl: ogImage,
    ogImageAlt,
    ogImageWidth: options.ogImageWidth || defaultOgImageWidth,
    ogImageHeight: options.ogImageHeight || defaultOgImageHeight,
    twitterTitle: ogTitle,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterImageAlt: ogImageAlt,
    twitterImageWidth: options.ogImageWidth || defaultOgImageWidth,
    twitterImageHeight: options.ogImageHeight || defaultOgImageHeight,
    themeColor: computed(() => (mode.value === 'dark' ? '#111827' : '#fff')),
    appleMobileWebAppTitle: ogSiteName,
  })

  useHead({
    link: [
      { rel: 'alternate', href: linkAltFr, hreflang: 'x-default' },
      { rel: 'alternate', href: linkAltFr, hreflang: 'fr' },
      { rel: 'alternate', href: linkAltFr, hreflang: 'fr-FR' },
      { rel: 'alternate', href: linkAltEn, hreflang: 'en' },
      { rel: 'alternate', href: linkAltEn, hreflang: 'en-US' },
      { rel: 'alternate', href: linkAltAr, hreflang: 'ar' },
      { rel: 'alternate', href: linkAltAr, hreflang: 'ar-DZ' },
      { rel: 'canonical', href: ogUrl },
    ],

    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => {
          const breadcrumbListElement: { '@type': 'ListItem', 'position': number, 'name': string, 'item'?: string }[] = [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': ogSiteName.value,
              'item': unrefString(localeBaseUrl),
            },
          ]

          if (options.pageSlug) {
            breadcrumbListElement.push(
              {
                '@type': 'ListItem',
                'position': 2,
                'name': t(`${options.pageSlug}.title`),
                'item': unrefString(baseUrl(unrefString(localePath(options.pageSlug)))),
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': ogTitle(),
              },
            )
          }

          else {
            breadcrumbListElement.push(
              {
                '@type': 'ListItem',
                'position': 2,
                'name': ogTitle(),
              },
            )
          }

          return JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': breadcrumbListElement,
          })
        }),
      },

      {
        type: 'application/ld+json',
        innerHTML: computed(() => {
          return JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': ogSiteName.value,
            'url': unrefString(localeBaseUrl),
            'image': {
              '@type': 'ImageObject',
              'url': defaultOgImage.value,
              'width': `${defaultOgImageWidth}px`,
              'height': `${defaultOgImageHeight}px`,
            },
            'logo': {
              '@type': 'ImageObject',
              'url': unrefString(baseUrl('/favicon.svg')),
              'width': '256px',
              'height': '256px',
            },
            'email': unrefString(config.public.baseEmail),
            'telephone': unrefString(config.public.baseMobile),
            'sameAs': [
              'https://x.com/Univerweb',
              'https://www.facebook.com/Univerweb',
              'https://www.linkedin.com/company/Univerweb',
              'https://github.com/Univerweb',
            ],
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': t('site.address.street'),
              'postalCode': t('site.address.postalCode'),
              'addressLocality': t('site.address.locality'),
              'addressRegion': t('site.address.locality'),
              'addressCountry': 'DZ',
            },
          })
        }),
      },
    ],
  })

  if (import.meta.server) {
    useSeoMeta({
      ogType: 'website',
      ogImageType: 'image/jpeg',
      twitterSite: '@Univerweb',
      twitterCard: 'summary_large_image',
      twitterImageType: 'image/jpeg',
      colorScheme: 'light dark',
    })

    useHead({
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    })
  }
}
