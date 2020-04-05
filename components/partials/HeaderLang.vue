<template>
  <div class="lang">
    <uniGlobe />
    <select v-model="selectedValue" @change="onChange(selectedValue)">
      <option
        v-for="(locale, index) in $i18n.locales"
        :key="index"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
    <uniArrow />
  </div>
</template>

<script>
import uniGlobe from '@/components/svg/Globe'
import uniArrow from '@/components/svg/Arrow'

export default {
  components: {
    uniGlobe,
    uniArrow
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

<style>
.lang {
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  background: var(--blue);
  width: fit-content;
  padding: 0 15px;
  border-radius: 50px;
}

@media (min-width: 1024px) {
  .lang {
    background: var(--dark-blue);
  }
}

.lang select {
  background-color: transparent;
  color: var(--dark-blue);
  appearance: none;
  padding-left: 1.5rem;
  padding-right: 2rem;
  height: 55px;
  border: 0;
  font-family: inherit;
  font-size: initial;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
}

@media (min-width: 1024px) {
  .lang select {
    color: var(--blue);
  }
}
</style>
