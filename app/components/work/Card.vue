<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  work: Pick<Collections['work_fr' | 'work_en' | 'work_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'category' | 'lead'>
  titleTag: string
}>()

const { t } = useI18n()
const { localeBaseUrl, baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="work.path" class="card" vocab="https://schema.org/" typeof="CreativeWork">
    <span :id="baseUrl(localePath('realisations'))" property="isPartOf" typeof="WebPage">
      <span property="name" :content="t('navigation.menu[0].label')" />
    </span>
    <span property="author publisher" typeof="Organization">
      <span property="name" :content="t('site.name')" />
      <span property="url" :content="localeBaseUrl" />
    </span>
    <time property="dateCreated datePublished" :datetime="new Date(work.createdAt).toISOString()" />
    <time property="dateModified" :datetime="new Date(work.updatedAt).toISOString()" />
    <span property="description" :content="work.description" />

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
        {{ work.lead }}
      </p>
    </div>
  </NuxtLink>
</template>
