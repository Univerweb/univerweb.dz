<template>
  <header :class="{ show: show }">
    <NuxtLink :to="localePath('/')" :title="$t('name')" class="logo" @click.native="show = false">
      <span class="visually-hidden">{{ $t('name') }}</span>
      <LogoArabic v-if="$i18n.locale === 'ar'" />
      <LogoLatin v-else />
    </NuxtLink>
    <nav class="menu">
      <ul>
        <li v-for="(value, name) in $t('menu')" :key="name">
          <NuxtLink :to="localePath(name)" @click.native="show = false">{{ value }}</NuxtLink>
        </li>
      </ul>
      <div class="btn lang">
        <LangGlobe />
        <select v-model="lang" :aria-label="$t('label.lang')" @change="onChange(lang)">
          <option v-for="locale in $i18n.locales" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
        </select>
        <LangArrow />
      </div>
    </nav>
    <button type="button" :aria-label="$t('label.menu')" class="toggle" @click="isShow">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </button>
  </header>
</template>

<script>
import LogoLatin from '@/static/logos/univerweb.svg?inline'
import LogoArabic from '@/static/logos/univerweb-ar.svg?inline'
import LangGlobe from '@/assets/icons/globe.svg?inline'
import LangArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    LogoLatin,
    LogoArabic,
    LangGlobe,
    LangArrow
  },

  data() {
    return {
      show: false,
      lang: ''
    }
  },

  head() {
    return {
      htmlAttrs: { style: this.show ? 'height: 100%; overflow: hidden' : '' },
      bodyAttrs: { style: this.show ? 'height: 100%; overflow: hidden' : '' }
    }
  },

  created() {
    this.lang = this.$i18n.locale
  },

  methods: {
    isShow() {
      this.show = !this.show
    },
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event))
    }
  }
}
</script>

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
  padding: 24px;
  transition: background-color $transition, padding $transition;
  z-index: 100;
  .scrolled &:not(.show) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .dark-mode & {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }
  }
  @media (min-width: $md) {
    grid-template-columns: auto 1fr;
    padding: 36px;
    .scrolled & {
      padding: 12px 36px;
    }
  }
}

.logo svg {
  display: block;
  g:first-child {
    fill: $secondary;
  }
  g:last-child {
    fill: $primary;
    transition: fill $transition;
    .dark-mode & {
      fill: $white;
    }
  }
}

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
  @media (min-width: $md) {
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
    @media (min-width: $md) {
      grid-template-columns: repeat(4, auto);
      justify-content: space-around;
      padding: 0;
    }
  }
  a {
    position: relative;
    display: block;
    @include size(20);
    color: var(--color);
    font-weight: 500;
    @media (min-width: $md) {
      font-size: 1rem;
      line-height: 1.5;
      text-align: center;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      background-color: $secondary;
      width: 0%;
      height: 3px;
      transition: width $transition;
    }
    &:hover::after,
    &.nuxt-link-active::after {
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
    font-family: $font;
    [lang='ar'] & {
      font-family: $font-arabic;
    }
    font-weight: 500;
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
    background-color: var(--primary);
    color: var(--secondary);
  }
}

.toggle {
  display: grid;
  @media (min-width: $md) {
    display: none;
  }
  align-content: space-between;
  background-color: transparent;
  height: 24px;
  margin: 0;
  padding: 0;
  outline: none;
  span {
    background-color: $secondary;
    height: 3px;
    border-radius: 2em;
    transition: all $transition;
  }
  .middle {
    animation: CollapseMiddle $animation;
    .show & {
      animation: CollapseShowMiddle $animation;
    }
  }
  .top {
    animation: CollapseTop $animation;
    .show & {
      animation: CollapseShowTop $animation;
    }
  }
  .bottom {
    animation: CollapseBottom $animation;
    .show & {
      animation: CollapseShowBottom $animation;
    }
  }
}
</style>
