<template>
  <header
    id="header"
    class="scrolled"
    :class="$store.state.open ? 'menu--opened' : 'menu--closed'"
  >
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
  }

  // data() {
  //   return {
  //     open: false
  //   }
  // }

  // mounted() {
  //   this.$nextTick(function() {
  //     window.addEventListener('scroll', function() {
  //       const headerScrolled = document.getElementById('header')
  //       const headerClasses = headerScrolled.classList
  //       if (document.documentElement.scrollTop >= 1) {
  //         if (headerClasses.contains('scrolled') === false) {
  //           headerClasses.toggle('scrolled')
  //         }
  //       } else if (headerClasses.contains('scrolled') === true) {
  //         headerClasses.toggle('scrolled')
  //       }
  //     })
  //   })
  // }
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
  background: var(--white);
  padding: 45px 15px;
  transition: padding 0.3s;
  z-index: 1;
}

@media (min-width: 1024px) {
  header {
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 45px 135px;
  }
}

.menu--closed.scrolled {
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.toggler.btn {
  height: 25px;
  padding: 0 10px;
  font-size: 13px;
}

@media (min-width: 1024px) {
  .toggler.btn {
    display: none;
  }
  .toggler.btn:hover {
    background: var(--dark-blue);
  }
}
</style>
