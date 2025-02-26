<script setup lang="ts">
import type { Presta } from '@/types'

defineProps<{
  presta: Pick<Presta, '_path' | 'title' | 'label' | 'lead' | 'features'>
  titleTag: string
}>()
</script>

<template>
  <div class="card-presta" vocab="https://schema.org/" typeof="Service">
    <ul class="tags">
      <li v-for="feature in presta.features.list.slice(0, 3)" :key="feature.title" property="serviceType">
        {{ feature.title }}
      </li>
    </ul>

    <Component :is="titleTag" property="name">
      <NuxtLink :to="presta._path">
        {{ presta.title }}
      </NuxtLink>
    </Component>

    <p class="lead" property="description">
      {{ presta.lead }}
    </p>

    <AppMore :path="presta._path" :label="presta.label" />
  </div>
</template>
