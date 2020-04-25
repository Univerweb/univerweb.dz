<template>
  <main>
    <home-welcome />
    <section class="container works">
      <h2 class="h1">{{ $t('works.title') }}</h2>
      <home-works />
    </section>
  </main>
</template>

<script>
import homeWelcome from '@/components/partials/home/welcome'
import homeWorks from '@/components/partials/home/works'

export default {
  components: {
    homeWelcome,
    homeWorks
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
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: ''
        }
      ]
    }
  }
}
</script>
