<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  titleTag: string
  card: Pick<Collections['service_fr' | 'service_en' | 'service_ar'], 'icon' | 'title' | 'description' | 'cta' | 'path'>
}>()
</script>

<template>
  <div class="card-prestation" vocab="https://schema.org/" typeof="Service">
    <component :is="card.icon" fill="var(--color-secondary)" />

    <component :is="titleTag" property="name serviceType">
      {{ card.title }}
    </component>

    <p class="lead" property="description">
      {{ card.description }}
    </p>

    <AppMore :path="card.path" :label="card.cta" />
  </div>
</template>
