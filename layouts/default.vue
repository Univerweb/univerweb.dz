<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Header.vue'

export default {
  components: {
    Navbar
  },
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://www.univerweb.dz${this.$route.path}`
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family: Gotham;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
