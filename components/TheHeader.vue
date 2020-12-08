<template>
  <header :class="{ show: show }">
    <nuxt-link :to="localePath('/')" :title="$t('links.home')" class="logo" @click.native="show = false">
      <span class="visually-hidden">{{ $t('links.home') }}</span>
      <logo-arabe v-if="$i18n.locale === 'ar'" />
      <logo-latin v-else />
    </nuxt-link>
    <nav class="menu">
      <ul>
        <li v-for="(value, name) in $t('menu')" :key="name">
          <nuxt-link :to="localePath(name)" @click.native="show = false">{{ value }}</nuxt-link>
        </li>
      </ul>
      <div class="btn lang">
        <lang-globe />
        <select v-model="lang" :aria-label="$t('ariaLabel.lang')" @change="onChange(lang)">
          <option v-for="locale in $i18n.locales" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
        </select>
        <lang-arrow />
      </div>
    </nav>
    <button type="button" :aria-label="$t('ariaLabel.menu')" class="toggle" @click="isShow">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </button>
  </header>
</template>

<script>
import LogoLatin from '@/static/logos/univerweb.svg?inline'
import LogoArabe from '@/static/logos/univerweb-ar.svg?inline'
import LangGlobe from '@/assets/icons/globe.svg?inline'
import LangArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    LogoLatin,
    LogoArabe,
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
  background: $white;
  padding: 24px;
  transition: padding $transition;
  z-index: 1;
  .scrolled &:not(.show) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  height: 24px;
  g:first-child {
    fill: $secondary;
  }
  g:last-child {
    fill: $primary;
    transition: fill $transition;
    .show & {
      fill: $white;
      @media (min-width: $md) {
        fill: $primary;
      }
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
  transition: opacity $transition;
  .show & {
    display: grid;
    height: 100%;
    background: $primary;
    opacity: 1;
    pointer-events: auto;
  }
  @media (min-width: $md) {
    background: $white !important;
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
    font-weight: 500;
    .show & {
      color: $white;
    }
    @media (min-width: $md) {
      color: $black !important;
      font-size: 1rem;
      line-height: 1.5;
      text-align: center;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      background: $secondary;
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

.lang,
.lang:hover {
  background-color: $secondary;
  color: $primary;
  padding: 0 12px;
  @media (min-width: $md) {
    background: $primary;
    color: $secondary;
  }
  .globe {
    margin-inline-end: -28px;
    margin-inline-start: 12px;
  }
  select {
    background-color: transparent;
    color: $primary;
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
    @media (min-width: $md) {
      color: currentColor;
    }
    option {
      color: initial;
    }
  }
  .arrow {
    height: 8px;
    margin-inline-start: -25px;
  }
}

.toggle {
  display: grid;
  @media (min-width: $md) {
    display: none;
  }
  align-content: space-between;
  background: transparent;
  height: 24px;
  margin: 0;
  padding: 0;
  outline: none;
  span {
    background: $secondary;
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
