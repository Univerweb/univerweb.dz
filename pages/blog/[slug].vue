<script setup lang="ts">
import { createError } from 'h3'
import type { Blog } from '../../types'

const { locale } = useI18n()
const route = useRoute()
const path = `/blog/${locale.value}/${route.params.slug}`

const { data: _blog, error } = await useAsyncData(`blog-${locale.value}-${route.params.slug}`, () => {
  return queryContent()
    .where({ _path: path })
    .only(['title', 'desc', 'slug', 'createdAt', 'updatedAt', 'tags', 'author'])
    .findOne()
})

const blog = _blog.value as Blog

if (error.value) {
  showError(
    createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    }),
  )
}

useHead({
  title: blog.title,
})
</script>

<template>
  <main id="main" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <div class="container intro">
        <h1 property="headline">
          {{ blog.title }}
        </h1>
      </div>
    </article>
    <LazyAppRequest />
  </main>
</template>
