<template>
  <nuxt-link
    :to="localePath('/')"
    :title="$t('links.home')"
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

<style lang="scss">
.logo svg {
  display: block;
  height: 25px;
  g:first-child {
    fill: $blue;
  }
  g:last-child {
    fill: $dark-blue;
    transition: fill $transition;
    .opened & {
      fill: $white;
    }
  }
}
</style>
