<template>
  <main>
    <div class="container">
      <div class="intro">
        <h1>{{ $t('works.title') + '.' }}</h1>
      </div>
      <div class="details">
        <div v-for="(work, index) in $t('work')" :key="index" class="item">
          <h2 class="h3">
            <nuxt-link :to="localePath('/realisations/' + work.slug)">
              {{ work.title }}
            </nuxt-link>
          </h2>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            <div class="card">
              <img
                v-lazy="
                  '/works/' + work.slug + '/' + work.slug + '_thumbnail.jpg'
                "
                :alt="work.title"
              />
            </div>
            <p class="h6">{{ work.body }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
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
        }
      ]
    }
  }
}
</script>
