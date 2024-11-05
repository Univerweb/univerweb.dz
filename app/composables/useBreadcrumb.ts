export function useBreadcrumb(page: string) {
  const { t } = useI18n()
  const { localeBaseUrl } = useUrl()

  return {
    type: 'application/ld+json',
    children: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': () => t('name'), 'item': localeBaseUrl },
        { '@type': 'ListItem', 'position': 2, 'name': () => t(`${page}.title`) },
      ],
    },
  }
}
