<template>
  <header
    id="header"
    class="header"
    :class="{
      opened: $store.state.isOpen && isMobile === true
    }"
  >
    <header-logo />
    <header-menu />
    <header-toggle />
  </header>
</template>

<script>
import HeaderLogo from '@/components/partials/HeaderLogo'
import HeaderMenu from '@/components/partials/HeaderMenu'
import HeaderToggle from '@/components/partials/HeaderToggle'

export default {
  components: {
    HeaderLogo,
    HeaderMenu,
    HeaderToggle
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
  }
}
</script>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  background: $white;
  padding: 15px 15px;
  transition: padding 0.3s;
  z-index: 1;
  .scrolled & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: $md) {
    & {
      grid-template-columns: auto 1fr;
      padding: 45px 45px;
    }
    .scrolled & {
      padding: 15px 45px;
    }
  }
  @media (min-width: $lg) {
    & {
      padding: 45px 135px;
    }
    .scrolled & {
      padding: 15px 135px;
    }
  }
}
</style>
