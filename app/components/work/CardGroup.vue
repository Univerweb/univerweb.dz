<script setup lang="ts">
import type { Work } from '@/types'

interface Props {
  limit?: number
  headlineTag?: string
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  headlineTag: 'h1',
  titleTag: 'h2',
  more: false,
})

const { path } = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const { baseUrl } = useUrl()

const { data: works } = await useAsyncData(
  `works${path}`,
  () => queryContent<Work>(localePath('realisations'))
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'body'])
    .sort({ _id: -1, $numeric: true })
    .limit(props.limit)
    .find(),
  { watch: [localePath] },
)
</script>

<template>
  <section id="realisations" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('works.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <WorkCard v-for="work in works" :key="work._path" :work="work" :title-tag="titleTag" />
    </div>

    <div class="card-group">
      <NuxtLink
        v-for="work in works"
        :key="work._path"
        :to="work._path"
        class="card"
        vocab="https://schema.org/"
        typeof="Article"
      >
        <span property="author publisher" typeof="Organization">
          <span property="name" :content="t('name')" />
          <span property="url" :content="baseUrl" />
        </span>
        <time property="dateCreated datePublished" :datetime="work.createdAt.toString()" />
        <time property="dateModified" :datetime="work.updatedAt.toString()" />
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
    </div>

    <LazyAppMore v-if="more" path="realisations" :label="t('home.moreLabel.works')" class="intro-justify" />
  </section>
</template>
