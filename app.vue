<template>
  <div class="wrapper" :class="{ scrolled: y }">
    <!-- <TheSkiplinks /> -->
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
const { locale } = useI18n()
const config = useRuntimeConfig()
const route = useRoute()
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })

const { data: global } = await useAsyncData('global', () => queryContent(locale.value, 'global').only(['name', 'title', 'desc', 'footer']).findOne())

useHead({
  htmlAttrs: {
    lang: computed(() => i18nHead.value.htmlAttrs!.lang),
    dir: computed(() => i18nHead.value.htmlAttrs!.dir)
  },

  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} — ${global.value!.name}` : `${global.value!.title} — ${global.value!.name}`
  },

  meta: [
    { name: 'theme-color', content: '#50c8f0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'description', content: global.value!.desc },
    { property: 'og:title', content: global.value!.title },
    { property: 'og:description', content: global.value!.desc },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: global.value!.name },
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
    { property: 'og:image:alt', content: `${global.value!.name} — ${global.value!.title}` },
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
        name: global.value!.name,
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
          streetAddress: `${global.value!.footer.address.streetAddress}${locale.value === 'ar' ? '، ' : ', '}${global.value!.footer.address.addressLocality}`,
          postalCode: config.public.postalCode,
          addressLocality: `${global.value!.footer.address.addressRegion}${locale.value === 'ar' ? '، ' : ', '}${global.value!.footer.address.addressCountry}`
        }
      }
    }
  ]
})
</script>
