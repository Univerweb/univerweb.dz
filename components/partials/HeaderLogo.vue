<template>
  <nuxt-link
    :to="localePath('/')"
    title="Accueil"
    class="logo"
    exact
    @click.native="close"
  >
    <span class="visually-hidden">Accueil</span>
    <logo-arabe v-if="$i18n.locale === 'ar'" />
    <logo-latin v-else />
  </nuxt-link>
</template>

<script>
import { mapActions } from 'vuex'
import LogoLatin from '@/components/svg/LogoLatin'
import LogoArabe from '@/components/svg/LogoArabe'

export default {
  components: {
    LogoLatin,
    LogoArabe
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
