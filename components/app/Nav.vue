<script setup lang="ts">
import type { Nav } from '../../types'

defineProps<{
  prev: Nav
  next: Nav
}>()

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <div class="container post-nav">
    <NuxtLink v-if="prev" :to="localePath(`${prev._path}`)" class="link prev" :data-text="t('nav.prev')">
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="currentColor" aria-hidden="true" viewBox="0 0 6 10" role="img">
        <path d="M6 8.7 2.2 4.9 6 1.1 4.9 0 1.1 3.8 0 4.9 1.1 6l3.8 3.8L6 8.7Z" />
      </svg>
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink v-if="next" :to="localePath(`${next._path}`)" class="link next" :data-text="t('nav.next')">
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="currentColor" aria-hidden="true" viewBox="0 0 6 10" role="img">
        <path d="m0 1.1 3.8 3.8L0 8.7l1.1 1.1L4.9 6 6 4.9 4.9 3.8 1.1 0 0 1.1Z" />
      </svg>
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.post-nav {
  display: grid;
  justify-content: space-between;
  background-color: var(--light);
  transition: background-color var(--transition);

  .next,
  .prev {
    position: relative;
    padding-inline: 18px 12px;

    &:hover {
      color: var(--primary);
    }

    &::before {
      content: attr(data-text);
      position: absolute;
      color: var(--text-secondary);
      transition-property: color var(--transition);
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
        inset-inline: 0 18px;
      }
    }
  }

  svg {
    position: absolute;
    top: 45%;

    [dir='rtl'] & {
      transform: rotate(180deg);
    }
  }

  .prev svg {
    inset-inline-start: -3px;
  }

  .next svg {
    inset-inline-end: -3px;
  }
}
</style>
