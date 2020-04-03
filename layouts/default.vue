<template>
  <div class="wrapper">
    <uni-skip-links />
    <uni-header />
    <nuxt />
    <uni-footer />
  </div>
</template>

<script>
import uniSkipLinks from '@/components/partials/SkipLinks'
import uniHeader from '@/components/partials/Header'
import uniFooter from '@/components/partials/Footer'

export default {
  components: {
    uniSkipLinks,
    uniHeader,
    uniFooter
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  head() {
    return {
      htmlAttrs: { lang: this.$t('iso'), dir: this.$t('dir') },
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.univerweb.dz${this.$route.path}`
        }
      ],
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
  --dark-light: #f2f2f2;
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.wrapper {
  display: grid;
  min-height: 100vh;
  height: 100%;
}

main {
  margin-top: 145px;
}

/*
xs	<768px
sm	≥768px
md	≥1024px
lg	≥1440px
xl	≥1920px
*/

.container {
  padding-right: calc(50% - var(--container-width) / 2);
  padding-left: calc(50% - var(--container-width) / 2);
  padding-top: 100px;
  padding-bottom: 100px;
}

@media (min-width: 768px) {
  .container {
    --container-width: 738px;
  }
}

@media (min-width: 1024px) {
  .container {
    --container-width: 934px;
  }
}

@media (min-width: 1440px) {
  .container {
    --container-width: 1040px;
  }
}

@media (min-width: 1920px) {
  .container {
    --container-width: 1220px;
  }
}

.hero {
  min-height: calc(100vh - 115px);
  display: grid;
  align-content: center;
  justify-content: space-between;
}

h1,
.h1 {
  font-family: Objectivity;
  font-size: 48px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -0.05em;
  word-spacing: -0.05em;
  margin-top: 0;
}

@media (min-width: 1440px) {
  .h1,
  h1 {
    font-size: 60px;
    line-height: 64px;
  }
}
@media (min-width: 1920px) {
  .h1,
  h1 {
    font-size: 84px;
    line-height: 88px;
  }
}

h2,
.h2 {
  font-family: Objectivity;
  font-size: 36px;
  line-height: 42px;
  margin-top: 0;
}

a {
  color: var(--dark);
  text-decoration: none;
}

button {
  font-family: inherit;
  font-size: inherit;
  border: 0;
  cursor: pointer;
}

a,
button {
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

.btn {
  display: inline-block;
  background: var(--dark-blue);
  color: var(--blue) !important;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  width: fit-content;
  height: 55px;
  padding: 15px 30px;
  font-family: inherit;
  font-size: inherit;
  border: 0;
}

.btn:hover {
  background: var(--blue);
  color: var(--dark-blue) !important;
}

p {
  margin-top: 10px;
  margin-bottom: 10px;
}

p:last-child {
  margin-bottom: 0;
}

.bold {
  font-weight: 500;
}

.visually-hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  height: 1px;
  width: 1px;
  word-wrap: normal;
}

.grid {
  display: grid;
  column-gap: 45px;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}

[lang='ar'] body,
[lang='ar'] h1,
[lang='ar'] h2,
[lang='ar'] .h2 {
  font-family: 'Almarai', sans-serif;
}

[lang='ar'] input,
[lang='ar'] textarea {
  font-weight: 800;
  letter-spacing: 0;
}
[lang='ar'] .btn {
  font-weight: 800;
}
</style>
