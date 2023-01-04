<template>
  <div class="btn switcher">
    <NuxtIcon name="globe" />
    <select v-model="locale" :aria-label="t('label.lang')" @change="setLocale(locale)">
      <option v-for="l in <Array<any>>locales" :key="l.code" :value="l.code">
        {{ l.name }}
      </option>
    </select>
    <NuxtIcon name="arrow" />
  </div>
</template>

<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
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
