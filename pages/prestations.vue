<template>
  <main>
    <div class="container hero">
      <h1>{{ $t('prestations.title') }}</h1>
      <p class="lead">{{ $t('prestations.description') }}</p>
    </div>
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
        }
      ]
    }
  }
}
</script>
