<script setup lang="ts">
const { baseUrl, ogUrl, ogImage } = useUrl()
const config = useRuntimeConfig()
const { y } = useWindowScroll()
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const { t, finalizePendingLocaleChange } = useI18n()
const show = useShow()

async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}

useSeoMeta({
  titleTemplate: (titleChunk) => { return titleChunk ? `${titleChunk} — ${t('name')}` : `${t('title')} — ${t('name')}` },
  description: () => t('desc'),
  ogTitle: () => t('title'),
  ogType: 'website',
  ogUrl,
  ogImage,
})

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
    dir: () => i18nHead.value.htmlAttrs!.dir,
    class: { 'open-menu': show, 'scrolled': () => y.value > 0 },
  },

  link: () => [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
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
          'width': '1920px',
          'height': '1080px',
        },
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/logo.svg`,
          'width': '512px',
          'height': '512px',
        },
        'email': config.public.baseEmail,
        'telephone': '0551 90 46 22',
        'faxNumber': '021 44 08 11',
        'sameAs': ['https://twitter.com/Univerweb', 'https://www.facebook.com/Univerweb', 'https://www.linkedin.com/company/Univerweb', 'https://github.com/Univerweb'],
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
  <div>
    <TheHeader />
    <NuxtLayout>
      <AppLoading />
      <NuxtPage id="main" :transition="{ name: 'page', onBeforeEnter }" />
    </NuxtLayout>
    <LazyTheFooter />
  </div>
</template>
