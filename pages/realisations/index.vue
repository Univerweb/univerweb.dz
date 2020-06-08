<template>
  <main id="main" class="works">
    <!-- <works /> -->
    <div class="container">
      <h1>{{ $t('works.title') }}</h1>

      <div v-if="$fetchState.pending" class="grid">
        <content-placeholders>
          <content-placeholders-img />
          <content-placeholders-text :lines="1" />
        </content-placeholders>

        <content-placeholders>
          <content-placeholders-img />
          <content-placeholders-text :lines="1" />
        </content-placeholders>

        <content-placeholders>
          <content-placeholders-img />
          <content-placeholders-text :lines="1" />
        </content-placeholders>
      </div>

      <div v-else class="grid">
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
// import works from '@/components/partials/home/works'

export default {
  components: {
    // works,
  },

  async fetch() {
    const API_PATH = this.$i18n.locale + '/v1/works'
    const FILTERS =
      'sort=-nid&fields[node--work]=title,slug,thumbnail&fields[file--file]=uri'

    this.works = await this.$http
      .$get(process.env.apiUrl + `/${API_PATH}?${FILTERS}`)
      .then((works) => works.data)
  },

  data() {
    return {
      works: [],
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
