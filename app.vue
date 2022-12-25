<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <TheSkiplinks />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const i18nHead = useLocaleHead({
  addSeoAttributes: true,
  addDirAttribute: true
})

const scrolled = ref(false)

// const image = this.$i18n.locale === 'ar' ? `${baseURL}/images/univerweb-ar_share.jpg` : `${baseURL}/images/univerweb_share.jpg`
// const comma = this.$i18n.locale === 'ar' ? '، ' : ', '

const { t } = useI18n()
const name = t('name')
const desc = t('description')

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
    dir: i18nHead.value.htmlAttrs!.dir
  },

  titleTemplate: `%s — ${name}`,

  meta: [
    { name: 'theme-color', content: '#50c8f0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },

    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: name },
    // { property: 'og:url', content: `${baseURL}${this.$route.path}` },
    // { property: 'og:image', content: image },
    // { property: 'og:image:secure_url', content: image },
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
  ]

  // script: [
  //   {
  //     json: {
  //       '@context': 'https://schema.org',
  //       '@type': 'Organization',
  //       name: this.$t('name'),
  //       url: `${baseURL}`,
  //       image: {
  //         '@type': 'ImageObject',
  //         url: image,
  //         width: '1920px',
  //         height: '1080px'
  //       },
  //       logo: {
  //         '@type': 'ImageObject',
  //         url: `${baseURL}/logo.svg`,
  //         width: '512px',
  //         height: '512px'
  //       },
  //       email: this.$config.public.baseEmail,
  //       telephone: this.$config.public.mobile,
  //       faxNumber: this.$config.public.phone,
  //       sameAs: [
  //         'https://twitter.com/Univerweb',
  //         'https://www.facebook.com/Univerweb',
  //         'https://www.linkedin.com/company/Univerweb',
  //         'https://github.com/Univerweb'
  //       ],
  //       address: {
  //         '@type': 'PostalAddress'
  //         streetAddress: this.$t('footer.address.streetAddress') + comma + this.$t('footer.address.addressLocality'),
  //         postalCode: this.$config.public.postalCode,
  //         addressLocality: this.$t('footer.address.addressRegion') + comma + this.$t('footer.address.addressCountry')
  //       }
  //     },
  //     type: 'application/ld+json'
  //   }
  // ]
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
