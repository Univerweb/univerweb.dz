<template>
  <header>
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
}
</script>

<style>
header {
  background: var(--white);
  display: flex;
  align-items: center;
  padding: 30px;
}
</style>
