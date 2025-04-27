<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  presta: Pick<Collections['presta_fr' | 'presta_en' | 'presta_ar'], 'path' | 'title' | 'cta' | 'lead' | 'solutions'>
  titleTag: string
}>()
</script>

<template>
  <div class="card-presta" vocab="https://schema.org/" typeof="Service">
    <ul class="tags">
      <li v-for="solution in presta.solutions.list.slice(0, 3)" :key="solution.title">
        {{ solution.title }}
      </li>
    </ul>

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
