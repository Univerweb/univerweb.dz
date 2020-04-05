<template>
  <nuxt-link
    :to="localePath('/')"
    title="Accueil"
    class="logo"
    exact
    @click.native="close"
  >
    <span class="visually-hidden">Accueil</span>
    <uni-univerweb-ar v-if="$i18n.locale === 'ar'" />
    <uni-univerweb v-else />
  </nuxt-link>
</template>

<script>
import { mapActions } from 'vuex'
import uniUniverweb from '@/components/svg/Univerweb'
import uniUniverwebAr from '@/components/svg/UniverwebAr'

export default {
  components: {
    uniUniverweb,
    uniUniverwebAr
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
