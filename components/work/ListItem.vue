<script setup lang="ts">
import type { Work } from '../../types'

defineProps<{
  work: Work
  titleTag: string
}>()

const { t } = useI18n()
const seo = useSeo()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`/realisations/${work.slug}`)" class="item">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${seo.baseUrl}${localePath(`/realisations/${work.slug}`)}`">
      </div>
      <meta property="dateCreated datePublished" :content="work.createdAt">
      <meta property="dateModified" :content="work.updatedAt">
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="seo.baseUrl">
      </div>
      <meta property="articleSection" :content="t('works.title')">
      <meta property="description" :content="work.desc">

      <AppImg
        property="image"
        :src="`/images/works/${work.slug}_thumbnail.jpg`"
        :alt="work.desc"
        width="588"
        height="624"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
      />

      <div class="overlay" />

      <div class="inner">
        <Component :is="titleTag" property="headline">
          {{ work.title }}
        </Component>
        <ul class="tags">
          <li v-for="tag in work.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>
        <p property="articleBody" class="lead">
          {{ work.lead }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
