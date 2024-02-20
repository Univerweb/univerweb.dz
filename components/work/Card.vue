<script setup lang="ts">
import type { Work } from '../../types'

defineProps<{
  work: Work
  titleTag: string
}>()

const { t } = useI18n()
const { baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`${work._path}`)" class="card">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${baseUrl}${localePath(`${work._path}`)}`" />
      </span>
      <span property="author publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="baseUrl" />
      </span>
      <time property="dateCreated datePublished" :datetime="work.createdAt.toString()" />
      <time property="dateModified" :datetime="work.updatedAt.toString()" />
      <span v-for="tag in work.tags" :key="tag" property="keywords" :content="tag" />
      <span property="articleSection" :content="t('works.title')" />
      <span property="description" :content="work.description" />

      <AppPicture
        :picture="work"
        type="thumbnail"
        sizes="295px xs:607px sm:354px md:456px lg:588px"
        class-name="thumbnail"
        :img-attrs="{ property: 'image' }"
      />

      <div class="overlay" />

      <div class="inner work">
        <span class="h3">
          {{ work.category }}
        </span>
        <Component :is="titleTag" property="headline" class="work">
          {{ work.title }}
        </Component>
        <ContentRendererMarkdown
          :value="work"
          tag="p"
          property="articleBody"
          class="lead"
        />
      </div>
    </article>
  </NuxtLink>
</template>
