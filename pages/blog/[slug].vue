<script setup lang="ts">
import { createError } from 'h3'
import type { Blog } from '../../types'

const { locale, t } = useI18n()
const seo = useSeo()
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

const createdAt = new Intl.DateTimeFormat(locale.value, { dateStyle: 'long' }).format(new Date(blog.createdAt))
const createdAtIso = new Date(blog.createdAt).toISOString()
const UpdatedAtIso = new Date(blog.updatedAt).toISOString()

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
        <ul class="tags">
          <li v-for="tag in blog.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>
        <p class="lead meta">
          <time property="dateCreated datePublished" :datetime="createdAtIso">
            {{ createdAt }}
          </time>
          <time property="dateModified" :datetime="UpdatedAtIso" :content="UpdatedAtIso" />
          — {{ t('blog.by') }}
          <span v-if="blog.author" property="author" typeof="Person">
            <span property="name">{{ blog.author.name }}</span>
            <meta property="url" :content="blog.author.url">
          </span>
          <span v-else property="author" typeof="Organization">
            <span property="name">{{ t('name') }}</span>
            <meta property="url" :content="seo.baseUrl">
          </span>
          <span property="publisher" typeof="Organization">
            <meta property="name" :content="t('name')">
            <meta property="url" :content="seo.baseUrl">
          </span>
        </p>
      </div>

      <div class="container">
        <div class="banner card">
          <AppImg
            property="image"
            :src="`/images/blog/${blog.slug}_thumbnail.jpg`"
            :alt="blog.desc"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
          />
        </div>
      </div>
    </article>
    <LazyAppRequest />
  </main>
</template>
