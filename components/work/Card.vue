<script setup lang="ts">
import type { Work } from '../../types'

defineProps<{
  card: Work
  titleTag: string
}>()

const { t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`${card._path}`)" class="card">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${config.public.baseURL}${localePath(`${card._path}`)}`" />
      </span>
      <span property="author publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="config.public.baseURL" />
      </span>
      <time property="dateCreated datePublished" :datetime="card.createdAt.toString()" />
      <time property="dateModified" :datetime="card.updatedAt.toString()" />
      <span v-for="tag in card.tags" :key="tag" property="keywords" :content="tag" />
      <span property="articleSection" :content="t('works.title')" />
      <span property="description" :content="card.description" />

      <AppPicture
        :picture="card"
        type="thumbnail"
        :img-attrs="{ property: 'image' }"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
        class-name="thumbnail"
      />

      <div class="overlay" />

      <div class="inner work">
        <span class="h3">
          {{ card.category }}
        </span>
        <Component :is="titleTag" property="headline" class="work">
          {{ card.title }}
        </Component>
        <ContentRendererMarkdown
          :value="card"
          :components="{ p: 'span' }"
          tag="p"
          property="articleBody"
          class="lead"
        />
      </div>
    </article>
  </NuxtLink>
</template>
