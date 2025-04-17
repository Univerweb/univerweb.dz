<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  presta: Pick<Collections['presta_fr' | 'presta_en' | 'presta_ar'], 'path' | 'title' | 'label' | 'lead' | 'prestations'>
  titleTag: string
}>()
</script>

<template>
  <div class="card-presta" vocab="https://schema.org/" typeof="Service">
    <ul class="tags">
      <li v-for="prestation in presta.prestations.list.slice(0, 3)" :key="prestation.title" property="serviceType">
        {{ prestation.title }}
      </li>
    </ul>

    <Component :is="titleTag" property="name">
      <NuxtLink :to="presta.path">
        {{ presta.title }}
      </NuxtLink>
    </Component>

    <p class="lead" property="description">
      {{ presta.lead }}
    </p>

    <AppMore :path="presta.path" :label="presta.label" />
  </div>
</template>
