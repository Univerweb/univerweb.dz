<template>
  <NuxtLink v-if="locale === 'fr'" :to="switchLocalePath('en')" :title="t('switcher')" class="langSwitcher">
    <NuxtIcon name="globe" />
    <span class="visually-hidden">{{ locales[2].name }}</span>
  </NuxtLink>

  <NuxtLink v-if="locale === 'en'" :to="switchLocalePath('ar')" :title="t('switcher')" class="langSwitcher">
    <NuxtIcon name="globe" />
    <span class="visually-hidden">{{ locales[1].name }}</span>
  </NuxtLink>

  <NuxtLink v-if="locale === 'ar'" :to="switchLocalePath('fr')" :title="t('switcher')" class="langSwitcher">
    <NuxtIcon name="globe" />
    <span class="visually-hidden">{{ locales[0].name }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss">
.langSwitcher {
  color: var(--secondary);
  transition: color $transition;
  &:hover {
    color: var(--primary);
    .dark-mode & {
      color: var(--white);
    }
  }
}
</style>
