<template>
  <main id="main">
    <div class="container works">
      <h1>{{ $t('works.title') }}</h1>

      <div class="grid">
        <div
          v-for="(work, index) in $t('works.work')"
          :key="work.id"
          :index="index"
          class="item"
        >
          <h2 class="h3">
            <nuxt-link :to="localePath('/realisations/' + work.slug)">
              {{ work.name }}
            </nuxt-link>
          </h2>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            <img :src="work.thumbnail" :alt="work.name" />
            <p>{{ work.description }}</p>
          </nuxt-link>
        </div>
      </div>

      <!-- <div class="grid">
        <div v-for="(work, index) in works" :key="index" class="item">
          <h2 class="h3">
            <nuxt-link
              :to="
                localePath({
                  name: 'realisations-id',
                  params: { id: work.slug }
                })
              "
            >
              {{ work.name }}
            </nuxt-link>
          </h2>
          <nuxt-link
            :to="
              localePath({ name: 'realisations-id', params: { id: work.slug } })
            "
          >
            <img :src="work.thumbnail" :alt="work.name" />
            <p>{{ work.description }}</p>
          </nuxt-link>
        </div>
      </div> -->
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('all', [
      {
        name: 'Acodim',
        description: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=1',
        slug: 'acodim'
      },
      {
        name: 'Botanique Algérie',
        description: 'Contenu à venir…',
        thumbnail: 'https://picsum.photos/750/800?random=2',
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
    return {
      works: store.state.works.slice(0, 6)
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

<style lang="scss">
@media (min-width: $sm) {
  .works .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: $md) {
  .works .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.works .item {
  display: grid;
  align-content: start;

  & h2 {
    order: 1;
  }

  & > a {
    position: relative;
    display: grid;

    & p {
      display: grid;
      align-items: end;
      background: $blue;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 15px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover p {
      opacity: 1;
    }
  }
}
</style>
