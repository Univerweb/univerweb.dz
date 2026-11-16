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
const { localeBaseUrl, baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="card.translated.path" class="card" vocab="https://schema.org/" typeof="CreativeWork" property="hasPart">
    <meta property="description" :content="card.translated.description">
    <meta property="dateCreated datePublished" :content="new Date(card.translated.createdAt).toISOString()">
    <meta property="dateModified" :content="new Date(card.translated.updatedAt).toISOString()">
    <span property="author publisher" typeof="Organization">
      <meta property="name" :content="t('site.name')">
      <link property="url" :href="localeBaseUrl">
    </span>
    <span property="isPartOf" typeof="CollectionPage">
      <meta property="name" :content="t('navigation.menu.realisations')">
      <link property="url" :href="baseUrl(localePath('realisations'))">
    </span>

    <AppPicture :picture="card.translated" alt="" />

    <div class="inner">
      <span class="label">
        {{ t(`category.${card.common.category}`) }}
      </span>
      <component :is="titleTag" property="name">
        {{ card.translated.title }}
      </component>
      <ul class="tags">
        <li v-for="tag in card.common.tags" :key="tag" property="keywords">
          {{ t(`services.${tag}.name`) }}
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
