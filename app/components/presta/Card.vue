<script setup lang="ts">
import type { Presta } from '@/types'

defineProps<{
  presta: Presta
  titleTag: string
}>()
</script>

<template>
  <div class="card-presta">
    <ul class="tags">
      <li v-for="tag in presta.tags" :key="tag">
        {{ tag }}
      </li>
    </ul>

    <Component :is="titleTag">
      {{ presta.title }}
    </Component>

    <p class="lead">
      {{ presta.description }}
    </p>

    <AppMore :path="presta._path" :label="presta.title" />
  </div>
</template>
