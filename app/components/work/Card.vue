<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  work: Pick<Collections['work_fr' | 'work_en' | 'work_ar'], 'path' | 'seo' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'category'>
  titleTag: string
}>()

const { t } = useI18n()
const { localeBaseUrl, baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="work.path" class="card" vocab="https://schema.org/" typeof="CreativeWork" property="hasPart">
    <meta property="description" :content="work.seo.description">
    <meta property="dateCreated datePublished" :content="new Date(work.createdAt).toISOString()">
    <meta property="dateModified" :content="new Date(work.updatedAt).toISOString()">
    <span property="author publisher" typeof="Organization">
      <meta property="name" :content="t('site.name')">
      <link property="url" :href="localeBaseUrl">
    </span>
    <span property="isPartOf" typeof="CollectionPage">
      <meta property="name" :content="t('navigation.menu[0].label')">
      <link property="url" :href="baseUrl(localePath('realisations'))">
    </span>

    <AppPicture :path="work.path" />

    <div class="overlay" />

    <div class="inner">
      <span class="h3">
        {{ work.category }}
      </span>
      <Component :is="titleTag" property="name" class="work">
        {{ work.title }}
      </Component>
      <p property="about" class="lead">
        {{ work.description }}
      </p>
    </div>
  </NuxtLink>
</template>
