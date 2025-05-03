<script setup lang="ts">
const { t, finalizePendingLocaleChange } = useI18n()
const { baseUrl, ogUrl, ogImage } = useUrl()
const config = useRuntimeConfig()
const { progress } = useLoadingIndicator()

async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': t('site.name'),
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

useSeoMeta({
  titleTemplate: title => title ? `${title} | ${t('site.name')}` : `${t('home.title')} | ${t('site.name')}`,
  description: () => t('home.description'),
  ogTitle: () => t('home.title'),
  ogDescription: () => t('home.description'),
  ogType: 'website',
  ogUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('home.title'),
  twitterDescription: () => t('home.description'),
  twitterImage: ogImage,
  colorScheme: 'light dark',
  appleMobileWebAppTitle: () => t('site.name'),
})
</script>

<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right, #50c8f0 0%, #28285a 50%, #50c8f0 100%)"
    :style="{ backgroundSize: progress === 0 ? 'auto' : `${(100 / progress) * 100}% auto`, transform: `scaleX(${progress / 100})` }"
  />
  <NuxtLayout name="default">
    <AppHeader />
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <LazyAppFooter />
  </NuxtLayout>
</template>
