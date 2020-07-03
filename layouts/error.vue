<template>
  <main v-if="error.statusCode === 404" class="hero error">
    <h1>{{ $t('error.404') }}</h1>
    <nuxt-link to="/" class="btn">{{ $t('error.btn') }}</nuxt-link>
  </main>
  <main v-else class="hero error">
    <h1>{{ $t('error.500') }}</h1>
    <nuxt-link to="/" class="btn">{{ $t('error.btn') }}</nuxt-link>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    let TITLE = this.$t('error.500')
    if (this.error.statusCode === 404) {
      TITLE = this.$t('error.404')
    }
    const DESC = TITLE + ', ' + this.$t('error.description')
    return {
      titleTemplate: TITLE + ` — ${this.$t('name')}`,
      meta: [
        {
          name: 'robots',
          content: 'noindex, follow'
        },
        {
          hid: 'description',
          name: 'description',
          content: DESC
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: TITLE
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: DESC
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: null
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          content: null
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.hero.error {
  text-align: center;
  justify-items: center;
}
</style>
