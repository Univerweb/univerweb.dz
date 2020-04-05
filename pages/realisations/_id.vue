<template>
  <main id="main">
    <section class="container hero">
      <h1>{{ $t('realisations.acodim.title') }}</h1>
      <p class="h2">{{ work.content }}</p>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    if (!store.state.works.length) {
      await store.dispatch('all', [
        {
          name: 'Acodim',
          content: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=1"',
          slug: 'acodim'
        },
        {
          name: 'Botanique Algérie',
          content: 'Contenu à venir…',
          thumbnail: 'https://picsum.photos/750/800?random=2"',
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
    }
    return {
      work: store.state.works.find((work) => work.slug === route.params.id)
    }
  },
  head() {
    return {
      titleTemplate: `${this.work.name} — %s`,
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
