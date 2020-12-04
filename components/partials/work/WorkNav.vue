<template>
  <div class="container nav">
    <nuxt-link v-if="currentIndex < count - 1" :to="localePath('/realisations/' + previus[0].slug)" class="link previous" :data-text="$t('links.previous')"
      ><nav-arrow />{{ previus[0].title }}</nuxt-link
    >
    <nuxt-link v-if="currentIndex > 0" :to="localePath('/realisations/' + next[0].slug)" class="link next" :data-text="$t('links.next')"
      ><nav-arrow />{{ next[0].title }}</nuxt-link
    >
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
    const work = works.find(work => work.slug === slug)
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
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: $sm) {
    grid-template-columns: repeat(2, max-content);
  }
  justify-content: space-between;
  padding-top: 72px;
  padding-bottom: 48px;
  background: $blue;
  .next,
  .previous {
    position: relative;
    color: $dark-blue;
    padding: 0 12px 0 18px;
    [lang='ar'] & {
      font-family: $font-arabic;
      padding: 0 18px 0 12px;
    }
    &:hover {
      color: $white;
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      color: $dark-blue;
      top: -12px;
      left: 20px;
      [lang='ar'] & {
        left: 0;
        right: 20px;
      }
      font-size: 0.8rem;
      line-height: 0.9375;
      pointer-events: none;
    }
    &:not(.previous) {
      grid-column: 2;
      text-align: end;
      padding: 0 18px 0 12px;
      [lang='ar'] & {
        padding: 0 12px 0 18px;
      }
      &::before {
        right: 18px;
        left: 0;
        [lang='ar'] & {
          left: 18px;
          text-align: left;
        }
      }
    }
  }
  .arrow {
    position: absolute;
    left: 0;
    top: 50%;
    bottom: 50%;
    margin: auto 0;
    fill: currentColor;
    height: 7px;
    transform: rotate(90deg);
    [lang='ar'] & {
      transform: rotate(-90deg);
      right: 0;
      left: auto;
    }
  }
  .next .arrow {
    transform: rotate(-90deg);
    right: 0;
    left: auto;
    [lang='ar'] & {
      transform: rotate(90deg);
      right: auto;
      left: 0;
    }
  }
}
</style>
