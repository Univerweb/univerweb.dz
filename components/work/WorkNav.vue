<template>
  <div class="container nav" v-if="global">
    <NuxtLink v-if="prev" :to="prev.slug" class="link prev" :data-text="global.label.prev">
      <NuxtIcon name="arrow" />
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink v-if="next" :to="prev.slug" class="link next" :data-text="global.label.next">
      <NuxtIcon name="arrow" />
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

const { data: global } = await useAsyncData('WorkNav', () => queryContent(locale.value, 'global').only(['label']).findOne())

defineProps({
  prev: {
    type: Object,
    default: null
  },
  next: {
    type: Object,
    default: null
  }
})
</script>

<!-- <script>
export default {
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
</script> -->

<style lang="scss">
.nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: $md) {
    grid-template-columns: repeat(2, max-content);
  }
  justify-content: space-between;
  padding-top: 72px;
  padding-bottom: 48px;
  background-color: $primary;
  transition: background-color $transition;
  .dark-mode & {
    background-color: var(--bg);
  }
  .next,
  .prev {
    position: relative;
    color: $secondary;
    transition: color $transition;
    .dark-mode & {
      color: $primary;
    }
    padding-inline: 18px 12px;
    &:hover {
      color: $white;
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      color: $secondary;
      transition: color $transition;
      .dark-mode & {
        color: $primary;
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
    @media (min-width: $md) {
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
