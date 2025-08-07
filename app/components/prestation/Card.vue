<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  card: Pick<Collections['prestation_fr' | 'prestation_en' | 'prestation_ar'], 'path' | 'title' | 'description' | 'cta'>
  titleTag: string
}>()
</script>

<template>
  <div class="card-prestation" vocab="https://schema.org/" typeof="Service">
    <Component :is="titleTag" property="name serviceType">
      <NuxtLink :to="card.path">
        {{ card.title }}
      </NuxtLink>
    </Component>

    <p class="lead" property="description">
      {{ card.description }}
    </p>

    <AppMore :path="card.path" :label="card.cta" />
  </div>
</template>
