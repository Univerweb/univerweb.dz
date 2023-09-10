<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const { y } = useWindowScroll()
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const { t, locale } = useI18n()
// const { t, finalizePendingLocaleChange } = useI18n()
const coma = useComa()
const show = useShow()

// const onBeforeEnter = async () => {
//   await finalizePendingLocaleChange()
// }

useSeoMeta({
  titleTemplate: (titleChunk) => { return titleChunk ? `${titleChunk} — ${t('name')}` : `${t('title')} — ${t('name')}` },
  description: () => t('desc'),
  ogTitle: () => t('title'),
  ogType: 'website',
  ogUrl: () => `${config.public.baseURL}${route.path}`,
  ogImage: () => locale.value === 'ar' ? `${config.public.baseURL}/images/univerweb-ar.jpg` : `${config.public.baseURL}/images/univerweb.jpg`,
  themeColor: '#28285a',
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
        'telephone': t('mobile'),
        'faxNumber': t('phone'),
        'sameAs': [t('twitter'), t('facebook'), t('linkedin'), t('github')],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': () => `${t('streetAddress')}${coma.value}${t('addressLocality')}`,
          'postalCode': t('postalCode'),
          'addressLocality': () => `${t('addressRegion')}${coma.value}${t('addressCountry')}`,
        },
      },
    },
  ],
})
</script>

<template>
  <div class="wrapper" :class="{ scrolled: y }">
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #28285a 0%, #50c8f0 100%)" />
    <TheSkiplinks />
    <TheHeader id="header" />
    <!-- onBeforeEnter -->
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in' }" />
    <LazyTheFooter id="footer" />
  </div>
</template>
