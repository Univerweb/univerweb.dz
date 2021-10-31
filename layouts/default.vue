<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <TheSkiplinks />
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      scrolled: false
    }
  },

  head({ $config: { baseURL } }) {
    const i18nHead = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
    let path = this.$route.path
    if (this.$i18n.locale !== 'fr') {
      path = this.$route.path.slice(3)
    }
    const link = [
      { rel: 'canonical', href: `${baseURL}${this.$route.path}` },
      { rel: 'alternate', hreflang: 'fr', href: `${baseURL}${path}` },
      { rel: 'alternate', hreflang: 'en', href: `${baseURL}/en${path}` },
      { rel: 'alternate', hreflang: 'ar', href: `${baseURL}/ar${path}` }
    ]
    let ogImage = `${baseURL}/univerweb-ar.png`
    if (this.$i18n.locale !== 'ar') {
      ogImage = `${baseURL}/univerweb.png`
    }
    let comma = '، '
    if (this.$i18n.locale !== 'ar') {
      comma = ', '
    }

    return {
      htmlAttrs: { ...i18nHead.htmlAttrs },

      link,

      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: this.$t('name') },
        { hid: 'og:url', property: 'og:url', content: `${baseURL}${this.$route.path}` },
        { hid: 'og:image', property: 'og:image', content: ogImage },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: ogImage },
        { property: 'og:image:width', content: '1920' },
        { property: 'og:image:height', content: '1080' }
      ],

      script: [
        {
          json: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: this.$t('name'),
            url: `${baseURL}`,
            logo: {
              '@type': 'ImageObject',
              url: `${baseURL}/logo.svg`,
              width: '512px',
              height: '512px'
            },
            email: this.$config.baseEmail,
            telephone: this.$config.mobile,
            faxNumber: this.$config.phone,
            sameAs: [
              'https://twitter.com/Univerweb',
              'https://www.facebook.com/Univerweb',
              'https://www.linkedin.com/company/Univerweb',
              'https://github.com/Univerweb'
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: this.$t('footer.address.streetAddress') + comma + this.$t('footer.address.addressLocality'),
              postalCode: this.$config.postalCode,
              addressLocality: this.$t('footer.address.addressRegion') + comma + this.$t('footer.address.addressCountry')
            }
          },
          type: 'application/ld+json'
        }
      ]
    }
  },

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
</script>
