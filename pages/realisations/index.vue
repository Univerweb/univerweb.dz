<template>
  <main id="main" class="works">
    <!-- <works /> -->
    <div class="container">
      <h1>{{ $t('works.title') }}</h1>
      <div class="grid">
        <div v-for="(work, index) in works" :key="index" class="item">
          <h2 class="h3">
            <NuxtLink :to="localePath(`/realisations/${work.slug}`)">
              {{ work.title }}
            </NuxtLink>
          </h2>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            <img :src="API_URL + work.thumbnail.uri.url" :alt="work.title" />
            <p>{{ work.title }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
// import works from '@/components/partials/home/works'

export default {
  components: {
    // works,
  },

  async asyncData({ app }) {
    const API_PATH = app.i18n.locale + '/v1/works'
    const FILTERS =
      'sort=-nid&fields[node--work]=title,slug,thumbnail&fields[file--file]=uri'
    const { data } = await axios.get(
      process.env.apiUrl + `/${API_PATH}?${FILTERS}`
    )
    return {
      works: data.data,
      API_URL: process.env.apiUrl
    }
  },

  head() {
    return {
      bodyAttrs: { class: 'works' },
      titleTemplate: `${this.$t('works.title')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('works.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('works.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('works.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@media (min-width: $md) {
  .works .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
