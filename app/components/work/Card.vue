<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  work: Pick<Collections['work_fr' | 'work_en' | 'work_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'tags' | 'category' | 'lead' | 'link'>
  titleTag: string
}>()

const { t } = useI18n()
const { localeBaseUrl } = useUrl()
</script>

<template>
  <NuxtLink :to="work.path" class="card" vocab="https://schema.org/" typeof="Article">
    <span property="author publisher" typeof="Organization">
      <span property="name" :content="t('site.name')" />
      <span property="url" :content="localeBaseUrl" />
    </span>
    <time property="dateCreated datePublished" :datetime="new Date(work.createdAt).toISOString()" />
    <time property="dateModified" :datetime="new Date(work.updatedAt).toISOString()" />
    <span v-for="tag in work.tags" :key="tag" property="keywords" :content="tag" />
    <span property="articleSection" :content="t('realisations.title')" />
    <span property="description" :content="work.description" />

    <AppPicture :path="work.path" />

    <div class="overlay" />

    <div class="inner work">
      <span class="h3">
        {{ work.category }}
      </span>
      <Component :is="titleTag" property="headline" class="work">
        {{ work.title }}
      </Component>
      <p property="articleBody" class="lead">
        {{ work.lead }}
      </p>
    </div>
  </NuxtLink>
</template>
