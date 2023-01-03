<template>
  <div v-if="switcher" class="btn switcher">
    <NuxtIcon name="globe" />
    <select v-model="locale" :aria-label="switcher.label.lang" @change="setLocale(locale)">
      <option v-for="locale in locales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
    <NuxtIcon name="arrow" />
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const { data: switcher } = await useAsyncData('switcher', () => queryContent(locale.value, 'global').only(['menu', 'label']).findOne())
</script>

<style lang="scss">
.switcher {
  padding: 0 12px;
  .globe {
    margin-inline-end: -28px;
    margin-inline-start: 12px;
  }
  select {
    background-color: transparent;
    color: currentColor;
    appearance: none;
    padding: 0 24px;
    height: 48px;
    border: 0;
    font-family: var(--fontMedium);
    font-size: initial;
    cursor: pointer;
    outline: 0;
    z-index: 2;
    option {
      color: initial;
    }
  }
  .arrow {
    height: 8px;
    margin-inline-start: -25px;
  }
  &:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
}
</style>
