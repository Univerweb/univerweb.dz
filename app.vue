<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const { y } = useWindowScroll()
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const { t, locale, finalizePendingLocaleChange } = useI18n()
const coma = useComa()
const show = useShow()

async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}

useSeoMeta({
  titleTemplate: (titleChunk) => { return titleChunk ? `${titleChunk} — ${t('name')}` : `${t('title')} — ${t('name')}` },
  description: () => t('desc'),
  ogTitle: () => t('title'),
  ogType: 'website',
  ogUrl: () => `${config.public.baseURL}${route.path}`,
  ogImage: () => locale.value === 'ar' ? `${config.public.baseURL}/images/univerweb-ar.jpg` : `${config.public.baseURL}/images/univerweb.jpg`,
})

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
    dir: () => i18nHead.value.htmlAttrs!.dir,
    style: () => (show.value === true ? 'height: 100%; overflow: hidden' : 'height: initial; overflow: initial'),
  },

  bodyAttrs: {
    style: () => (show.value === true ? 'height: 100%; overflow: hidden' : 'height: initial; overflow: initial'),
  },

  link: [
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
        'url': config.public.baseURL,
        'image': {
          '@type': 'ImageObject',
          'url': () => locale.value === 'ar' ? `${config.public.baseURL}/images/univerweb-ar.jpg` : `${config.public.baseURL}/images/univerweb.jpg`,
          'width': '1920px',
          'height': '1080px',
        },
        'logo': {
          '@type': 'ImageObject',
          'url': `${config.public.baseURL}/logo.svg`,
          'width': '512px',
          'height': '512px',
        },
        'email': config.public.baseEmail,
        'telephone': '0551 90 46 22',
        'faxNumber': '021 44 08 11',
        'sameAs': ['https://twitter.com/Univerweb', 'https://www.facebook.com/Univerweb', 'https://www.linkedin.com/company/Univerweb', 'https://github.com/Univerweb'],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': () => `${t('streetAddress')}${coma.value}${t('addressLocality')}`,
          'postalCode': '16 029',
          'addressLocality': () => `${t('addressRegion')}${coma.value}${t('addressCountry')}`,
        },
      },
    },
  ],
})
</script>

<template>
  <div class="wrapper" :class="{ scrolled: y }">
    <TheSkiplinks />
    <TheHeader id="header" />
    <NuxtLayout>
      <AppLoading />
      <NuxtPage id="main" :transition="{ name: 'page', onBeforeEnter }" />
    </NuxtLayout>
    <LazyTheFooter id="footer" />
  </div>
</template>
