<template>
  <div class="skip-links">
    <button v-scroll-to="'header'">Aller au menu</button>
    <button v-scroll-to="'main'">Aller au contenu</button>
    <button v-scroll-to="'footer'">Aller au contact</button>
  </div>
</template>

<style lang="scss">
.skip-links {
  position: absolute;
  z-index: 10;
  button {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    background-color: $secondary;
    color: $primary;
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
