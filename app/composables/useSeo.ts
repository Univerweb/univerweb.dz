interface SeoOptions {
  page?: 'home' | 'realisations' | 'prestations' | 'agence' | 'contact' | 'blog'
  pageSlug?: 'realisations' | 'prestations' | 'blog'
  title?: () => string
  ogTitle?: () => string
  description?: () => string
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
  const ogUrl = computed(() => baseUrl(path))
  const ogLocale = computed(() => locales[locale.value as keyof typeof locales] || 'fr_FR')
  const ogLocaleAlternate = computed(() => Object.values(locales).filter(localeCode => localeCode !== ogLocale.value))
  const ogImageWidth = 2400
  const ogImageHeight = 1256
  const linkAltFr = computed(() => baseUrl(localePath(path, 'fr')))
  const linkAltEn = computed(() => baseUrl(localePath(path, 'en')))
  const linkAltAr = computed(() => baseUrl(localePath(path, 'ar')))
  const defaultOgImage = computed(() => baseUrl(`/images/univerweb${unrefString(locale) === 'ar' ? '-ar' : ''}.jpg`))

  let finalTitle: () => string = () => t('home.title')
  let finalOgTitle: () => string = () => t('home.title')
  let finalDescription: () => string = () => t('home.description')
  let ogImage: ComputedRef<string | undefined> = defaultOgImage
  let finalOgImageAlt: (() => string) | undefined

  if (options.pageSlug) {
    if (!options.title || !options.ogTitle || !options.description) {
      console.error(`useSeo: Pour la page slug '${options.pageSlug}', 'title', 'ogTitle' et 'description' doivent être fournis dans les options. Retour aux valeurs par défaut de la page d'accueil.`)
      finalTitle = () => t('home.title')
      finalOgTitle = () => t('home.title')
      finalDescription = () => t('home.description')
    }

    else {
      finalTitle = options.title
      finalOgTitle = options.ogTitle
      finalDescription = options.description
      finalOgImageAlt = options.ogImageAlt
    }

    ogImage = computed(() =>
      unrefString(
        img(
          unrefString(localePath(`${path}_banner`, 'fr')),
          { format: 'webp', width: options.ogImageWidth || ogImageWidth, height: options.ogImageHeight || ogImageHeight },
          { provider: 'cloudinary' },
        ),
      ),
    )
  }

  else if (options.page) {
    finalTitle = options.title || (() => t(`${options.page}.title`))
    finalOgTitle = options.ogTitle || finalTitle
    finalDescription = options.description || (() => t(`${options.page}.description`))
    ogImage = defaultOgImage
    finalOgImageAlt = () => t('site.logo')
  }

  else {
    console.warn(`useSeo: Aucune option 'page' ou 'pageSlug' fournie. Utilisation des méta par défaut de la page d'accueil.`)
    finalTitle = options.title || (() => t('home.title'))
    finalOgTitle = options.ogTitle || finalTitle
    finalDescription = options.description || (() => t('home.description'))
    ogImage = defaultOgImage
  }

  useSeoMeta({
    titleTemplate: computed(() => `%s | ${ogSiteName.value}`),
    title: finalTitle,
    description: finalDescription,

    ogSiteName,
    ogType: 'website',
    ogTitle: finalOgTitle,
    ogDescription: finalDescription,
    ogUrl,
    ogLocale,
    ogLocaleAlternate,
    ogImage,
    ogImageSecureUrl: ogImage,
    ogImageAlt: finalOgImageAlt,
    ogImageWidth: options.ogImageWidth || ogImageWidth,
    ogImageHeight: options.ogImageHeight || ogImageHeight,
    ogImageType: 'image/jpeg',

    twitterSite: '@Univerweb',
    twitterTitle: finalOgTitle,
    twitterDescription: finalDescription,
    twitterCard: 'summary_large_image',
    twitterImage: ogImage,
    twitterImageAlt: finalOgImageAlt,
    twitterImageWidth: options.ogImageWidth || ogImageWidth,
    twitterImageHeight: options.ogImageHeight || ogImageHeight,
    twitterImageType: 'image/jpeg',

    colorScheme: 'light dark',
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
      { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'manifest', href: '/site.webmanifest' },
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
                'name': finalOgTitle(),
              },
            )
          }

          else {
            breadcrumbListElement.push(
              {
                '@type': 'ListItem',
                'position': 2,
                'name': finalOgTitle(),
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
              'width': `${ogImageWidth}px`,
              'height': `${ogImageHeight}px`,
            },
            'logo': {
              '@type': 'ImageObject',
              'url': unrefString(baseUrl('/favicon.svg')),
              'width': '256px',
              'height': '256px',
            },
            'email': unrefString(config.public.baseEmail),
            'telephone': '0551 90 46 22',
            'faxNumber': '021 44 08 11',
            'sameAs': [
              'https://x.com/Univerweb',
              'https://www.facebook.com/Univerweb',
              'https://www.linkedin.com/company/Univerweb',
              'https://github.com/Univerweb',
            ],
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': t('site.address.street'),
              'postalCode': '16 029',
              'addressLocality': t('site.address.locality'),
              'addressRegion': t('site.address.locality'),
              'addressCountry': 'DZ',
            },
          })
        }),
      },
    ],
  })
}
