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
            <img :src="URL_API + work.thumbnail.uri.url" :alt="work.title" />
            <p>{{ work.title }}</p>
          </nuxt-link>
        </div>
      </div>

      <div class="grid pagination">
        <nuxt-link :to="localePath('/realisations')" class="btn previous">
          <lang-arrow />
        </nuxt-link>
        <nuxt-link :to="localePath('/realisations')" class="btn next">
          <lang-arrow />
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
// import works from '@/components/partials/home/works'
import LangArrow from '@/components/svg/LangArrow'

export default {
  components: {
    // works,
    LangArrow
  },

  async asyncData({ app }) {
    const URL_API = process.env.URL_API
    const PATH_API = app.i18n.locale + '/v1/works'
    const SORT_WORKS = 'sort=-nid'
    const FIELD_WORKS = 'fields[node--work]=title,slug,thumbnail'
    const FILE_WORKS = 'fields[file--file]=uri'
    const LIMIT_WORKS = 'page[limit]=6'
    const { data } = await axios.get(
      `${URL_API}/${PATH_API}?${SORT_WORKS}&${FIELD_WORKS}&${FILE_WORKS}&${LIMIT_WORKS}`
    )
    return {
      works: data.data,
      pagination: data.links,
      URL_API
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

.works .pagination {
  grid-template-columns: repeat(2, auto);
  margin-top: 70px;
}

.previous,
.next {
  width: 50px;
  padding: 0;
  & .arrow {
    fill: currentColor;
    height: 5px;
  }
  &:not(.next) .arrow {
    transform: rotate(90deg);
  }
  &:not(.previous) .arrow {
    transform: rotate(-90deg);
  }
}
</style>
