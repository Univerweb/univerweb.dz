<script setup lang="ts">
import type { Nav } from '../../types'

defineProps<{
  prev: Nav
  next: Nav
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
