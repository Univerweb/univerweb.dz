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

  @include grid(2, auto);

  justify-content: space-between;
  align-items: center;
  background-color: var(--bg);
  padding: 24px 12px;
  transition: background-color $transition, padding $transition;
  z-index: 100;

  .scrolled &:not(.show) {
    box-shadow: 0 0 10px rgba(0 0 0 / 10%);

    .dark-mode & {
      box-shadow: 0 0 10px rgba(255 255 255 / 10%);
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
    grid-template-rows: 1fr auto;
    align-items: start;
    height: 100%;
    opacity: 1;
    pointer-events: auto;

    @media screen and (orientation: landscape) {
      align-items: center;
    }
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
  column-gap: 16px;

  .switcher {
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: var(--text-primary);
    transition: color $transition;
    width: 24px;
    height: 24px;

    &:hover {
      color: $primary;
    }
  }
}
</style>
