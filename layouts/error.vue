<template>
  <main class="hero error">
    <div v-if="error.statusCode === 404">
      <h1>{{ $t('error.title_1') }}</h1>
      <nuxt-link to="/" class="btn">{{ $t('error.btn') }}</nuxt-link>
    </div>
    <div v-else>
      <h1>{{ $t('error.title_2') }}</h1>
      <nuxt-link to="/" class="btn">{{ $t('error.btn') }}</nuxt-link>
    </div>
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
    return {
      titleTemplate: `${this.$t('error.title_1')} — ${this.$t('name')}`,
      meta: [
        {
          name: 'robots',
          content: 'noindex, follow'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('error.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: ''
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('error.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: ''
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
  justify-content: center;
  text-align: center;
}
</style>
