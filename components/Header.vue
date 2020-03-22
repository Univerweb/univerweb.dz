<template>
  <header id="header" class="header">
    <Logo />
    <Toggler />
    <Menu />
  </header>
</template>

<script>
import Logo from '~/components/header/Logo.vue'
import Toggler from '~/components/header/Toggler.vue'
import Menu from '~/components/header/Menu.vue'

export default {
  components: {
    Logo,
    Toggler,
    Menu
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('scroll', function() {
        const headerScrolled = document.getElementById('header')
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
  grid-row-gap: 45px;
  justify-content: space-around;
  background: var(--white);
  padding: 50px 15px;
  transition: padding 0.3s;
  /* height: 100vh;
  z-index: 1; */
}

@media (min-width: 992px) {
  header {
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 50px 100px;
    /* height: initial; */
  }

  .header.scrolled {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  header.scrolled:not(.opened-menu) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
