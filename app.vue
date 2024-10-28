<script setup lang="ts">
const { baseUrl, ogUrl, ogImage } = useUrl()
const config = useRuntimeConfig()
const { y } = useWindowScroll()
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const { t, finalizePendingLocaleChange } = useI18n()

async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}

useSeoMeta({
  titleTemplate: (titleChunk) => { return titleChunk ? `${titleChunk} - ${t('name')}` : `${t('title')} - ${t('name')}` },
  description: () => t('desc'),
  ogTitle: () => t('title'),
  ogDescription: () => t('desc'),
  ogType: 'website',
  ogUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('title'),
  twitterDescription: () => t('desc'),
  twitterImage: ogImage,
  colorScheme: 'light dark',
  appleMobileWebAppTitle: () => t('name')
})

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
    dir: () => i18nHead.value.htmlAttrs!.dir,
    class: { scrolled: () => y.value > 0 },
  },

  link: () => [
    { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
    ...(i18nHead.value.link || []),
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': () => t('name'),
        'url': baseUrl,
        'image': {
          '@type': 'ImageObject',
          'url': ogImage,
          'width': '2400px',
          'height': '1256px',
        },
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/favicon.svg`,
          'width': '256px',
          'height': '256px',
        },
        'email': config.public.baseEmail,
        'telephone': '0551 90 46 22',
        'faxNumber': '021 44 08 11',
        'sameAs': ['https://x.com/Univerweb', 'https://www.facebook.com/Univerweb', 'https://www.linkedin.com/company/Univerweb', 'https://github.com/Univerweb'],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': () => t('streetAddress'),
          'postalCode': '16 029',
          'addressLocality': () => t('addressLocality'),
          'addressRegion': () => t('addressLocality'),
          'addressCountry': 'DZ',
        },
      },
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <TheHeader />
    <AppLoading />
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <LazyTheFooter />
  </NuxtLayout>
</template>
