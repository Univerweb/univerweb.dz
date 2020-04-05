<template>
  <main id="main">
    <section class="container hero">
      <h1>{{ $t('prestations.title') }}</h1>
      <p class="h2">{{ $t('prestations.description') }}</p>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.$t('prestations.title')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('prestations.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('prestations.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('prestations.description')
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
