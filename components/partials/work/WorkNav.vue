<template>
  <div class="container nav">
    <NuxtLink v-if="currentIndex < count - 1" :to="localePath('/realisations/' + prev[0].slug)" class="link prev" :data-text="$t('links.prev')"
      ><NavArrow />{{ prev[0].title }}</NuxtLink
    >
    <NuxtLink v-if="currentIndex > 0" :to="localePath('/realisations/' + next[0].slug)" class="link next" :data-text="$t('links.next')"
      ><NavArrow />{{ next[0].title }}</NuxtLink
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
    const prev = works.slice(currentIndex + 1, currentIndex + 2)
    const data = {
      next,
      prev,
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
  background-color: $secondary;
  .next,
  .prev {
    position: relative;
    color: $primary;
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
      color: $primary;
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
    &:not(.prev) {
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
