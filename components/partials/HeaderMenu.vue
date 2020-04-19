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
          {{ $t('links.agency') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('contact')" exact @click.native="close">
          {{ $t('links.contact') }}
        </nuxt-link>
      </li>
    </ul>
    <header-lang />
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import HeaderLang from '@/components/partials/HeaderLang'

export default {
  components: {
    HeaderLang
  },

  methods: mapActions(['close'])
}
</script>

<style lang="scss">
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
  .opened & {
    display: grid;
    background: $dark-blue;
    opacity: 1;
    pointer-events: auto;
  }
  @media (min-width: $md) {
    & {
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
  & ul {
    display: grid;
    grid-template-columns: min-content;
    row-gap: 30px;
    margin: 0;
    padding: 45px 0 0;
    list-style: none;
    @media (min-width: $md) {
      & {
        grid-template-columns: repeat(4, auto);
        justify-content: space-around;
        padding: 0;
      }
    }
  }
  & a {
    position: relative;
    display: block;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    .opened & {
      color: $white;
    }
    @media (min-width: $md) {
      & {
        font-size: 1rem;
        text-align: center;
      }
    }
    &::after {
      position: absolute;
      display: block;
      content: '';
      color: $blue;
      border-top: 3px solid;
      width: 0%;
      transition: width 0.3s;
    }
    &:hover::after,
    &.nuxt-link-active::after {
      width: 25%;
    }
  }
}
</style>
