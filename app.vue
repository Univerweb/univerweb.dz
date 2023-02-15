<script setup lang="ts">
const { y } = useWindowScroll()

// const { finalizePendingLocaleChange } = useI18n()
// const onBeforeEnter = async () => {
//   await finalizePendingLocaleChange()
// }

const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const { t } = useI18n()
const seo = useSeo()
const config = useRuntimeConfig()

useHead({
  htmlAttrs: {
    lang: computed(() => i18nHead.value.htmlAttrs!.lang),
    dir: computed(() => i18nHead.value.htmlAttrs!.dir),
  },

  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — ${t('name')}` : `${t('title')} — ${t('name')}`
  },

  meta: [
    { name: 'theme-color', content: '#50c8f0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'description', content: seo.desc },
    { property: 'og:title', content: t('title') },
    { property: 'og:description', content: seo.desc },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: seo.name },
    { property: 'og:url', content: seo.ogUrl },
    { property: 'og:image', content: seo.ogImage },
    { property: 'og:image:secure_url', content: seo.ogImage },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: 1920 },
    { property: 'og:image:height', content: 1080 },
    { property: 'og:image:alt', content: seo.ogImageAlt },
    ...(i18nHead.value.meta || []),
  ],

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
        'name': seo.name,
        'url': seo.baseUrl,
        'image': {
          '@type': 'ImageObject',
          'url': seo.ogImage,
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
    <TheSkipLinks />
    <TheHeader />
    <!-- onBeforeEnter -->
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    <LazyTheFooter />
  </div>
</template>
