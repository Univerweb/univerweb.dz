<template>
  <div class="skip-links">
    <nuxt-link to="#header">Aller au menu</nuxt-link>
    <nuxt-link to="#main">Aller au contenu</nuxt-link>
    <nuxt-link to="#footer">Aller au contact</nuxt-link>
  </div>
</template>

<style lang="scss">
.skip-links {
  position: absolute;
  z-index: 10;
  & a {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    background: $blue;
    color: $dark-blue;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    height: 25px;
    padding: 5px 10px;
    &:focus {
      position: static;
      overflow: visible;
      clip: auto;
    }
  }
}
</style>
