<script setup lang="ts">
defineProps<{
  path: string
  menu: string
}>()

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <NuxtLink :to="localePath(path)" class="back">
    <NuxtIcon name="arrow" />
    {{ t(menu) }}
  </NuxtLink>
</template>

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
    height: 5px;
    transform: rotate(90deg);
    margin-inline-end: 6px;

    [lang='ar-DZ'] & {
      transform: rotate(-90deg);
    }
  }
}
</style>
