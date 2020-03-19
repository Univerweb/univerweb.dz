<template>
  <main class="container">
    <div>
      <h1 class="h2">Contact</h1>
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
  head() {
    return {
      titleTemplate: 'Contact — %s',
      meta: [
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:title', name: 'og:title', content: '' },
        { hid: 'og:description', name: 'og:description', content: '' },
        { hid: 'og:image', name: 'og:image', content: '' },
        { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: '' }
      ]
    }
  }
}
</script>
