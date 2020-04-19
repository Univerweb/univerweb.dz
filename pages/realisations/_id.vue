<template>
  <main id="main">
    <div class="container hero">
      <h1>{{ work.name }}</h1>
      <p class="h2">{{ work.description }}</p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    if (!store.state.works.length) {
      await store.dispatch('all', [
        {
          name: 'Acodim',
          description: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=1"',
          slug: 'acodim'
        },
        {
          name: 'Botanique Algérie',
          description: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=2"',
          slug: 'botanique-algerie'
        },
        {
          name: 'TPBL',
          description: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=3',
          slug: 'tpbl'
        },
        {
          name: 'infoElec',
          description: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=4',
          slug: 'infoelec'
        },
        {
          name: 'Soprofort',
          description: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=5',
          slug: 'soprofort'
        },
        {
          name: 'Corim',
          description: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=6',
          slug: 'corim'
        }
      ])
    }
    return {
      work: store.state.works.find((work) => work.slug === route.params.id)
    }
  },

  head() {
    return {
      titleTemplate: `${this.work.name} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
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
