<script setup lang="ts">
import type { Blog } from '../../types'

export interface Props {
  headlineTag?: string
  limit?: number
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  limit: 0,
  more: false,
  titleTag: 'h2',
})

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: blog } = await useAsyncData('blog', () => queryContent('blog', locale.value)
  .only(['title', 'slug'])
  .sort({ _id: -1 })
  .limit(props.limit)
  .find())

const articles = blog.value as Blog[]
</script>

<template>
  <section class="container works">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t('blog.headline') }}
      </Component>
    </div>

    <ul v-if="articles?.length" class="details">
      <BlogListItem v-for="article in articles" :key="article.slug" :blog="article" :title-tag="titleTag" />
    </ul>

    <div v-if="more" class="more">
      <NuxtLink :to="localePath('blog')" class="btn">
        {{ t('home.more') }}
        <NuxtIcon name="arrow" />
      </NuxtLink>
    </div>
  </section>
</template>
