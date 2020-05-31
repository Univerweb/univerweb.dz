<template>
  <main id="main">
    <div class="container">
      <h1>{{ id }}</h1>
      <p class="lead">{{ work.description }}</p>
      <!-- <p class="lead">{{ work.description }} {{ description }}</p> -->
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error, app }) {
    const locale = app.i18n.locale
    try {
      const { data } = await axios.get(
        'https://api.univerweb.dz/' + locale + `/v1/works/${+params.work.id}`
      )
      return { data }
    } catch (e) {
      error({ message: 'Page non trouvée', statusCode: 404 })
    }
  },

  head() {
    return {
      // titleTemplate: `${this.work.name} — ${this.$t('name')}`,
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
