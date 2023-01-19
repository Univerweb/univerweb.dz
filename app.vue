<script setup lang="ts">
const { y } = useWindowScroll()

const { finalizePendingLocaleChange } = useI18n()
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const seo = useSeo()

useHead({
  htmlAttrs: {
    lang: computed(() => i18nHead.value.htmlAttrs!.lang),
    dir: computed(() => i18nHead.value.htmlAttrs!.dir),
  },

  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — ${seo.name.value}` : `${seo.title.value} — ${seo.name.value}`
  },

  meta: [
    { name: 'theme-color', content: '#50c8f0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'description', content: seo.desc },
    { property: 'og:title', content: seo.title },
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
          'url': seo.logo,
          'width': '512px',
          'height': '512px',
        },
        'email': seo.email,
        'telephone': seo.mobile,
        'faxNumber': seo.phone,
        'sameAs': [
          'https://twitter.com/Univerweb',
          'https://www.facebook.com/Univerweb',
          'https://www.linkedin.com/company/Univerweb',
          'https://github.com/Univerweb',
        ],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': seo.streetAddress,
          'postalCode': seo.postalCode,
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
    <!-- <TheSkipLinks /> -->
    <TheHeader />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <LazyTheFooter />
  </div>
</template>
