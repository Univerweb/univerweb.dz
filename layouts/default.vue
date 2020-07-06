<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <the-skiplinks />
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
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
  },

  head() {
    let DIR = 'rtl'
    if (this.$i18n.locale !== 'ar') {
      DIR = 'ltr'
    }
    let path = this.$route.path
    if (this.$i18n.locale !== 'fr') {
      path = this.$route.path.slice(3)
    }
    const link = [
      {
        rel: 'canonical',
        href: `https://www.univerweb.dz${this.$route.path}`
      },
      {
        rel: 'alternate',
        hreflang: 'fr',
        href: 'https://www.univerweb.dz' + path
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://www.univerweb.dz/en' + path
      },
      {
        rel: 'alternate',
        hreflang: 'ar',
        href: 'https://www.univerweb.dz/ar' + path
      }
    ]
    let IMG = 'https://www.univerweb.dz/univerweb-ar.png'
    if (this.$i18n.locale !== 'ar') {
      IMG = 'https://www.univerweb.dz/univerweb.png'
    }

    return {
      htmlAttrs: { lang: this.$i18n.locale, dir: DIR },
      link,
      meta: [
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Univerweb'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.univerweb.dz${this.$route.path}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: IMG
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: IMG
        },
        {
          property: 'og:image:width',
          content: '1920'
        },
        {
          property: 'og:image:height',
          content: '1080'
        }
      ]
    }
  }
}
</script>
