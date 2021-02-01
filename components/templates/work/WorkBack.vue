<template>
  <NuxtLink :to="localePath('realisations')" class="back"><NavArrow />{{ $t('menu.realisations') }}</NuxtLink>
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
  [lang='ar-DZ'] & {
    font-family: $font-arabic;
  }
  &:hover {
    color: $secondary;
  }
  .arrow {
    fill: currentColor;
    height: 5px;
    transform: rotate(90deg);
    margin-inline-end: 6px;
    margin-bottom: 2px;
    [lang='ar-DZ'] & {
      transform: rotate(-90deg);
    }
  }
}
</style>
