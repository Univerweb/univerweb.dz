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
  <div class="container postNav">
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
.postNav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    left: -6px;

    [lang='ar-DZ'] & {
      right: -6px;
    }
  }

  .next .nuxt-icon {
    right: -6px;

    [lang='ar-DZ'] & {
      left: -6px;
    }
  }

  .arrow {
    height: 6px;
  }

  .prev .arrow {
    transform: rotate(90deg);

    [lang='ar-DZ'] & {
      transform: rotate(-90deg);
    }
  }

  .next .arrow {
    transform: rotate(-90deg);

    [lang='ar-DZ'] & {
      transform: rotate(90deg);
    }
  }
}
</style>
