<template>
  <main id="main" class="container">
    <h1>{{ title }}</h1>
    <p>Contenu à venir…</p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Acodim',
      description: 'Contenu à venir…'
    }
  },
  head() {
    return {
      titleTemplate: `${this.title} — %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
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
