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

  head() {
    let DIR = 'rtl'
    if (this.$i18n.locale !== 'ar') {
      DIR = 'ltr'
    }
    let PATH = this.$route.path
    if (this.$i18n.locale !== 'fr') {
      PATH = this.$route.path.slice(3)
    }
    const link = [
      { rel: 'canonical', href: process.env.BASE_URL + this.$route.path },
      { rel: 'alternate', hreflang: 'fr', href: process.env.BASE_URL + PATH },
      { rel: 'alternate', hreflang: 'en', href: process.env.BASE_URL + PATH },
      { rel: 'alternate', hreflang: 'ar', href: process.env.BASE_URL + PATH }
    ]
    let IMG = process.env.BASE_URL + '/univerweb-ar.png'
    if (this.$i18n.locale !== 'ar') {
      IMG = process.env.BASE_URL + '/univerweb.png'
    }

    return {
      htmlAttrs: { lang: this.$i18n.locale, dir: DIR },
      link,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: this.$t('name') },
        { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL + this.$route.path },
        { hid: 'og:image', property: 'og:image', content: IMG },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: IMG },
        { property: 'og:image:width', content: '1920' },
        { property: 'og:image:height', content: '1080' }
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
