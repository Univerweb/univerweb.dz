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
  data() {
    return {
      scrolled: false
    }
  },

  head({ $config: { baseURL } }) {
    let direction = 'rtl'
    if (this.$i18n.locale !== 'ar') {
      direction = 'ltr'
    }
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

    return {
      htmlAttrs: { lang: this.$i18n.locale, dir: direction },
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
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Univerweb',
            url: `${baseURL}`,
            logo: {
              '@type': 'ImageObject',
              url: `${baseURL}/logo.svg`,
              width: '512px',
              height: '512px'
            },
            email: 'contact@univerweb.dz',
            telephone: '+213 551 90 46 22',
            faxNumber: '+213 21 44 08 11',
            sameAs: [
              'https://twitter.com/univerweb',
              'https://www.facebook.com/Univerweb',
              'https://www.linkedin.com/company/univerweb',
              'https://github.com/Univerweb'
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: '62 Coop. El Mebnia, Birkhadem',
              postalCode: '16 029',
              addressLocality: 'Alger',
              addressCountry: 'Algérie'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'technical support',
              telephone: '+213 21 44 08 11',
              email: 'support@univerweb.dz',
              areaServed: 'DZ',
              availableLanguage: ['French', 'Arabic']
            }
          })
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
