<template>
  <nav v-if="nav" class="menu">
    <ul>
      <li v-for="item in nav.menu">
        <NuxtLink :to="localePath(item.path)">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>

    <div class="btn lang">
      <NuxtIcon name="globe" />
      <select v-model="locale" :aria-label="nav.label.lang" @change="setLocale(locale)">
        <option v-for="locale in locales" :key="locale.code" :value="locale.code">
          {{ locale.name }}
        </option>
      </select>
      <NuxtIcon name="arrow" />
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const { data: nav } = await useAsyncData('nav', () => queryContent(locale.value, 'global').only(['menu', 'label']).findOne())
</script>

<style lang="scss">
.menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-content: space-between;
  padding: 72px 24px 24px;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  background-color: var(--bg);
  transition: background-color $transition;
  .show & {
    display: grid;
    height: 100%;
    opacity: 1;
    pointer-events: auto;
  }
  @media (min-width: $lg) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    position: initial;
    height: initial;
    padding: 0;
    opacity: 1;
    pointer-events: auto;
  }
  ul {
    display: grid;
    grid-auto-columns: max-content;
    row-gap: 24px;
    margin: 0;
    padding: 48px 0 0;
    @media screen and (orientation: landscape) {
      padding-top: 24px;
    }
    list-style: none;
    @media (min-width: $lg) {
      grid-template-columns: repeat(4, auto);
      justify-content: space-around;
      padding: 0;
    }
  }
  a {
    position: relative;
    display: block;
    font-family: var(--fontMedium);
    @include size(20);
    color: var(--textPrimary);
    @media (min-width: $lg) {
      font-size: 1rem;
      line-height: 1.5;
      text-align: center;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      background-color: $primary;
      width: 0%;
      height: 3px;
      transition: width $transition;
    }
    &:hover::after,
    &.router-link-active::after {
      width: 25%;
    }
  }
}

.lang {
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
