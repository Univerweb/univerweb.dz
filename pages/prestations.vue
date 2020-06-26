<template>
  <main>
    <div class="container hero">
      <div class="intro">
        <h1>{{ $t('prestations.headline') }}</h1>
        <p class="lead">{{ $t('prestations.body') }}</p>
      </div>
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
