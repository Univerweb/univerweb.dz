<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  presta: Pick<Collections['presta_fr' | 'presta_en' | 'presta_ar'], 'path' | 'title' | 'cta' | 'lead'>
  titleTag: string
}>()
</script>

<template>
  <div class="card-presta" vocab="https://schema.org/" typeof="Service">
    <Component :is="titleTag" property="name serviceType">
      <NuxtLink :to="presta.path">
        {{ presta.title }}
      </NuxtLink>
    </Component>

    <p class="lead" property="description">
      {{ presta.lead }}
    </p>

    <AppMore :path="presta.path" :label="presta.cta" />
  </div>
</template>
