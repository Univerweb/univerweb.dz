<template>
  <main id="main">
    <section class="container">
      <h1>{{ $t('works.title') }}</h1>
      <div class="grid works">
        <div v-for="(work, index) in works" :key="index" class="work">
          <nuxt-link
            :to="
              localePath({ name: 'realisations-id', params: { id: work.slug } })
            "
          >
            <img :src="work.thumbnail" :alt="work.name" />
            <h2 class="h3">{{ work.name }}</h2>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('all', [
      {
        name: 'Acodim',
        content: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=1',
        slug: 'acodim'
      },
      {
        name: 'Botanique Algérie',
        content: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=2',
        slug: 'botanique-algerie'
      },
      {
        name: 'TPBL',
        content: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=3',
        slug: 'tpbl'
      },
      {
        name: 'infoElec',
        content: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=4',
        slug: 'infoelec'
      },
      {
        name: 'Soprofort',
        content: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=5',
        slug: 'soprofort'
      },
      {
        name: 'Corim',
        content: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=6',
        slug: 'corim'
      }
    ])
    return {
      works: store.state.works
    }
  },
  data() {
    return {
      title: 'Réalisations',
      description: 'Contenu à venir…'
    }
  },
  head() {
    return {
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

<style>
.works {
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}
img {
  width: 100%;
  height: auto;
}

.h3 {
  font-size: 24px;
  line-height: 32px;
  margin: 20px 0 0;
}
</style>
