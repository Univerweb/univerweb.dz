interface SeoSlug {
  title: () => string
  description: () => string
  width?: number
  height?: number
  category: string
  currentPageTitle: () => string
}

export function useSeoSlug({ title, description, width = 2400, height = 1256, category, currentPageTitle }: SeoSlug) {
  const img = useImage()
  const localePath = useLocalePath()
  const { path } = useRoute()
  const ogImage = img(localePath(`${path}_banner`, 'fr'), { format: 'webp', width, height }, { provider: 'cloudinary' })
  const { t } = useI18n()
  const { localeBaseUrl, baseUrl } = useUrl()

  useSeoMeta({
    title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'article',
    ogImage,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
  })

  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': () => t('site.name'), 'item': localeBaseUrl },
          { '@type': 'ListItem', 'position': 2, 'name': () => t(`${category}.title`), 'item': () => `${baseUrl}${localePath(category)}` },
          { '@type': 'ListItem', 'position': 3, 'name': () => currentPageTitle() },
        ],
      },
    }],
  })
}
