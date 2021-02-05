<template>
  <div class="container nav">
    <NuxtLink v-if="prev" :to="toLink(prev.slug)" class="link prev" :data-text="$t('label.prev')"><NavArrow />{{ prev.title }}</NuxtLink>
    <NuxtLink v-if="next" :to="toLink(next.slug)" class="link next" :data-text="$t('label.next')"><NavArrow />{{ next.title }}</NuxtLink>
  </div>
</template>

<script>
import NavArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    NavArrow
  },

  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  },

  methods: {
    toLink(slug) {
      if (slug === 'index') {
        return this.localePath('realisations')
      }
      return this.localePath({
        name: 'realisations-slug',
        params: { slug }
      })
    }
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
  transition: background-color $transition;
  .dark-mode & {
    background-color: var(--bg);
  }
  .next,
  .prev {
    position: relative;
    color: $primary;
    transition: color $transition;
    .dark-mode & {
      color: $secondary;
    }
    padding-inline: 18px 12px;
    [lang='ar-DZ'] & {
      font-family: $font-arabic;
    }
    &:hover {
      color: $white;
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      color: $primary;
      transition: color $transition;
      .dark-mode & {
        color: $secondary;
      }
      inset-block-start: -12px;
      inset-inline-start: 20px;
      font-size: 0.8rem;
      line-height: 0.9375;
      pointer-events: none;
    }
    &:not(.prev) {
      grid-column: 2;
      text-align: end;
      padding-inline: 12px 18px;
      &::before {
        inset-inline-start: 0;
        inset-inline-end: 18px;
      }
    }
  }
  .arrow {
    position: absolute;
    left: 0;
    top: 9px;
    @media (min-width: $sm) {
      top: 15px;
    }
    fill: currentColor;
    height: 6px;
    transform: rotate(90deg);
    [lang='ar-DZ'] & {
      transform: rotate(-90deg);
      right: 0;
      left: auto;
    }
  }
  .next .arrow {
    transform: rotate(-90deg);
    right: 0;
    left: auto;
    [lang='ar-DZ'] & {
      transform: rotate(90deg);
      right: auto;
      left: 0;
    }
  }
}
</style>
