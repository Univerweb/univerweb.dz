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
      bodyAttrs: { class: 'home' },
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
        }
      ]
    }
  }
}
</script>
