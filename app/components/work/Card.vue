<script setup lang="ts">
import type { Work } from '@/types'

defineProps<{
  work: Work
  titleTag: string
}>()

const { t } = useI18n()
const { baseUrl } = useUrl()
</script>

<template>
  <NuxtLink :to="work._path" class="card" vocab="https://schema.org/" typeof="Article">
    <span property="author publisher" typeof="Organization">
      <span property="name" :content="t('name')" />
      <span property="url" :content="baseUrl" />
    </span>
    <time property="dateCreated datePublished" :datetime="new Date(work.createdAt).toISOString()" />
    <time property="dateModified" :datetime="new Date(work.updatedAt).toISOString()" />
    <span v-for="tag in work.tags" :key="tag" property="keywords" :content="tag" />
    <span property="articleSection" :content="t('works.title')" />
    <span property="description" :content="work.description" />

    <AppPicture :picture="work" />

    <div class="overlay" />

    <div class="inner work">
      <span class="h3">
        {{ work.category }}
      </span>
      <Component :is="titleTag" property="headline" class="work">
        {{ work.title }}
      </Component>
      <p property="articleBody" class="lead">
        {{ work.body?.children[0]?.children[0]?.value }}
      </p>
    </div>
  </NuxtLink>
</template>
