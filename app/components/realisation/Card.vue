<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  card: {
    translated: Pick<Collections['project_fr' | 'project_en' | 'project_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt'>
    common: Pick<Collections['project'], 'category' | 'tags'>
  }
  titleTag: string
}>()

const { t } = useI18n()
const titleId = useId()
</script>

<template>
  <NuxtLink
    :to="card.translated.path"
    class="card"
    :aria-labelledby="titleId"
  >
    <AppPicture :picture="card.translated" alt="" />

    <div class="inner">
      <span class="label">
        {{ t(`category.${card.common.category}`) }}
      </span>
      <component :is="titleTag" :id="titleId" class="h3">
        {{ card.translated.title }}
      </component>
      <ul class="services">
        <li v-for="tag in card.common.tags" :key="tag">
          {{ t(`services.${tag}.name`) }}
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
