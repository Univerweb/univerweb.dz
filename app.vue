<template>
  <div class="wrapper" :class="{ scrolled: y }">
    <NuxtLoadingIndicator />
    <!-- <TheSkiplinks /> -->
    <TheHeader />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()

const { finalizePendingLocaleChange, t, locale } = useI18n()
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const route = useRoute()
const config = useRuntimeConfig()

useHead({
  htmlAttrs: {
    lang: computed(() => i18nHead.value.htmlAttrs!.lang),
    dir: computed(() => i18nHead.value.htmlAttrs!.dir)
  },

  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} — ${t('name')}` : `${t('title')} — ${t('name')}`
  },

  meta: [
    { name: 'theme-color', content: '#50c8f0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'description', content: t('desc') },
    { property: 'og:title', content: t('title') },
    { property: 'og:description', content: t('desc') },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: t('name') },
    { property: 'og:url', content: `${config.public.baseURL}${route.path}` },
    {
      property: 'og:image',
      content: locale.value === 'ar' ? `${config.public.baseURL}/images/univerweb-ar_share.jpg` : `${config.public.baseURL}/images/univerweb_share.jpg`
    },
    {
      property: 'og:image:secure_url',
      content: locale.value === 'ar' ? `${config.public.baseURL}/images/univerweb-ar_share.jpg` : `${config.public.baseURL}/images/univerweb_share.jpg`
    },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: 1920 },
    { property: 'og:image:height', content: 1080 },
    { property: 'og:image:alt', content: `${t('name')} — ${t('title')}` },
    ...(i18nHead.value.meta || [])
  ],

  link: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ...(i18nHead.value.link || [])
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: t('name'),
        url: config.public.baseURL,
        image: {
          '@type': 'ImageObject',
          url: locale.value === 'ar' ? `${config.public.baseURL}/images/univerweb-ar_share.jpg` : `${config.public.baseURL}/images/univerweb_share.jpg`,
          width: '1920px',
          height: '1080px'
        },
        logo: {
          '@type': 'ImageObject',
          url: `${config.public.baseURL}/logo.svg`,
          width: '512px',
          height: '512px'
        },
        email: config.public.baseEmail,
        telephone: config.public.mobile,
        faxNumber: config.public.phone,
        sameAs: [
          'https://twitter.com/Univerweb',
          'https://www.facebook.com/Univerweb',
          'https://www.linkedin.com/company/Univerweb',
          'https://github.com/Univerweb'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${t('address.streetAddress')}${locale.value === 'ar' ? '، ' : ', '}${t('address.addressLocality')}`,
          postalCode: config.public.postalCode,
          addressLocality: `${t('address.addressRegion')}${locale.value === 'ar' ? '، ' : ', '}${t('address.addressCountry')}`
        }
      }
    }
  ]
})
</script>
