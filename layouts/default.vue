<template>
  <div class="wrapper" :class="{ scrolled: scrolled }">
    <the-skiplinks />
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheSkiplinks from '@/components/TheSkiplinks'
import TheHeader from '@/components/partials/TheHeader'
import TheFooter from '@/components/TheFooter'

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
    let DIR = 'rtl'
    if (this.$i18n.locale !== 'ar') {
      DIR = 'ltr'
    }
    return {
      htmlAttrs: { lang: this.$i18n.locale, dir: DIR },
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: process.env.baseUrl + `${this.$route.path}`
        }
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.baseUrl + `${this.$route.path}`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
/*
** @font-face
*/
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

@font-face {
  font-family: 'Sofia Pro';
  src: url('/fonts/sofiapro-regular.woff2') format('woff2');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Sofia Pro';
  src: url('/fonts/sofiapro-medium.woff2') format('woff2');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Sofia Pro';
  src: url('/fonts/sofiapro-bold.woff2') format('woff2');
  font-style: normal;
  font-weight: 800;
  font-display: swap;
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

/*
** Body
*/
body {
  color: $dark;
  font-family: $font;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  [dir='rtl'] & {
    font-family: $font-arabe;
  }
}

/*
** Page Transition
*/
.page-enter-active,
.page-leave-active {
  transition: opacity $transition;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

/*
** Wrapper
*/
.wrapper {
  display: grid;
  min-height: 100vh;
  height: 100%;
}

/*
** Main
*/
main {
  margin-top: 75px;
  transition: margin-top $transition;
  @media (min-width: $md) {
    & {
      margin-top: 140px;
    }
  }
}

/*
** Container
*/
.container {
  margin: 0 auto;
  padding: 140px 15px;
  @media (min-width: $md) {
    & {
      max-width: calc(#{$md} - 90px);
    }
  }
  @media (min-width: $lg) {
    & {
      max-width: calc(#{$lg} - 400px);
    }
  }
  @media (min-width: $xl) {
    & {
      max-width: calc(#{$xl} - 700px);
    }
  }
}

/*
** Grid
*/
.grid {
  display: grid;
  gap: 30px;
  justify-content: space-between;
  @media (min-width: $sm) {
    & {
      grid-template-columns: repeat(2, 1fr);
      gap: 45px;
    }
  }
  @media (min-width: $md) {
    & {
      gap: 70px;
    }
  }
}

/*
** Hero
*/
.hero {
  min-height: calc(100vh - 75px);
  display: grid;
  align-content: center;
  transition: min-height $transition;
  @media (min-width: $md) {
    & {
      min-height: calc(100vh - 140px);
      .scrolled & {
        min-height: calc(100vh - 75px);
      }
    }
  }
  & .arrow {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 25.71px;
    height: 15px;
    cursor: pointer;
  }
}

/*
** Headings
*/
.h1,
h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  margin: 0 0 30px 0;
  max-width: 680px;
  .hero & {
    margin-bottom: 15px;
  }
  @media (min-width: $sm) {
    & {
      font-size: 3.5rem;
      margin-bottom: 45px;
    }
  }
  @media (min-width: $md) {
    & {
      font-size: 4.5rem;
      margin-bottom: 70px;
      .hero & {
        margin-bottom: 30px;
      }
    }
  }
  @media (min-width: $lg) {
    & {
      font-size: 5.5rem;
    }
  }
  @media (min-width: $xl) {
    & {
      font-size: 6rem;
    }
  }
}

h2,
.h2 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.05em;
  margin: 0 0 20px;
}

h3,
.h3 {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 20px 0 0;
}

h4,
.h4 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h5,
.h5 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
}

h6,
.h6 {
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.2;
}

a {
  color: $dark;
  text-decoration: none;
  transition: color $transition;
}

button {
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
}

.btn {
  display: inline-block;
  text-align: center;
  background: $dark-blue;
  color: $blue;
  font-weight: 500;
  line-height: 50px;
  text-transform: uppercase;
  height: 50px;
  padding: 0 30px;
  border-radius: 50px;
  transition: background-color $transition, color $transition;
  &:hover {
    background: $blue;
    color: $dark-blue;
  }
}

img {
  width: 100%;
  height: auto;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.lead {
  font-size: 1.75rem;
  max-width: 680px;
  margin: 0;
}

.visually-hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  height: 1px;
  width: 1px;
  word-wrap: normal;
}

::selection {
  color: $dark-blue;
  background: $blue;
}
</style>
