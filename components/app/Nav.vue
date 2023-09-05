<script setup lang="ts">
import type { Nav } from '../../types'

defineProps<{
  prev?: Nav
  next?: Nav
  path: string
}>()

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <div class="container post-nav">
    <NuxtLink v-if="prev" :to="localePath(`/${path}/${prev.slug}`)" class="link prev" :data-text="t('nav.prev')">
      <NuxtIcon name="arrow" />
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink v-if="next" :to="localePath(`/${path}/${next.slug}`)" class="link next" :data-text="t('nav.next')">
      <NuxtIcon name="arrow" />
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.post-nav {
  display: grid;
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

  .nuxt-icon {
    position: absolute;
  }

  .prev .nuxt-icon {
    inset-inline-start: -6px;
  }

  .next .nuxt-icon {
    inset-inline-end: -6px;
  }

  .arrow {
    height: 6px;
  }

  .next .arrow {
    transform: rotate(-90deg);
  }

  .prev .arrow {
    transform: rotate(90deg);
  }

  [lang='ar-DZ'] & {
    .next .arrow {
      transform: rotate(90deg);
    }

    .prev .arrow {
      transform: rotate(-90deg);
    }
  }
}
</style>
