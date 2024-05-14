<script setup lang="ts">
const { path } = useRoute()

const { data: prestation } = await useAsyncData(
  `prestation${path}`,
  () => queryContent()
    .only(['title'])
    .where({ _path: path })
    .findOne(),
)

if (!prestation.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}
</script>

<template>
  <main>
    <article vocab="https://schema.org/" typeof="Article">
      <div class="container intro">
        <AppBack path="prestations" menu="menu[1].label" />
        <h1 property="headline">
          {{ prestation.title }}
        </h1>
      </div>
    </article>
  </main>
</template>
