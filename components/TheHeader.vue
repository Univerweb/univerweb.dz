<script setup lang="ts">
const show = useShow()
</script>

<template>
  <header :class="{ show, hide: !show }">
    <HeaderLogo />

    <nav class="nav">
      <HeaderMenu />
      <HeaderSwitchers />
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

  @include media($xs, 24px, 16px);
  @include media($sm, 24px, 24px);
  @include media($lg, 36px, 36px, $template-columns: auto 1fr);

  .scrolled & {
    &:not(.show) {
      box-shadow: 0 0 10px rgba(0 0 0 / 10%);

      .dark-mode & {
        box-shadow: 0 0 10px rgba(255 255 255 / 10%);
      }
    }

    @include media($lg, 24px, 36px);
  }
}

.logo svg {
  display: flex;

  path:first-child {
    fill: $primary;
  }

  path:not(:first-child) {
    fill: $secondary;
    transition: fill $transition;

    .dark-mode & {
      fill: $white;
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

.menu {
  display: grid;
  grid-auto-columns: max-content;
  row-gap: 24px;
  list-style: none;
  margin: 0;
  padding: 48px 0 0;

  @media screen and (orientation: landscape) {
    padding-top: 0;
  }

  @media (min-width: $lg) {
    grid-template-columns: repeat(4, auto);
    justify-content: space-evenly;
    padding: 0;
  }

  a {
    position: relative;
    display: block;

    @include font(20);

    color: var(--text-primary);

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

.switchers {
  display: flex;
  column-gap: 16px;

  > * {
    position: relative;
    background-color: transparent;
    color: var(--text-primary);
    transition: color $transition;
    width: 24px;
    height: 24px;

    &:hover {
      color: $primary;
    }

    svg {
      position: absolute;
      inset: 2px;
    }

    .color-scale-enter-active,
    .color-scale-leave-active {
      transition: transform $transition, opacity $transition;
    }

    .color-scale-enter-from,
    .color-scale-leave-to {
      transform: scaleY(0);
      opacity: 0;
    }
  }
}

.toggle {
  display: grid;

  @media (min-width: $lg) {
    display: none;
  }

  align-content: space-between;
  background-color: transparent;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  outline: none;

  span {
    background-color: $primary;
    height: 3px;
    border-radius: 2em;
    transition: all $transition;
  }

  .middle {
    animation: collapse-middle $animation;
    transform-origin: left;

    .show & {
      animation: collapse-show-middle $animation;
    }
  }

  .top {
    animation: collapse-top $animation;

    .show & {
      animation: collapse-show-top $animation;
    }
  }

  .bottom {
    animation: collapse-bottom $animation;
    transform-origin: left;

    .show & {
      animation: collapse-show-bottom $animation;
      transform-origin: center;
    }
  }
}
</style>
