<template>
  <main class="home">
    <home-welcome />
    <home-works />
    <home-request />
  </main>
</template>

<script>
import HomeWelcome from '@/components/partials/home/HomeWelcome'
import HomeWorks from '@/components/partials/home/HomeWorks'
import HomeRequest from '@/components/partials/home/homeRequest'

export default {
  components: {
    HomeWelcome,
    HomeWorks,
    HomeRequest
  },

  head() {
    return {
      titleTemplate: `${this.$t('name')} — ${this.$t('home.title')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('home.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('home.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        }
      ]
    }
  }
}
</script>
