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
  font-family: 'Almarai';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Almarai'), local('Almarai-Regular'),
    url(/fonts/almarai-regular.woff2) format('woff2');
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

[dir='rtl'] body {
  font-family: 'Almarai', sans-serif;
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
  font-family: Objectivity;
  font-size: 48px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -0.05em;
  word-spacing: -0.05em;
  margin-top: 0;
}

[dir='rtl'] h1,
[dir='rtl'] .h1 {
  font-family: 'Almarai', sans-serif;
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

[dir='rtl'] h2,
[dir='rtl'] .h2 {
  font-family: 'Almarai', sans-serif;
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
  line-height: 50px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  width: fit-content;
  height: 50px;
  padding: 0 30px;
  font-family: inherit;
  font-size: inherit;
  border: 0;
  border-radius: 50px;
}

[dir='rtl'] .btn {
  font-weight: 800;
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
</style>
