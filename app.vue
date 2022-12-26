<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <!-- <TheSkiplinks /> -->
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()
const route = useRoute()
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })

const globalPath = `${locale.value}/global`
const baseURL = config.public.baseURL

const { data: global } = await useAsyncData('global', () => queryContent(globalPath).only(['name', 'title', 'desc', 'footer']).findOne())

const name = global.value!.name
const title = global.value!.title
const desc = global.value!.desc
const ogUrl = `${baseURL}${route.path}`
const ogImage = locale.value === 'ar' ? `${baseURL}/images/univerweb-ar_share.jpg` : `${baseURL}/images/univerweb_share.jpg`
const comma = locale.value === 'ar' ? '، ' : ', '
const streetAddress = `${global.value!.footer.address.streetAddress}${comma}${global.value!.footer.address.addressLocality}`
const addressLocality = `${global.value!.footer.address.addressRegion}${comma}${global.value!.footer.address.addressCountry}`

const scrolled = ref(false)

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
    dir: computed(() => i18nHead.value.htmlAttrs!.dir)
  },

  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} — ${name}` : `${title} — ${name}`
  },

  meta: [
    { name: 'theme-color', content: '#50c8f0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'description', content: desc },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: name },
    { property: 'og:url', content: ogUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:secure_url', content: ogImage },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: 1920 },
    { property: 'og:image:height', content: 1080 },
    { property: 'og:image:alt', content: `${name} — ${title}` },
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
        name: name,
        url: baseURL,
        image: {
          '@type': 'ImageObject',
          url: ogImage,
          width: '1920px',
          height: '1080px'
        },
        logo: {
          '@type': 'ImageObject',
          url: `${baseURL}/logo.svg`,
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
          streetAddress: streetAddress,
          postalCode: config.public.postalCode,
          addressLocality: addressLocality
        }
      }
    }
  ]
})
</script>

<!-- <script>
export default {
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  mounted() {
    this.scrolled = window.scrollY > 0
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    }
  }
}
</script> -->
