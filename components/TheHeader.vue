<script setup lang="ts">
const show = useShow()
</script>

<template>
  <header :class="{ show, hide: !show }">
    <HeaderLogo />

    <nav class="nav">
      <HeaderMenu />

      <div class="switchers">
        <HeaderLangSwitch />
        <HeaderColorSwitch />
      </div>
    </nav>

    <HeaderToggle />
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg);
  padding: 24px 12px;
  transition: background-color $transition, padding $transition;
  z-index: 100;

  .scrolled &:not(.show) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .dark-mode & {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }
  }

  @media (min-width: $xs) {
    padding: 24px 16px;
  }

  @media (min-width: $sm) {
    padding: 24px;
  }

  @media (min-width: $lg) {
    grid-template-columns: auto 1fr;
    padding: 36px;

    .scrolled & {
      padding-block: 24px;
    }
  }
}

.nav {
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
}

.switchers {
  display: flex;
  column-gap: 12px;

  .switcher {
    position: relative;
    background-color: transparent;
    color: var(--textPrimary);
    transition: color $transition;
    padding: 0;
    width: 16px;
    height: 16px;

    &:hover {
      color: $primary;
    }

    .nuxt-icon svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
