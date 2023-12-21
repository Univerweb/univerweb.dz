<template>
  <header>
    <HeaderSkip />
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
  justify-content: space-between;
  background-color: var(--bg);
  padding: 24px 12px;
  transition: background-color $transition, padding $transition;
  z-index: 1;

  @include grid(2, auto);
  @include media($xs, 24px, 16px);
  @include media($sm, 24px, 24px);
  @include media($lg, 36px, 36px, $template-columns: auto 1fr);

  .scrolled & {
    box-shadow: 0 0 10px rgba(0 0 0 / 10%);

    .dark-mode & {
      box-shadow: 0 0 10px rgba(255 255 255 / 10%);
    }

    @include media($lg, 24px, 36px);
  }
}

.skip {
  position: absolute;
  inset-block-start: 0;
  background-color: var(--secondary);
  color: var(--primary);
  padding: 0 4px;
  transform:translateY(-100%);
  transition: transform $transition;

  &:focus {
    position: absolute;
    transform:translateY(0);
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
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 72px 24px 24px;
  z-index: -1;
  opacity: 0;
  background-color: var(--bg);
  visibility: hidden;
  transition: background-color $transition, opacity $transition, visibility $transition;

  .open-menu & {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: $lg) {
    grid-template-columns: 1fr auto;
    position: relative;
    padding: 0;
    opacity: 1;
    visibility: visible;
  }
}

.menu {
  display: grid;
  grid-auto-columns: max-content;
  row-gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (orientation: landscape) {
    row-gap: 12px;
  }

  @media (min-width: $lg) {
    grid-template-columns: repeat(4, auto);
    justify-content: space-evenly;
    padding: 0;
  }

  a {
    position: relative;
    display: block;
    color: var(--text-primary);

    @include font(20);

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
      width: 25%;
      height: 3px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform $transition;

      [lang='ar-DZ'] & {
        transform-origin: right;
      }
    }

    &:hover::after,
    &.active::after {
      transform: scaleX(1);
    }
  }
}

.switchers {
  position: relative;
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;

  .lang {
    position: absolute;
    inset-inline-end: 30px;
    width: max-content;
    font-size: 13px;
    line-height: 24px;
    opacity: 0;
    z-index: -1;

    &.active {
      animation: lang 2s ease-in-out;

      [lang='ar-DZ'] & {
        animation-direction: reverse;
      }
    }
  }

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
      transition: transform 150ms linear, opacity 150ms linear;
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

    .open-menu & {
      animation: collapse-show-middle $animation;
    }
  }

  .top {
    animation: collapse-top $animation;

    .open-menu & {
      animation: collapse-show-top $animation;
    }
  }

  .bottom {
    animation: collapse-bottom $animation;
    transform-origin: left;

    .open-menu & {
      animation: collapse-show-bottom $animation;
      transform-origin: center;
    }
  }
}
</style>
