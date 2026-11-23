<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  card: Pick<Collections['article_fr' | 'article_en' | 'article_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'alt' | 'tags' | 'author'>
  titleTag: string
}>()

const titleId = useId()
</script>

<template>
  <NuxtLink
    :to="card.path"
    class="card"
    :aria-labelledby="titleId"
  >
    <AppPicture :picture="card" />

    <div class="inner">
      <ul class="label tags">
        <li v-for="tag in card.tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
      <component :is="titleTag" :id="titleId" class="h3">
        {{ card.title }}
      </component>
      <p>
        {{ card.description }}
      </p>
    </div>
  </NuxtLink>
</template>
