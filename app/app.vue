<script setup lang="ts">
const { t, finalizePendingLocaleChange } = useI18n()
const head = useLocaleHead()
const { baseUrl, ogUrl, ogImage } = useUrl()
const config = useRuntimeConfig()
const { progress } = useLoadingIndicator()

async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}

useHead({
  htmlAttrs: {
    lang: () => head.value.htmlAttrs!.lang,
    dir: () => head.value.htmlAttrs!.dir,
  },

  link: () => [
    { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
    ...(head.value.link || []),
  ],

  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
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
  appleMobileWebAppTitle: () => t('name'),
})
</script>

<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right, #50c8f0 0%, #28285a 50%, #50c8f0 100%)"
    :style="{ backgroundSize: progress === 0 ? 'auto' : `${(100 / progress) * 100}% auto`, transform: `scaleX(${progress / 100})` }"
  />
  <NuxtLayout>
    <AppHeader />
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <LazyAppFooter />
  </NuxtLayout>
</template>
