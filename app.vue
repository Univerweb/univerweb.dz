<script setup lang="ts">
const { y } = useWindowScroll()

// const { finalizePendingLocaleChange } = useI18n()
// const onBeforeEnter = async () => {
//   await finalizePendingLocaleChange()
// }

const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const { t } = useI18n()
const seo = useSeo()
const show = useShow()

useSeoMeta({
  titleTemplate: (titleChunk) => { return titleChunk ? `${titleChunk} — ${t('name')}` : `${t('title')} — ${t('name')}` },
  description: () => t('desc'),
  themeColor: '#50c8f0',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'default',
  ogTitle: () => t('title'),
  ogDescription: () => t('desc'),
  ogType: 'website',
  ogSiteName: () => t('name'),
  ogUrl: seo.ogUrl,
  ogImage: seo.ogImage,
  ogImageSecureUrl: seo.ogImage,
  ogImageType: 'image/jpeg',
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  ogImageAlt: () => `${t('name')} — ${t('title')}`,
  twitterCard: 'summary_large_image',
  twitterSite: '@Univerweb',
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
        'url': seo.baseUrl,
        'image': {
          '@type': 'ImageObject',
          'url': seo.ogImage,
          'width': '1920px',
          'height': '1080px',
        },
        'logo': {
          '@type': 'ImageObject',
          'url': seo.logo,
          'width': '512px',
          'height': '512px',
        },
        'email': seo.baseEmail,
        'telephone': t('mobile'),
        'faxNumber': t('phone'),
        'sameAs': [t('twitter'), t('facebook'), t('linkedin'), t('github')],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': seo.streetAddress,
          'postalCode': t('postalCode'),
          'addressLocality': seo.addressLocality,
        },
      },
    },
  ],
})
</script>

<template>
  <div class="wrapper" :class="{ scrolled: y }">
    <NuxtLoadingIndicator />
    <TheSkiplinks />
    <TheHeader id="header" />
    <!-- onBeforeEnter -->
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in' }" />
    <LazyTheFooter id="footer" />
  </div>
</template>
