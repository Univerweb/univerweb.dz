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
    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" fill="currentColor" aria-hidden="true" viewBox="0 0 5 9" role="img">
      <path d="M5 7.333 1.833 4.167 5 1 4.083.083.917 3.25 0 4.167l.917.916L4.083 8.25 5 7.333Z" />
    </svg>
    {{ t(menu) }}
  </NuxtLink>
</template>

<style lang="scss">
.back {
  width: max-content;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.875;
  text-transform: uppercase;
  margin-bottom: 12px;

  &:hover {
    color: $primary;
  }

  svg {
    margin-inline-end: 6px;

    [dir='rtl'] & {
      transform: rotate(-180deg);
    }
  }
}
</style>
