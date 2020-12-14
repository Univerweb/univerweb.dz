<template>
  <div v-if="name === true" class="more">
    <NuxtLink :to="localePath('realisations')" class="btn">{{ $t('label.more') }}<HomeArrow /></NuxtLink>
  </div>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
  },

  data() {
    let name = 'index___' + this.$i18n.locale
    if (this.$route.name === name) {
      name = true
    }

    return { name }
  }
}
</script>

<style lang="scss">
.more {
  display: grid;
  margin-top: 48px;
  .btn {
    justify-self: end;
    .arrow {
      fill: currentColor;
      height: 8px;
      margin-bottom: 2px;
      transform: rotate(-90deg);
      [lang='ar'] & {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
