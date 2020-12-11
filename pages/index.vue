<template>
  <main>
    <section class="container hero">
      <div class="intro">
        <h1>{{ $t('home.headline') }}</h1>
        <p class="lead">{{ $t('home.body') }}</p>
      </div>
      <HomeArrow v-scroll-to="'.works'" />
    </section>

    <HomeWelcome />
    <HomeWorks />
    <HomeRequest />
  </main>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
  },

  head() {
    return {
      titleTemplate: `${this.$t('name')} — ${this.$t('links.home')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('home.description') },
        { hid: 'og:title', property: 'og:title', content: this.$t('links.home') },
        { hid: 'og:description', property: 'og:description', content: this.$t('home.description') }
      ]
    }
  }
}
</script>
