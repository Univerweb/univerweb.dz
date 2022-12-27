<template>
  <NuxtLink :to="localePath('realisations')" class="back">
    <NuxtIcon name="arrow" />
    {{ title }}
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()

const { data } = await useAsyncData('workBack', () => queryContent(locale.value, 'global').only(['menu']).findOne())

const title = data.value!.menu[0].title
</script>

<style lang="scss">
.back {
  width: max-content;
  font-family: var(--fontMedium);
  font-size: 0.8rem;
  line-height: 1.875;
  text-transform: uppercase;
  margin-bottom: 12px;
  &:hover {
    color: $primary;
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
