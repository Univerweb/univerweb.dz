<template>
  <main id="main">
    <section class="container hero">
      <h1>{{ $t('home.create.title') }}</h1>
      <p class="h2">{{ $t('home.create.text') }}</p>
    </section>
  </main>
</template>

<script>
export default {
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
