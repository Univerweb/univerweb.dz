export function useSeoPage(page: string) {
  const { t } = useI18n()

  const title = () => t(`${page}.title`)
  const description = () => t(`${page}.description`)
  const { localeBaseUrl } = useUrl()

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
  })

  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': () => t('site.name'), 'item': localeBaseUrl },
          { '@type': 'ListItem', 'position': 2, 'name': () => t(`${page}.title`) },
        ],
      },
    }],
  })
}
