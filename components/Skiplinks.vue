<template>
  <div class="skip-links">
    <nuxt-link to="#header" :class="null">Aller au menu</nuxt-link>
    <nuxt-link to="#main">Aller au contenu</nuxt-link>
    <nuxt-link to="#footer">Aller au contact</nuxt-link>
  </div>
</template>

<style>
.skip-links {
  position: absolute;
  z-index: 10;
}

.skip-links a {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  background: var(--blue);
  color: var(--dark-blue);
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  height: 25px;
  padding: 5px 10px;
}

.skip-links a:focus {
  position: static;
  overflow: visible;
  clip: auto;
}
</style>
