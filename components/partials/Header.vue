<template>
  <header
    id="header"
    class="header"
    :class="{
      opened: $store.state.isOpen && isMobile === true
    }"
  >
    <uniLogo />
    <uniToggler />
    <uniMenu />
  </header>
</template>

<script>
import uniLogo from '@//components/partials/HeaderLogo'
import uniToggler from '@//components/partials/HeaderToggler'
import uniMenu from '@//components/partials/HeaderMenu'

export default {
  components: {
    uniLogo,
    uniToggler,
    uniMenu
  },

  data() {
    return {
      windowWidth: null
    }
  },

  computed: {
    isMobile() {
      return this.windowWidth < 1024
    }
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })

    // Code ringard pour le redimensionnement du padding à scrollTop = 0
    this.$nextTick(function() {
      window.addEventListener('scroll', function() {
        const headerScrolled = document.querySelector('header')
        const headerClasses = headerScrolled.classList
        if (document.documentElement.scrollTop >= 1) {
          if (headerClasses.contains('scrolled') === false) {
            headerClasses.toggle('scrolled')
          }
        } else if (headerClasses.contains('scrolled') === true) {
          headerClasses.toggle('scrolled')
        }
      })
    })
  }
}
</script>

<style>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  padding: 15px;
  transition: padding 0.3s;
  z-index: 1;
}

@media (min-width: 1024px) {
  header {
    grid-template-columns: auto 1fr;
    padding: 45px 135px;
  }
}

.scrolled:not(.opened) {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (min-width: 1024px) {
  .scrolled {
    padding: 15px 135px;
  }
}
</style>
