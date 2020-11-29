<template>
  <nuxt-link :to="localePath('realisations')" class="back"
    ><nav-arrow />{{ $t('menu.realisations') }}</nuxt-link
  >
</template>

<script>
import NavArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    NavArrow
  }
}
</script>

<style lang="scss">
.back {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  line-height: 1.875;
  text-transform: uppercase;
  margin-bottom: 12px;
  [lang='ar'] & {
    font-family: $font-arabe;
  }
  &:hover {
    color: $blue;
  }
  .arrow {
    fill: currentColor;
    height: 5px;
    transform: rotate(90deg);
    margin-right: 6px;
    margin-bottom: 2px;
    [lang='ar'] & {
      transform: rotate(-90deg);
      margin-right: 0;
      margin-left: 6px;
    }
  }
}
</style>
