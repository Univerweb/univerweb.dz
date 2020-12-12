<template>
  <section class="container works">
    <div class="intro">
      <WorksHeadline>{{ headline }}</WorksHeadline>
    </div>
    <div class="details">
      <div v-for="work in works" :key="work.slug" class="item">
        <WorksTitle>
          <NuxtLink :to="localePath('/realisations/' + work.slug)">{{ work.title }}</NuxtLink>
        </WorksTitle>
        <NuxtLink :to="localePath('/realisations/' + work.slug)">
          <div class="card">
            <img v-lazy="'/works/' + work.slug + '/' + work.slug + '_thumbnail.jpg'" :alt="work.title" />
          </div>
          <p class="h6">{{ work.lead }}</p>
        </NuxtLink>
      </div>
    </div>
    <WorksMore />
  </section>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true
    },
    works: {
      type: Array,
      required: true
    }
  }
}
</script>
