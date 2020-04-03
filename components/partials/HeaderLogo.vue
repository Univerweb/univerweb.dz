<template>
  <nuxt-link
    :to="$i18n.path('')"
    title="Accueil"
    class="logo"
    exact
    @click.native="close"
  >
    <span class="visually-hidden">Accueil</span>
    <uni-univerweb />
  </nuxt-link>
</template>

<script>
import { mapActions } from 'vuex'
import uniUniverweb from '@/components/svg/Univerweb'

export default {
  components: {
    uniUniverweb
  },

  methods: mapActions(['close'])
}
</script>

<style>
.logo svg {
  display: block;
  height: 25px;
}

.logo svg g:last-child {
  transition: fill 0.3s;
}

.opened .logo svg g:last-child {
  fill: var(--white);
}
</style>
