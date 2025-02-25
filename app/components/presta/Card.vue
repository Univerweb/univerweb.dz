<script setup lang="ts">
import type { Presta } from '@/types'

defineProps<{
  presta: Presta
  titleTag: string
}>()
</script>

<template>
  <div class="card-presta" vocab="https://schema.org/" typeof="Service">
    <ul class="tags">
      <li v-for="tag in presta.tags" :key="tag">
        {{ tag }}
      </li>
    </ul>

    <Component :is="titleTag" property="name serviceType">
      <NuxtLink :to="presta._path">
        {{ presta.title }}
      </NuxtLink>
    </Component>

    <p class="lead" property="description">
      {{ presta.description }}
    </p>

    <AppMore :path="presta._path" :label="presta.title" />
  </div>
</template>
