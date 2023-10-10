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
      <div property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${config.public.baseURL}${localePath(`${card._path}`)}`" />
      </div>
      <span property="articleSection" :content="t('works.title')" />
      <span property="description" :content="card.description" />
      <time property="dateCreated datePublished" :datetime="card.createdAt.toString()" />
      <time property="dateModified" :datetime="card.updatedAt.toString()" />
      <div property="author publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="config.public.baseURL" />
      </div>

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
        <ul class="tags">
          <li v-for="tag in card.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>
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
