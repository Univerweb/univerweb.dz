<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const show = useShow()
</script>

<template>
  <NuxtLink :to="localePath('/')" :title="t('name')" class="logo" @click="show = false">
    <NuxtIcon v-if="locale === 'ar'" name="logo-arabic" />
    <NuxtIcon v-else name="logo-latin" />
    <span class="visually-hidden">{{ t('name') }}</span>
  </NuxtLink>
</template>

<style lang="scss">
.logo svg {
  display: flex;
  width: auto;
  height: auto;

  g:first-child {
    color: $primary;
  }

  g:last-child {
    color: $secondary;
    transition: color $transition;

    .dark-mode & {
      color: $white;
    }
  }

}
</style>
