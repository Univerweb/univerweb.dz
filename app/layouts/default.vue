<script setup lang="ts">
const { t } = useI18n()
const mode = useColorMode({ disableTransition: false })
const { ogUrl, ogLocale, ogLocaleAlternate, ogImage, linkAltFr, linkAltEn, linkAltAr, localeBaseUrl, baseUrl } = useUrl()
const head = useLocaleHead()
const { y } = useWindowScroll()
const config = useRuntimeConfig()

useSeoMeta({
  titleTemplate: () => `%s | ${t('site.name')}`,
  ogSiteName: () => t('site.name'),
  ogType: 'website',
  ogUrl,
  ogLocale,
  ogLocaleAlternate,
  ogImage,
  twitterSite: '@Univerweb',
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
  colorScheme: 'light dark',
  themeColor: computed(() => mode.value === 'dark' ? '#111827' : '#fff'),
  appleMobileWebAppTitle: () => t('site.name'),
})

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
    dir: head.value.htmlAttrs!.dir as 'ltr' | 'rtl',
    class: { scrolled: y },
  },

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
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': t('site.name'),
        'url': localeBaseUrl,
        'image': {
          '@type': 'ImageObject',
          'url': ogImage,
          'width': '2400px',
          'height': '1256px',
        },
        'logo': {
          '@type': 'ImageObject',
          'url': baseUrl('/favicon.svg'),
          'width': '256px',
          'height': '256px',
        },
        'email': config.public.baseEmail,
        'telephone': '0551 90 46 22',
        'faxNumber': '021 44 08 11',
        'sameAs': ['https://x.com/Univerweb', 'https://www.facebook.com/Univerweb', 'https://www.linkedin.com/company/Univerweb', 'https://github.com/Univerweb'],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': t('site.address.street'),
          'postalCode': '16 029',
          'addressLocality': t('site.address.locality'),
          'addressRegion': t('site.address.locality'),
          'addressCountry': 'DZ',
        },
      },
    },
  ],
}))
</script>

<template>
  <slot />
</template>
