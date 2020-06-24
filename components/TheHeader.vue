<template>
  <header :class="{ show: show }">
    <nuxt-link
      :to="localePath('/')"
      :title="$t('links.home')"
      class="logo"
      @click.native="show = false"
    >
      <span class="visually-hidden">{{ $t('links.home') }}</span>
      <logo-arabe v-if="$i18n.locale === 'ar'" />
      <logo-latin v-else />
    </nuxt-link>
    <nav class="menu">
      <ul>
        <li v-for="(name, value) in $t('menu')" :key="value">
          <nuxt-link :to="localePath(value)" @click.native="show = false">
            {{ name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="lang">
        <lang-globe />
        <select v-model="lang" @change="onChange(lang)">
          <option
            v-for="(locale, index) in $i18n.locales"
            :key="index"
            :value="locale.code"
          >
            {{ locale.code }}
          </option>
        </select>
        <lang-arrow />
      </div>
    </nav>
    <button
      type="button"
      :aria-label="$t('links.ariaLabel')"
      class="toggle"
      @click="isShow"
    >
      <span>
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span
      ></span>
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
  .scrolled & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: $md) {
    grid-template-columns: auto 1fr;
    padding: 48px;
    .scrolled & {
      padding: 12px 48px;
    }
  }
}

.logo svg {
  display: block;
  height: 24px;
  g:first-child {
    fill: $blue;
  }
  g:last-child {
    fill: $dark-blue;
    transition: fill $transition;
    .show & {
      fill: $white;
      @media (min-width: $md) {
        fill: $dark-blue;
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
  height: 100vh;
  align-content: space-between;
  padding: 72px 24px 24px;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity $transition;
  .show & {
    display: grid;
    background: $dark-blue;
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
  & ul {
    display: grid;
    grid-auto-columns: max-content;
    row-gap: 24px;
    margin: 0;
    padding: 48px 0 0;
    list-style: none;
    @media (min-width: $md) {
      grid-template-columns: repeat(4, auto);
      justify-content: space-around;
      padding: 0;
    }
  }
  & a {
    position: relative;
    display: block;
    @include size(20);
    font-weight: 500;
    .show & {
      color: $white;
    }
    @media (min-width: $md) {
      color: $dark !important;
      font-size: 1rem;
      line-height: 1.5;
      text-align: center;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      background: $blue;
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
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  width: fit-content;
  background: $blue;
  padding: 0 20px;
  border-radius: 50px;
  @media (min-width: $md) {
    background: $dark-blue;
  }
  & .globe {
    margin-right: -1rem;
    fill: $dark-blue;
    [lang='ar'] & {
      margin-right: 0;
      margin-left: -1rem;
    }
    @media (min-width: $md) {
      fill: $blue;
    }
  }
  & select {
    background-color: transparent;
    color: $dark-blue;
    appearance: none;
    padding-left: 1.5rem;
    padding-right: 2rem;
    height: 48px;
    border: 0;
    font-family: $font;
    font-weight: 500;
    font-size: initial;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    cursor: pointer;
    outline: 0;
    z-index: 2;
    @media (min-width: $md) {
      color: $blue;
    }
    & option {
      color: initial;
    }
  }
  & .arrow {
    height: 8px;
    margin-left: -1rem;
    fill: $dark-blue;
    [lang='ar'] & {
      margin-left: 0;
      margin-right: -1rem;
    }
    @media (min-width: $md) {
      fill: $blue;
    }
  }
}

@keyframes CollapseMiddle {
  0% {
    width: 0;
  }
  75% {
    width: 0;
  }
  100% {
    width: 12px;
  }
}
@keyframes CollapseShowMiddle {
  0% {
    width: 12px;
  }
  25% {
    width: 0;
  }
  100% {
    width: 0;
  }
}
@keyframes CollapseTop {
  0% {
    transform: translateY(11px) rotate(-45deg);
    width: 24px;
  }
  25% {
    transform: translateY(11px) rotate(0);
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
    width: 24px;
  }
}
@keyframes CollapseShowTop {
  0% {
    transform: translateY(0) rotate(0);
    width: 24px;
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  75% {
    transform: translateY(11px) rotate(0);
  }
  100% {
    transform: translateY(11px) rotate(-45deg);
    width: 24px;
  }
}
@keyframes CollapseBottom {
  0% {
    transform: translateY(-11px) rotate(45deg);
    width: 24px;
  }
  25% {
    transform: translateY(-11px) rotate(0);
  }
  50% {
    transform: translateY(0) rotate(0);
    width: 24px;
  }
  75% {
    transform: translateY(0) rotate(0);
    width: 18px;
  }
  100% {
    transform: translateY(0) rotate(0);
    width: 18px;
  }
}
@keyframes CollapseShowBottom {
  0% {
    transform: translateY(0) rotate(0);
    width: 18px;
  }
  25% {
    transform: translateY(0) rotate(0);
    width: 18px;
  }
  50% {
    transform: translateY(0) rotate(0);
    width: 24px;
  }
  75% {
    transform: translateY(-11px) rotate(0);
  }
  100% {
    transform: translateY(-11px) rotate(45deg);
    width: 24px;
  }
}

.toggle {
  background: transparent;
  margin: 0;
  padding: 0;
  outline: none;
  @media (min-width: $md) {
    display: none;
  }
  & > span {
    display: grid;
    align-content: space-between;
    height: 24px;

    &:focus {
      background: $dark-blue;
      .show & {
        background: $blue;
      }
    }
    & span {
      background: $blue;
      height: 3px;
      border-radius: 3px;
      transition: all $transition;
    }
    .show &:focus span {
      background: $dark-blue;
    }
    & .middle {
      animation: CollapseMiddle $animation;
      .show & {
        animation: CollapseShowMiddle $animation;
      }
    }
    & .top {
      animation: CollapseTop $animation;
      .show & {
        animation: CollapseShowTop $animation;
      }
    }
    & .bottom {
      animation: CollapseBottom $animation;
      .show & {
        animation: CollapseShowBottom $animation;
      }
    }
  }
}
</style>
