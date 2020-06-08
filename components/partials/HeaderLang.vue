<template>
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
</template>

<script>
import LangGlobe from '@/assets/icons/globe.svg?inline'
import LangArrow from '@/components/svg/LangArrow'

export default {
  components: {
    LangGlobe,
    LangArrow
  },
  data() {
    return {
      selectedValue: ''
    }
  },
  created() {
    this.selectedValue = this.$i18n.locale
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event))
    }
  }
}
</script>

<style lang="scss">
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
}

.globe {
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
</style>
