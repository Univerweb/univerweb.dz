<template>
  <main id="main" class="works">
    <!-- <works /> -->
    <div class="container">
      <h1>{{ $t('works.title') }}</h1>
      <div class="grid">
        <div v-for="work in works.data" :key="work.id" class="item">
          <h2 class="h3">
            <NuxtLink :to="localePath('/realisations/' + work.id)">
              {{ work.attributes.title }}
            </NuxtLink>
          </h2>
          <!-- <nuxt-link :to="localePath('/realisations/' + work.id)">
            <img :src="work.thumbnailurl" :alt="work.title" />
            <p>{{ work.body }}</p>
          </nuxt-link> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import works from '@/components/partials/home/works'

import axios from 'axios'

export default {
  components: {
    // works
  },

  async asyncData({ app }) {
    const locale = app.i18n.locale

    const { data } = await axios.get(
      'https://api.univerweb.dz/' + locale + '/v1/works'
    )
    return { works: data }
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
