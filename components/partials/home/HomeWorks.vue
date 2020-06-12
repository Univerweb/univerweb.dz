<template>
  <section class="container works">
    <h2 class="h1">{{ $t('works.title') }}</h2>

    <div class="grid">
      <div v-for="(work, index) in works.slice(0, 6)" :key="index" class="item">
        <h3>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            {{ work.title }}
          </nuxt-link>
        </h3>
        <nuxt-link :to="localePath('/realisations/' + work.slug)">
          <img :src="API_URL + work.thumbnail.uri.url" :alt="work.title" />
          <p>{{ work.title }}</p>
        </nuxt-link>
      </div>
    </div>

    <div class="more">
      <nuxt-link :to="localePath('realisations')" class="btn">
        {{ $t('works.title') }}
        <home-arrow />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
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
  }
}
</script>

<style lang="scss">
.more {
  display: grid;
  justify-content: end;
  margin-top: 30px;
  @media (min-width: $sm) {
    margin-top: 45px;
  }
  @media (min-width: $md) {
    margin-top: 70px;
  }
  & .arrow {
    fill: currentColor;
    height: 5px;
    transform: rotate(-90deg);
    margin-left: 10px;
    margin-bottom: 2px;
    [dir='rtl'] & {
      transform: rotate(90deg);
      margin-left: 0;
      margin-right: 10px;
    }
  }
}
</style>
