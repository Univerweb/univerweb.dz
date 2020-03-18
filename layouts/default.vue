<template>
  <div class="wrapper">
    <UWSHeader />
    <nuxt />
    <UWSFooter />
  </div>
</template>

<script>
import UWSHeader from '~/components/Header.vue'
import UWSFooter from '~/components/Footer.vue'

export default {
  components: {
    UWSHeader,
    UWSFooter
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
:root {
  --blue: #50c8f0;
  --dark-blue: #28285a;
  --dark: #111111;
  --light: #fafafa;
  --white: #fff;
  --container-padding: 15px;
  --container-width: calc(100% - var(--container-padding) * 2);
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  color: var(--dark);
  font-family: Gotham;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.wrapper {
  background: var(--dark-blue);
  min-height: 100vh;
  height: 100%;
}

main {
  background: var(--white);
}

.container {
  padding-right: calc(50% - var(--container-width) / 2);
  padding-left: calc(50% - var(--container-width) / 2);
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .container {
    display: flex;
    padding-right: calc(50% - var(--container-width) / 2);
    padding-left: calc(50% - var(--container-width) / 2);
  }

  .container div {
    width: 48.5%;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  .container {
    --container-width: 1200px;
  }
}

@media (min-width: 1800px) {
  .container {
    --container-width: 1200px;
  }
}

.hero {
  min-height: calc(100vh - 115px);
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
}

h1,
.h1 {
  font-family: Objectivity;
  font-size: 84px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  word-spacing: -0.05em;
  margin: 0;
}

h2,
.h2 {
  font-family: Objectivity;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.05em;
  word-spacing: -0.05em;
  margin-top: 0;
}

p {
  margin-top: 10px;
  margin-bottom: 10px;
}

p:last-child {
  margin-bottom: 0;
}

.visually-hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  height: 1px;
  width: 1px;
  word-wrap: normal;
}

.bold {
  font-weight: 500;
}
</style>
