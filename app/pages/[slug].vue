<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const head = useLocaleHead()

const { data: legal } = await useAsyncData(
  () => `legal-${locale.value}-${slug}`,
  () => queryCollection(`legal_${locale.value}`)
    .select('title', 'description', 'createdAt', 'updatedAt', 'body')
    .path(computed(() => localePath(path)).value)
    .first(),
  { watch: [locale] },
)

if (!legal.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
    fatal: true,
  })
}

useSeo({
  page: 'legal',
  title: () => legal.value!.title,
  description: () => legal.value!.description,
})

useSchemaOrg([
  defineWebPage({
    datePublished: () => schemaDate(legal.value!.createdAt),
    dateModified: () => schemaDate(legal.value!.updatedAt),
  }),
])
</script>

<template>
  <main v-if="legal" class="legal blog">
    <article
      aria-labelledby="article-title"
      class="container container-narrow"
    >
      <header>
        <h1 id="article-title" class="h2">
          {{ legal.title }}
        </h1>

        <dl class="meta">
          <div v-if="legal.createdAt === legal.updatedAt">
            <dt>{{ t('blog.createdAt') }}&nbsp;</dt>
            <dd>
              <NuxtTime
                :datetime="legal.createdAt"
                :locale="head.htmlAttrs.lang"
                :date-style="locale === 'ar' ? 'long' : 'medium'"
              />
            </dd>
          </div>

          <div v-else>
            <dt>{{ t('blog.updatedAt') }}&nbsp;</dt>
            <dd>
              <NuxtTime
                :datetime="legal.updatedAt"
                :locale="head.htmlAttrs.lang"
                :date-style="locale === 'ar' ? 'long' : 'medium'"
              />
            </dd>
          </div>
        </dl>
      </header>

      <ContentRenderer :value="legal" class="content" />
    </article>

    <LazyAppRequest />
  </main>
</template>
