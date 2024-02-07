<script setup lang="ts">
import type { Link } from '../types'

const { t, tm, rt, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { isArabic } = useLocale()
const show = useShow()
const color = useColorMode()

const lang = computed(() => locale.value === 'fr' ? ['en', 'Français'] : locale.value === 'en' ? ['ar', 'English'] : ['fr', 'العربية'])
const isLang = ref(false)

function addClass() {
  isLang.value = true

  setTimeout(() => {
    isLang.value = false
  }, 2000)
}

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header>
    <a href="#main" class="skip">
      {{ t('skip') }}
    </a>

    <NuxtLink :to="localePath('/')" :title="t('name')" class="logo">
      <svg v-if="isArabic" xmlns="http://www.w3.org/2000/svg" width="155.07" height="24" aria-hidden="true" viewBox="0 0 155.07 24" role="img">
        <path d="M149.85 13.57c2.88 0 5.22 2.34 5.22 5.22s-2.34 5.22-5.22 5.22-5.22-2.34-5.22-5.22a5.224 5.224 0 0 1 5.22-5.22M149.85 0c2.88 0 5.22 2.34 5.22 5.22s-2.34 5.22-5.22 5.22-5.22-2.34-5.22-5.22c.01-2.88 2.34-5.22 5.22-5.22M136.29 13.57c2.88 0 5.22 2.34 5.22 5.22s-2.34 5.22-5.22 5.22-5.22-2.34-5.22-5.22c0-2.89 2.34-5.22 5.22-5.22" />
        <path d="M92.53 15.2h-6.58V6.29h-3.54v8.91h-6.67V6.29H71.5c-2.18 0-3.88.52-5.11 1.56-1.22 1.04-1.83 2.45-1.83 4.22 0 1.18.38 2.23 1.15 3.13H59.3V0h-3.54v18.06H89.5c.01 0 .01 0 .02-.01.01 0 .01.01.02.01h6.51V6.29h-3.54v8.91zm-20.34 0h-.67c-1.08 0-1.9-.26-2.47-.77-.57-.51-.85-1.24-.85-2.18 0-1.01.29-1.79.88-2.32.59-.53 1.42-.79 2.48-.79h.63v6.06zM114.8 20.58c-.5 0-.88.15-1.17.46-.28.31-.42.73-.42 1.26s.14.94.43 1.25c.29.31.67.46 1.16.46.47 0 .85-.15 1.14-.45.29-.3.43-.72.43-1.26s-.14-.96-.42-1.26c-.28-.31-.66-.46-1.15-.46zM117.04 6.29v8.91h-7.15V6.29h-3.61c-1.5 0-2.82.25-3.97.75s-2.03 1.23-2.66 2.18c-.63.95-.94 2.05-.94 3.3 0 1.77.46 3.14 1.37 4.1.91.96 2.22 1.44 3.91 1.44h2.36v.12c0 .86-.24 1.53-.73 2.02s-1.18.74-2.08.74c-.62 0-1.21-.07-1.79-.2-.57-.14-1.18-.37-1.82-.7l-1.38 2.59c.73.43 1.48.73 2.27.9.79.17 1.72.25 2.79.25 2 0 3.54-.5 4.64-1.5 1.09-1 1.64-2.4 1.64-4.21h10.68V6.29h-3.53zm-10.69 8.91h-1.64c-.8 0-1.39-.22-1.78-.67-.39-.45-.58-1.15-.58-2.1 0-1.04.28-1.85.85-2.43.57-.57 1.36-.86 2.37-.86h.77v6.06zM118.84 20.58c-.49 0-.88.15-1.17.46-.28.31-.42.73-.42 1.26s.14.94.43 1.25c.29.31.67.46 1.16.46.47 0 .85-.15 1.14-.46.29-.31.43-.72.43-1.25s-.14-.95-.42-1.26c-.27-.31-.66-.46-1.15-.46z M1.43 15.32c-.83 0-1.43.62-1.43 1.5 0 .86.57 1.5 1.38 1.5h.02c.88 0 1.43-.64 1.43-1.5 0-.88-.57-1.5-1.4-1.5zM14.27 20.58c-.5 0-.9.15-1.18.46-.28.31-.42.73-.42 1.26s.14.94.43 1.25c.29.31.68.46 1.17.46.46 0 .84-.15 1.13-.46.29-.31.43-.72.43-1.25 0-.54-.14-.96-.42-1.26-.28-.31-.66-.46-1.14-.46zM18.72 15.2H11c-.67 0-1.21-.22-1.62-.67-.41-.45-.61-1.04-.61-1.78 0-1.04.12-2.08.36-3.11H5.99c-.23.47-.42 1.05-.56 1.72-.14.68-.21 1.31-.21 1.91 0 1.49.42 2.65 1.27 3.5.85.85 2 1.28 3.46 1.28h12.31V6.29h-3.55v8.91zM25.63 0h3.54v18.06h-3.54zM43.15 6.29h-3.61c-1.5 0-2.82.25-3.97.75-1.15.5-2.03 1.23-2.66 2.18-.63.95-.94 2.05-.94 3.3 0 1.77.46 3.14 1.37 4.1.91.96 2.22 1.44 3.91 1.44h2.36v.12c0 .86-.24 1.53-.73 2.02s-1.18.74-2.08.74c-.62 0-1.21-.07-1.79-.2-.57-.14-1.18-.37-1.82-.7l-1.38 2.59c.73.43 1.48.73 2.27.9.79.17 1.72.25 2.79.25 2 0 3.54-.49 4.64-1.47 1.09-.98 1.64-2.37 1.64-4.17V6.29zm-3.54 8.91h-1.64c-.8 0-1.39-.22-1.78-.67-.39-.45-.58-1.15-.58-2.1 0-1.04.28-1.85.85-2.43.57-.57 1.36-.86 2.37-.86h.77v6.06zM48.86 18.27c0 .74-.19 1.34-.58 1.83-.39.48-.9.73-1.53.73-.45 0-.83-.05-1.15-.15-.32-.1-.69-.28-1.11-.55l-1.43 2.31c.75.5 1.46.85 2.14 1.04.68.19 1.42.29 2.23.29 1.51 0 2.71-.48 3.62-1.44.9-.96 1.35-2.26 1.35-3.89V6.29h-3.54v11.98zM71.24 4.25c.46 0 .84-.15 1.13-.46s.43-.72.43-1.25c0-.54-.14-.96-.42-1.26-.28-.3-.66-.45-1.14-.45-.5 0-.9.15-1.18.46-.28.31-.42.73-.42 1.26s.14.94.43 1.25.68.45 1.17.45zM81.91 20.58c-.5 0-.88.15-1.17.46-.28.31-.42.73-.42 1.26s.14.94.43 1.25c.29.31.67.46 1.16.46.47 0 .85-.15 1.14-.45.29-.3.43-.72.43-1.26s-.14-.96-.42-1.26c-.28-.31-.66-.46-1.15-.46zM85.95 20.58c-.49 0-.88.15-1.17.46-.28.31-.42.73-.42 1.26s.14.94.43 1.25c.29.31.67.46 1.16.46.47 0 .85-.15 1.14-.46.29-.31.44-.72.44-1.25s-.14-.95-.42-1.26c-.28-.31-.66-.46-1.16-.46zM94.27 4.25c.46 0 .84-.15 1.13-.46.29-.31.44-.72.44-1.25 0-.54-.14-.96-.42-1.26-.28-.3-.66-.45-1.14-.45-.5 0-.9.15-1.18.46-.28.31-.42.73-.42 1.26s.14.94.43 1.25.66.45 1.16.45z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="193.77" height="24" aria-hidden="true" viewBox="0 0 193.77 24" role="img">
        <path d="M10.43 18.78c0 2.88-2.34 5.22-5.22 5.22C2.34 24 0 21.66 0 18.78s2.34-5.22 5.22-5.22c2.88.01 5.21 2.34 5.21 5.22M24 18.78c0 2.88-2.34 5.22-5.22 5.22s-5.22-2.34-5.22-5.22 2.34-5.22 5.22-5.22c2.88.01 5.22 2.34 5.22 5.22M10.43 5.22c0 2.88-2.34 5.22-5.22 5.22C2.34 10.43 0 8.1 0 5.22S2.34 0 5.22 0s5.21 2.34 5.21 5.22" />
        <path d="M46.15 23.37v-2.06C45.04 22.99 43.02 24 40.96 24c-3.96 0-6.52-2.91-6.52-6.9V7.28h3.45v9.56c0 2.37 1.39 4.08 3.83 4.08 2.37 0 4.4-1.84 4.4-4.4V7.28h3.42v16.08h-3.39zM56.28 7.28v2.06c1.14-1.68 3.13-2.69 5.22-2.69 3.93 0 6.49 2.91 6.49 6.9v9.82h-3.42V13.8c0-2.37-1.42-4.08-3.83-4.08s-4.4 1.84-4.4 4.4v9.25h-3.45V7.28h3.39zM70.86 2.56c0-1.2.89-2.06 2.15-2.06 1.23 0 2.12.85 2.12 2.06 0 1.23-.89 2.12-2.12 2.12-1.26.01-2.15-.88-2.15-2.12m3.86 20.81H71.3V7.28h3.42v16.09zM82.55 23.37 76.67 7.28h3.67l4.62 13.43 4.66-13.43h3.7L87.4 23.37zM102.27 6.65c5 0 8.55 3.55 8.55 8.52 0 .38-.03.85-.06 1.23l-13.56-.03c.41 2.85 2.41 4.75 5.03 4.75 2.15 0 4.15-1.27 4.75-3.04l3.23.48c-.92 3.17-4.24 5.45-7.92 5.45-5.03 0-8.64-3.7-8.64-8.87 0-4.95 3.61-8.49 8.62-8.49m4.97 7.19c-.38-2.53-2.41-4.31-5.07-4.31-2.6 0-4.5 1.74-4.94 4.31h10.01zM116.66 7.28v2.06c.98-1.65 2.53-2.63 4.37-2.63.63 0 1.36.16 2.06.41v3.07a6.77 6.77 0 0 0-2.5-.51c-2.28 0-3.8 2.03-3.8 4.88v8.8h-3.45V7.28h3.32zM129.57 23.37l-5.19-16.09h3.58l4.02 12.7 3.54-12.7h3.65l3.67 12.76 3.96-12.76h3.54l-5.25 16.09h-4.53l-3.2-12.1-3.26 12.1zM159.56 6.65c5 0 8.55 3.55 8.55 8.52 0 .38-.03.85-.06 1.23l-13.55-.03c.41 2.85 2.41 4.75 5.03 4.75 2.15 0 4.15-1.27 4.75-3.04l3.23.48c-.92 3.17-4.24 5.45-7.92 5.45-5.03 0-8.64-3.7-8.64-8.87-.01-4.95 3.6-8.49 8.61-8.49m4.97 7.19c-.38-2.53-2.41-4.31-5.07-4.31-2.6 0-4.5 1.74-4.94 4.31h10.01zM179.91 24c-2.47 0-4.53-1.08-5.92-2.88v2.25h-3.36V0h3.45v9.47c1.36-1.77 3.42-2.82 5.83-2.82 4.69 0 8.07 3.64 8.07 8.68 0 5.03-3.42 8.67-8.07 8.67m-5.95-8.68c0 3.13 2.22 5.45 5.29 5.45 3.04 0 5.32-2.25 5.32-5.45 0-3.13-2.25-5.45-5.32-5.45-3.08.01-5.29 2.32-5.29 5.45M189.53 21.69c0-1.2.89-2.06 2.12-2.06 1.27 0 2.12.85 2.12 2.06 0 1.23-.85 2.12-2.12 2.12-1.23 0-2.12-.89-2.12-2.12" />
      </svg>
      <span class="visually-hidden">{{ t('name') }}</span>
    </NuxtLink>

    <nav class="nav" :style="{ '--item-total': tm('menu').length }">
      <ul class="menu">
        <li v-for="(item, index) in (tm('menu') as Link[])" :key="index">
          <NuxtLink :to="localePath(rt(item.path))" active-class="active" @click="show = false">
            {{ rt(item.label) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="switchers">
      <NuxtLink :to="switchLocalePath(lang[0])" @click="addClass">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <path d="m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z" />
        </svg>
        <span class="lang" :class="{ active: isLang }">
          {{ lang[1] }}
        </span>
      </NuxtLink>

      <button type="button" :aria-label="t(`colorMode.${color.preference}`)" @click="toggleDark">
        <Transition name="color-scale" mode="out-in">
          <svg v-if="$colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" viewBox="0 0 24 24" role="img">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </Transition>
      </button>

      <button type="button" :aria-label="t('toggle')" class="toggle" @click="show = !show">
        <span class="top" />
        <span class="middle" />
        <span class="bottom" />
      </button>
    </div>
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  justify-content: space-between;
  background-color: var(--bg);
  padding: 12px;
  transition: background-color $transition, padding $transition;
  z-index: 1;

  @include grid(2, auto);
  @include media($xs, 16px);
  @include media($sm, 24px);
  @include media($md, 36px, $template-columns: repeat(3, auto));

  .scrolled & {
    box-shadow: 0 0 10px rgba(var(--shadow));

    @include media($md, 24px 36px);
  }
}

.skip {
  position: absolute;
  top: 0;
  background-color: var(--secondary);
  color: var(--primary);
  padding: 0 4px;
  transform: translateY(-150%);
  transition: transform $transition;

  &:focus {
    transform: translateY(0);
  }
}

.logo {
  overflow: hidden;
  width: 24px;

  @media (min-width: $xs) {
    width: fit-content;
  }

  svg {
    display: flex;

    @media (min-width: $xs) {
      width: fit-content;
      height: 20px;
    }

    @media (min-width: $sm) {
      height: 24px;
    }
  }

  path:nth-child(1) {
    fill: $primary;
  }

  path:nth-child(2) {
    fill: $secondary;
    transition: fill $transition;

    .dark-mode & {
      fill: $white;
    }
  }
}

.nav {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 32px;
  opacity: 0;
  background-color: var(--bg);
  visibility: hidden;
  overflow-y: scroll;
  transition: opacity $transition, background-color $transition;

  .open-menu & {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: $xs) {
    padding: 48px;
  }

  @media (min-width: $md) {
    position: relative;
    display: grid;
    align-items: center;
    padding: 0;
    opacity: 1;
    visibility: visible;
  }
}

.menu {
  display: grid;
  grid-auto-columns: max-content;
  row-gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: gap $transition;

  @include media($md,$gap: 24px, $template-columns: repeat(var(--item-total), auto));
  @include media($lg, $gap: 48px);
  @include media($xl, $gap: 64px);
  @include media($xxl, $gap: 128px);

  a {
    position: relative;
    display: block;
    color: var(--text-primary);

    @include font(28);

    @media (min-width: $md) {
      @include font(14);
    }

    @media (min-width: $lg) {
      @include font(16);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      background-color: $primary;
      width: 25%;
      height: 3px;
      transform: scaleX(0);
      transform-origin: var(--transform-origin);
      transition: transform $transition;
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
  align-items: center;
  column-gap: 16px;

  > * {
    background-color: transparent;
    color: var(--text-primary);
    transition: color $transition;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    outline: none;

    &.toggle {
      display: grid;
      align-content: space-between;
      padding: 2px;

      @media (min-width: $md) {
        display: none;
      }

      span {
        background-color: currentColor;
        height: 2px;
        border-radius: 2em;
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

    .open-menu &:not(.toggle) {
      z-index: -1;
    }
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

  .lang {
    position: absolute;
    inset-inline-end: calc(100% + 8px);
    width: max-content;
    font-size: 13px;
    line-height: 24px;
    opacity: 0;
    visibility: hidden;

    &.active {
      visibility: visible;
      animation: lang 2s ease-in-out;

      [lang='ar-DZ'] & {
        animation-direction: reverse;
      }
    }
  }
}
</style>
