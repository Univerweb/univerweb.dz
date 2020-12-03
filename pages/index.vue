<template>
  <main>
    <home-welcome />
    <home-works />
    <home-request />
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.$t('name')} — ${this.$t('links.home')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('links.home')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('home.description')
        }
      ]
    }
  }
}
</script>
