<template>
  <nav class="menu">
    <ul>
      <li>
        <nuxt-link :to="localePath('realisations')" exact @click.native="close">
          {{ $t('links.works') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('prestations')" exact @click.native="close">
          {{ $t('links.prestations') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('agence')" exact @click.native="close">
          {{ $t('links.agence') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('contact')" exact @click.native="close">
          {{ $t('links.contact') }}
        </nuxt-link>
      </li>
    </ul>
    <uniLang />
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import uniLang from '@/components/partials/HeaderLang'

export default {
  components: {
    uniLang
  },

  methods: mapActions(['close'])
}
</script>

<style>
.menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  align-content: space-between;
  padding: 115px 15px 45px;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.opened .menu {
  display: grid;
  background: var(--dark-blue);
  opacity: 1;
  pointer-events: auto;
}

@media (min-width: 1024px) {
  .menu {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    position: initial;
    height: initial;
    padding: 0;
    opacity: 1;
    pointer-events: auto;
  }
}

.menu ul {
  display: grid;
  grid-template-columns: min-content;
  row-gap: 30px;
  margin: 0;
  padding: 45px 0 0;
  list-style: none;
}

@media (min-width: 1024px) {
  .menu ul {
    grid-template-columns: repeat(4, auto);
    justify-content: space-around;
    padding: 0;
  }
}

.menu a {
  position: relative;
  display: block;
  color: var(--dark);
  font-size: 24px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

[dir='rtl'] .menu a {
  font-family: 'Almarai', sans-serif;
  font-weight: 800;
}

@media (min-width: 1024px) {
  .menu a {
    font-size: inherit;
    text-align: center;
  }
}

.opened .menu a {
  color: var(--white);
}

.menu li a::after {
  position: absolute;
  display: block;
  content: '';
  color: var(--blue);
  border-top: 3px solid;
  width: 0%;
  transition: width 0.3s;
}

.menu li a:hover::after,
.menu li a.nuxt-link-active::after {
  width: 25%;
}
</style>
