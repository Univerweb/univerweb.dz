<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  titleTag: string
  card: Pick<Collections['service_fr' | 'service_en' | 'service_ar'], 'icon' | 'title' | 'description' | 'cta' | 'path'>
}>()
</script>

<template>
  <div class="card-prestation">
    <component :is="card.icon" fill="var(--accent-color)" />

    <component :is="titleTag" class="h3">
      {{ card.title }}
    </component>

    <p>
      {{ card.description }}
    </p>

    <AppMore :path="card.path" :label="card.cta" />
  </div>
</template>
