<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <TheSkiplinks />
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<!-- <script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      scrolled: false
    }
  },

  head({ $config. public: { baseURL } }) {
    const i18nHead = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
    const image = this.$i18n.locale === 'ar' ? `${baseURL}/images/univerweb-ar_share.jpg` : `${baseURL}/images/univerweb_share.jpg`
    const comma = this.$i18n.locale === 'ar' ? '، ' : ', '

    return {
      titleTemplate: `%s — ${this.$t('name')}`,
      htmlAttrs: { ...i18nHead.htmlAttrs },
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: this.$t('name') },
        { hid: 'og:url', property: 'og:url', content: `${baseURL}${this.$route.path}` },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: image },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: 1920 },
        { property: 'og:image:height', content: 1080 },
        { hid: 'og:image:alt', property: 'og:image:alt', content: `${this.$t('name')} — ${this.$t('description')}` },
        ...i18nHead.meta
      ],
      link: [...i18nHead.link],
      script: [
        {
          json: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: this.$t('name'),
            url: `${baseURL}`,
            image: {
              '@type': 'ImageObject',
              url: image,
              width: '1920px',
              height: '1080px'
            },
            logo: {
              '@type': 'ImageObject',
              url: `${baseURL}/logo.svg`,
              width: '512px',
              height: '512px'
            },
            email: this.$config. public.baseEmail,
            telephone: this.$config. public.mobile,
            faxNumber: this.$config. public.phone,
            sameAs: [
              'https://twitter.com/Univerweb',
              'https://www.facebook.com/Univerweb',
              'https://www.linkedin.com/company/Univerweb',
              'https://github.com/Univerweb'
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: this.$t('footer.address.streetAddress') + comma + this.$t('footer.address.addressLocality'),
              postalCode: this.$config. public.postalCode,
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
</script> -->
