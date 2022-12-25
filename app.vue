<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <!-- <TheSkiplinks /> -->
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const { t, locale } = useI18n()
const route = useRoute()
const config = useRuntimeConfig()

const name = t('name')
const desc = t('description')
const home = await queryContent(`${locale.value}/home`).only('description').findOne()
const ogUrl = `${config.public.baseURL}${route.path}`
const ogImage = locale.value === 'ar' ? `${config.public.baseURL}/images/univerweb-ar_share.jpg` : `${config.public.baseURL}/images/univerweb_share.jpg`
const comma = locale.value === 'ar' ? '، ' : ', '

const scrolled = ref(false)

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
    dir: computed(() => {
      return i18nHead.value.htmlAttrs!.dir
    })
  },

  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} — ${name}` : `${desc} — ${name}`
  },

  meta: [
    { name: 'theme-color', content: '#50c8f0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'description', content: home.description },
    { property: 'og:title', content: desc },
    { property: 'og:description', content: home.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: name },
    { property: 'og:url', content: ogUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:secure_url', content: ogImage },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: 1920 },
    { property: 'og:image:height', content: 1080 },
    { property: 'og:image:alt', content: `${name} — ${desc}` },
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
        name: `${name}`,
        url: `${config.public.baseURL}`,
        image: {
          '@type': 'ImageObject',
          url: ogImage,
          width: '1920px',
          height: '1080px'
        },
        logo: {
          '@type': 'ImageObject',
          url: `${config.public.baseURL}/logo.svg`,
          width: '512px',
          height: '512px'
        },
        email: `${config.public.baseEmail}`,
        telephone: `${config.public.mobile}`,
        faxNumber: `${config.public.phone}`,
        sameAs: [
          'https://twitter.com/Univerweb',
          'https://www.facebook.com/Univerweb',
          'https://www.linkedin.com/company/Univerweb',
          'https://github.com/Univerweb'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${t('footer.address.streetAddress')}${comma}${t('footer.address.addressLocality')}`,
          postalCode: `${config.public.postalCode}`,
          addressLocality: `${t('footer.address.addressRegion')}${comma}${t('footer.address.addressCountry')}`
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
