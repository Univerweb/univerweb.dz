<template>
  <div class="container">
    <div>
      <h1>UWS4</h1>
      <p>The Univerweb&#39;s new website.</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: 'Univerweb — Création de sites web',
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

<style>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 110px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1,
.h1 {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  margin: 0;
}

p {
  margin-bottom: 0;
}

.links {
  padding-top: 15px;
}
</style>
