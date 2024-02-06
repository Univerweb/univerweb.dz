<script setup lang="ts">
import type { Link } from '../../types'

withDefaults(defineProps<Link>(), {
  path: 'realisations',
  label: 'home.moreLabel.works',
})

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="more">
    <NuxtLink :to="localePath(path)" class="btn">
      {{ t(label) }}
      <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" width="8" height="14" viewBox="0 0 8 14" fill="currentColor">
        <path d="M1.38329e-07 2.19999L5.06667 7.26665L1.74898e-08 12.3333L1.46667 13.8L6.53333 8.73332L8 7.26665L6.53333 5.79999L1.46667 0.733322L1.38329e-07 2.19999Z" />
      </svg>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.more {
  display: grid;
  padding-top: 12px;

  @include media($md, 16px 0, 0);
  @include media($lg, 24px 0, 0);

  [lang='ar-DZ'] & svg {
    transform: rotate(180deg);
  }
}
</style>
