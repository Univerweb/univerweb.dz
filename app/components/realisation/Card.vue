<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  card: {
    translated: Pick<Collections['realisations_item_fr' | 'realisations_item_en' | 'realisations_item_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'about'>
    common: Pick<Collections['realisations_item'], 'category'>
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

    <div class="overlay" />

    <div class="inner">
      <span class="h3">
        {{ t(`realisations.category.value.${card.common.category}`) }}
      </span>
      <Component :is="titleTag" property="name" class="work">
        {{ card.translated.title }}
      </Component>
      <p property="about" class="lead">
        {{ card.translated.about }}
      </p>
    </div>
  </NuxtLink>
</template>
