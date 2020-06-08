<template>
  <header :class="{ opened: $store.state.isOpen && isMobile === true }">
    <nuxt-link
      :to="localePath('/')"
      :title="$t('links.home')"
      class="logo"
      @click.native="close"
    >
      <span class="visually-hidden">Accueil</span>
      <logo-arabe v-if="$i18n.locale === 'ar'" />
      <logo-latin v-else />
    </nuxt-link>
    <nav class="menu">
      <ul>
        <li v-for="(link, index) in headerLinks" :key="index">
          <nuxt-link :to="localePath(link.slug)" @click.native="close">
            {{ $t('links.' + link.slug) }}
          </nuxt-link>
        </li>
      </ul>
      <div class="lang">
        <lang-globe />
        <select v-model="selectedValue" @change="onChange(selectedValue)">
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
      @click.prevent="open"
    >
      <span class="toggle-icon"></span>
    </button>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
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
      windowWidth: null,
      selectedValue: '',
      headerLinks: [
        { slug: 'realisations' },
        { slug: 'prestations' },
        { slug: 'agence' },
        { slug: 'contact' }
      ]
    }
  },

  computed: {
    isMobile() {
      return this.windowWidth < 1024
    }
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },

  created() {
    this.selectedValue = this.$i18n.locale
  },

  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event))
    },
    ...mapActions(['close']),
    ...mapActions(['open'])
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
  padding: 15px 15px;
  transition: padding 0.3s;
  z-index: 1;
  .scrolled & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: $md) {
    & {
      grid-template-columns: auto 1fr;
      padding: 45px 45px;
      .scrolled & {
        padding: 15px 45px;
      }
    }
  }
  @media (min-width: $lg) {
    & {
      padding: 45px 135px;
      .scrolled & {
        padding: 15px 135px;
      }
    }
  }
}

.logo svg {
  display: block;
  height: 25px;
  g:first-child {
    fill: $blue;
  }
  g:last-child {
    fill: $dark-blue;
    transition: fill $transition;
    .opened & {
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
  height: 100vh;
  align-content: space-between;
  padding: 115px 15px 45px;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  .opened & {
    display: grid;
    background: $dark-blue;
    opacity: 1;
    pointer-events: auto;
  }
  @media (min-width: $md) {
    & {
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
  & ul {
    display: grid;
    grid-template-columns: min-content;
    row-gap: 30px;
    margin: 0;
    padding: 45px 0 0;
    list-style: none;
    @media (min-width: $md) {
      & {
        grid-template-columns: repeat(4, auto);
        justify-content: space-around;
        padding: 0;
      }
    }
  }
  & a {
    position: relative;
    display: block;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    .opened & {
      color: $white;
    }
    @media (min-width: $md) {
      & {
        font-size: 1rem;
        text-align: center;
      }
    }
    &::after {
      position: absolute;
      display: block;
      content: '';
      color: $blue;
      border-top: 3px solid;
      width: 0%;
      transition: width 0.3s;
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
    & {
      background: $dark-blue;
    }
  }
  & .globe {
    margin-right: -1rem;
    fill: $dark-blue;
    [dir='rtl'] & {
      margin-right: 0;
      margin-left: -1rem;
    }
    @media (min-width: $md) {
      & {
        fill: $blue;
      }
    }
  }
  & select {
    background-color: transparent;
    color: $dark-blue;
    appearance: none;
    padding-left: 1.5rem;
    padding-right: 2rem;
    height: 50px;
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
      & {
        color: $blue;
      }
    }
    & option {
      color: initial;
    }
  }
  & .arrow {
    height: 8px;
    margin-left: -1rem;
    fill: $dark-blue;
    [dir='rtl'] & {
      margin-left: 0;
      margin-right: -1rem;
    }
    @media (min-width: $md) {
      & {
        fill: $blue;
      }
    }
  }
}

.toggle {
  background: transparent;
  width: 45px;
  height: 45px;
  margin: 0;
  padding: 10px;
  text-align: left;
  outline: none;
  [dir='rtl'] & {
    text-align: right;
  }
  @media (min-width: $md) {
    & {
      display: none;
    }
  }
  &:focus {
    background: $dark-blue;

    .opened & {
      background: $blue;
    }
  }
}

.toggle-icon {
  display: inline-block;
  vertical-align: middle;
}

.toggle-icon,
.toggle-icon:before,
.toggle-icon:after {
  background: $blue;
  height: 3px;
  border-radius: 3px;
  transition: all 0.3s;
}

.toggle-icon:before,
.toggle-icon:after {
  content: '';
  display: block;
}

.opened .toggle:focus .toggle-icon,
.opened .toggle:focus .toggle-icon:before,
.opened .toggle:focus .toggle-icon:after {
  background: $dark-blue;
}

@keyframes CollapseCenter {
  0% {
    width: 0;
  }
  75% {
    width: 0;
  }
  100% {
    width: 15px;
  }
}

.toggle-icon {
  animation: CollapseCenter 0.5s forwards;
}

@keyframes CollapseShowCenter {
  0% {
    width: 15px;
  }
  25% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

.opened .toggle .toggle-icon {
  animation: CollapseShowCenter 0.5s forwards;
}

@keyframes CollapseBefore {
  0% {
    transform: translateY(0) rotate(-45deg);
    width: 25px;
  }
  25% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-10px) rotate(0);
  }
  100% {
    transform: translateY(-10px) rotate(0);
    width: 25px;
  }
}

.toggle-icon:before {
  animation: CollapseBefore 0.5s forwards;
}

@keyframes CollapseShowBefore {
  0% {
    transform: translateY(-10px) rotate(0);
    width: 25px;
  }
  50% {
    transform: translateY(-10px) rotate(0);
  }
  75% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
    width: 25px;
  }
}

.opened .toggle-icon:before {
  animation: CollapseShowBefore 0.5s forwards;
}

@keyframes CollapseAfter {
  0% {
    transform: translateY(-3px) rotate(45deg);
    width: 25px;
  }
  25% {
    transform: translateY(-3px) rotate(0);
  }
  50% {
    transform: translateY(7px) rotate(0);
    width: 25px;
  }
  75% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
  100% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
}

.toggle-icon:after {
  animation: CollapseAfter 0.5s forwards;
}

@keyframes CollapseShowAfter {
  0% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
  25% {
    transform: translateY(7px) rotate(0);
    width: 20px;
  }
  50% {
    transform: translateY(7px) rotate(0);
    width: 25px;
  }
  75% {
    transform: translateY(-3px) rotate(0);
  }
  100% {
    transform: translateY(-3px) rotate(45deg);
    width: 25px;
  }
}

.opened .toggle-icon:after {
  animation: CollapseShowAfter 0.5s forwards;
}
</style>
