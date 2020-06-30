<template>
  <div class="container nav">
    <nuxt-link
      v-if="currentIndex < count - 1"
      :to="localePath('/realisations/' + previus[0].slug)"
      class="link previous"
      :data-text="$t('links.previous')"
    >
      <nav-arrow />
      {{ previus[0].title }}
    </nuxt-link>
    <nuxt-link
      v-if="currentIndex > 0"
      :to="localePath('/realisations/' + next[0].slug)"
      class="link next"
      :data-text="$t('links.next')"
    >
      {{ next[0].title }}
      <nav-arrow />
    </nuxt-link>
  </div>
</template>

<script>
import NavArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    NavArrow
  },

  data() {
    const works = this.$t('work')
    const slug = this.$route.params.slug
    const work = works.find((work) => work.slug === slug)
    const count = works.length
    const currentIndex = works.indexOf(work)
    const next = works.slice(currentIndex - 1, currentIndex)
    const previus = works.slice(currentIndex + 1, currentIndex + 2)
    const data = {
      next,
      previus,
      currentIndex,
      count
    }
    return data
  }
}
</script>

<style lang="scss">
.nav {
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding-top: 72px;
  padding-bottom: 48px;
  background: $blue;
  & .next,
  & .previous {
    position: relative;
    color: $dark-blue;
    [lang='ar'] & {
      font-family: $font-arabe;
    }
    &:hover {
      color: $white;
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      color: $dark-blue;
      top: -24px;
      left: 40px;
      [lang='ar'] & {
        left: 0;
        right: 40px;
      }
      font-size: 0.8rem;
      line-height: 1.875;
      pointer-events: none;
    }
    &:not(.previous) {
      grid-column: 2;
      text-align: right;
      &::before {
        right: 40px;
        [lang='ar'] & {
          left: 40px;
          text-align: left;
        }
      }
    }
  }
  & .arrow {
    fill: currentColor;
    height: 12px;
    transform: rotate(90deg);
    margin-right: 12px;
    margin-bottom: 2px;
    [lang='ar'] & {
      transform: rotate(-90deg);
      margin-right: 0;
      margin-left: 12px;
    }
  }
  & .next .arrow {
    margin-right: 0;
    margin-left: 12px;
    transform: rotate(-90deg);
    [lang='ar'] & {
      transform: rotate(90deg);
      margin-right: 12px;
      margin-left: 0;
    }
  }
}
</style>
