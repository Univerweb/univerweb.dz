<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <the-skiplinks />
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheSkiplinks from '@/components/partials/TheSkiplinks'
import TheHeader from '@/components/partials/TheHeader'
import TheFooter from '@/components/partials/TheFooter'

export default {
  components: {
    TheSkiplinks,
    TheHeader,
    TheFooter
  },

  data() {
    return {
      scrolled: false
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  mounted() {
    this.scrolled = window.scrollY > 0

    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    }
  },

  head() {
    return {
      htmlAttrs: { lang: this.$i18n.locale, dir: this.$t('dir') },
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
@font-face {
  font-family: 'Objectivity';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/objectivity-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Objectivity';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/objectivity-medium.woff2') format('woff2');
}

@font-face {
  font-family: 'Objectivity';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('/fonts/objectivity-bold.woff2') format('woff2');
}

@font-face {
  font-family: 'Almarai';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Almarai'), local('Almarai-Regular'),
    url('/fonts/almarai-regular.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41,
    U+FB50-FDFF, U+FE80-FEFC;
}

@font-face {
  font-family: 'Almarai';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Almarai Bold'), local('Almarai-Bold'),
    url('/fonts/almarai-medium.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41,
    U+FB50-FDFF, U+FE80-FEFC;
}

@font-face {
  font-family: 'Almarai';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local('Almarai ExtraBold'), local('Almarai-ExtraBold'),
    url(/fonts/almarai-bold.woff2) format('woff2');
  unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41,
    U+FB50-FDFF, U+FE80-FEFC;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

:root {
  --font: 'Objectivity', sans-serif;
  --font-arabe: 'Almarai', sans-serif;
  --blue: #50c8f0;
  --dark-blue: #28285a;
  --dark: #111111;
  --light: #fafafa;
  --dark-light: #f2f2f2;
  --white: #fff;
  --container-padding: 15px;
  --container-width: calc(100% - var(--container-padding) * 2);
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  color: var(--dark);
  font-family: var(--font);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

[dir='rtl'] body {
  font-family: var(--font-arabe);
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
  margin-top: 75px;
  transition: margin-top 0.3s;
}

@media (min-width: 1024px) {
  main {
    margin-top: 140px;
  }
}

.container {
  margin-right: calc(50% - var(--container-width) / 2);
  margin-left: calc(50% - var(--container-width) / 2);
  padding-top: 140px;
  padding-bottom: 140px;
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

main .container:nth-child(n + 2) {
  border-top: 1px solid var(--dark-light);
}

.grid {
  display: grid;
  gap: 35px;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
  }
}

.hero {
  min-height: calc(100vh - 75px);
  display: grid;
  align-content: center;
  justify-content: space-between;
  transition: min-height 0.3s;
}

@media (min-width: 1024px) {
  .hero {
    min-height: calc(100vh - 140px);
  }

  .scrolled .hero {
    min-height: calc(100vh - 75px);
  }
}

h1,
.h1 {
  font-size: 48px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -0.05em;
  word-spacing: -0.05em;
  margin: 0 0 30px;
}

@media (min-width: 768px) {
  .h1,
  h1 {
    margin: 0 0 100px;
  }

  .h1 {
    max-width: 25%;
  }
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
  font-size: 36px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: -0.05em;
  word-spacing: -0.05em;
  margin: 0 0 20px;
}

@media (min-width: 1440px) {
  .h2,
  h2 {
    font-size: 48px;
    line-height: 54px;
  }
}

h3,
.h3 {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin: 20px 0 0;
}

@media (min-width: 1440px) {
  .h3,
  h3 {
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -1px;
  }
}

h6,
.h6 {
  font-size: 11px;
  font-weight: 800;
}

a {
  color: var(--dark);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

button {
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
}

.btn {
  display: inline-block;
  background: var(--dark-blue);
  color: var(--blue) !important;
  font-weight: 500;
  line-height: 50px;
  text-transform: uppercase;
  height: 50px;
  padding: 0 30px;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.btn:hover {
  background: var(--blue);
  color: var(--dark-blue) !important;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

p:last-child {
  margin-bottom: 0;
}

img {
  width: 100%;
  height: auto;
}

.visually-hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  height: 1px;
  width: 1px;
  word-wrap: normal;
}
</style>
