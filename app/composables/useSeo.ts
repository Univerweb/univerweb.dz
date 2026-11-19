type PageKey = | 'home' | 'realisations' | 'prestations' | 'agence' | 'contact' | 'blog' | 'legal'

interface Options {
  page: PageKey | { name: PageKey, slug?: boolean }
  title: () => string
  description: () => string
  ogTitle?: () => string
  breadcrumbTitle?: () => string
  ogImageAlt?: () => string
  ogImageWidth?: number
  ogImageHeight?: number
}

export function useSeo(options: Options) {
  const img = useImage()
  const localePath = useLocalePath()
  const { path } = useRoute()
  const { t, locale } = useI18n()
  const { baseUrl, localeBaseUrl } = useUrl()
  const mode = useColorMode({ disableTransition: false })

  const pageName = typeof options.page === 'string' ? options.page : options.page.name
  const pageSlug = typeof options.page === 'object' && options.page.slug === true

  const locales = { fr: 'fr_FR', en: 'en_US', ar: 'ar_DZ' }

  const defaultOgImage = computed(() => baseUrl(`/images/univerweb${locale.value === 'ar' ? '-ar' : ''}.png`))
  const defaultOgImageWidth = 2400
  const defaultOgImageHeight = 1256

  const ogSiteName = computed(() => t('site.name'))

  const title: () => string = options.title
  const description: () => string = options.description
  const ogTitle: () => string = options.ogTitle || title
  const breadcrumbTitle: () => string = options.breadcrumbTitle || ogTitle

  const ogUrl = baseUrl(path)
  const ogLocale = computed(() => locales[locale.value as keyof typeof locales] || 'fr_FR')

  const ogLocaleAlternate = computed(() => Object
    .values(locales)
    .filter(localeCode => localeCode !== ogLocale.value),
  )

  const ogImage: ComputedRef<string | undefined> = computed(() => options.ogImageAlt
    ? img(localePath(`${path}_banner`, 'fr'), { format: 'jpg', width: options.ogImageWidth || defaultOgImageWidth, height: options.ogImageHeight || defaultOgImageHeight })
    : defaultOgImage.value,
  )

  const ogImageType = computed(() => options.ogImageAlt ? 'image/jpeg' as const : 'image/png' as const)

  const ogImageAlt: () => string = options.ogImageAlt || (() => t('site.logo'))

  const linkAltFr = baseUrl(localePath(path, 'fr'))
  const linkAltEn = baseUrl(localePath(path, 'en'))
  const linkAltAr = baseUrl(localePath(path, 'ar'))

  useSeoMeta({
    titleTemplate: computed(() => `%s | ${ogSiteName.value}`),
    title,
    description,
    ogType: 'website',
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
    ogImageType,
    twitterCard: 'summary_large_image',
    twitterSite: '@Univerweb',
    twitterTitle: ogTitle,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterImageAlt: ogImageAlt,
    twitterImageWidth: options.ogImageWidth || defaultOgImageWidth,
    twitterImageHeight: options.ogImageHeight || defaultOgImageHeight,
    twitterImageType: ogImageType,
    colorScheme: 'light dark',
    themeColor: computed(() => mode.value === 'dark' ? '#001226' : '#fff'),
    appleMobileWebAppTitle: ogSiteName,
  })

  useHead({
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
      { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'canonical', href: ogUrl },
      { rel: 'alternate', href: linkAltFr, hreflang: 'x-default' },
      { rel: 'alternate', href: linkAltFr, hreflang: 'fr' },
      { rel: 'alternate', href: linkAltFr, hreflang: 'fr-FR' },
      { rel: 'alternate', href: linkAltEn, hreflang: 'en' },
      { rel: 'alternate', href: linkAltEn, hreflang: 'en-US' },
      { rel: 'alternate', href: linkAltAr, hreflang: 'ar' },
      { rel: 'alternate', href: linkAltAr, hreflang: 'ar-DZ' },
    ],
  })

  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: computed(() => {
        const home = { name: ogSiteName.value, item: localeBaseUrl.value }

        if (pageName === 'home') {
          return [home]
        }

        if (pageName === 'legal') {
          return [home, { name: title(), item: ogUrl }]
        }

        return [
          home,
          { name: t(`navigation.menu.${pageName}`), item: baseUrl(localePath(pageName)) },
          ...(pageSlug ? [{ name: breadcrumbTitle(), item: ogUrl }] : []),
        ]
      }),
    }),
  ])
}
