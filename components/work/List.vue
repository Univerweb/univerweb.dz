<script setup lang="ts">
import type { Post } from '../../types'

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

const { data: _posts } = await useAsyncData('works', () => queryContent('works', locale.value)
  .only(['title', 'description', 'slug', 'createdAt', 'updatedAt', 'tags', 'lead'])
  .sort({ _id: -1 })
  .limit(props.limit)
  .find())

const posts = _posts.value as Post[]
</script>

<template>
  <section class="container">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t('works.headline') }}
      </Component>
    </div>

    <div v-if="posts?.length" class="details detailsCard">
      <WorkListItem v-for="post in posts" :key="post.slug" :post="post" :title-tag="titleTag" />
    </div>

    <div v-if="more" class="more">
      <NuxtLink :to="localePath('realisations')" class="btn">
        {{ t('home.more') }}
        <NuxtIcon name="arrow" />
      </NuxtLink>
    </div>
  </section>
</template>
