<template>
  <main class="container">
    <div>
      <h1 class="h2">{{ title }}</h1>
      <about />
    </div>
  </main>
</template>

<script>
import About from '~/components/footer/About.vue'

export default {
  components: {
    About
  },
  data() {
    return {
      title: 'Contact',
      description:
        'Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.'
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
