<script setup lang="ts">
import type { Blog } from '../../types'

export interface Props {
  headlineTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
})

const { locale, t } = useI18n()

const { data: blog } = await useAsyncData('blog', () => queryContent('blog', locale.value)
  .only(['title', 'slug'])
  .sort({ _id: -1 })
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
      <BlogListItem v-for="article in articles" :key="article.slug" :blog="article" />
    </ul>
  </section>
</template>
