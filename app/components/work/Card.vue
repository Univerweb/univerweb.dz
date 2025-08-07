<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  card: Pick<Collections['realisation_fr' | 'realisation_en' | 'realisation_ar'], 'path' | 'seo' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'category'>
  titleTag: string
}>()

const { t } = useI18n()
const { localeBaseUrl, baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="card.path" class="card" vocab="https://schema.org/" typeof="CreativeWork" property="hasPart">
    <meta property="description" :content="card.seo.description">
    <meta property="dateCreated datePublished" :content="new Date(card.createdAt).toISOString()">
    <meta property="dateModified" :content="new Date(card.updatedAt).toISOString()">
    <span property="author publisher" typeof="Organization">
      <meta property="name" :content="t('site.name')">
      <link property="url" :href="localeBaseUrl">
    </span>
    <span property="isPartOf" typeof="CollectionPage">
      <meta property="name" :content="t('navigation.menu[0].label')">
      <link property="url" :href="baseUrl(localePath('realisations'))">
    </span>

    <AppPicture :picture="card" alt="" />

    <div class="overlay" />

    <div class="inner">
      <span class="h3">
        {{ card.category }}
      </span>
      <Component :is="titleTag" property="name" class="work">
        {{ card.title }}
      </Component>
      <p property="about" class="lead">
        {{ card.description }}
      </p>
    </div>
  </NuxtLink>
</template>
