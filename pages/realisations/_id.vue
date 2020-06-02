<template>
  <main id="main">
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="lead">
        <img
          :src="'https://api.univerweb.dz/' + thumbnail.uri.url"
          :alt="title"
        />
      </p>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, error, app }) {
    const locale = app.i18n.locale
    const url =
      'https://api.univerweb.dz/' +
      locale +
      '/v1/works' +
      '?' +
      '&fields[file--file]=uri'

    const {
      data: { data }
    } = await axios.get(url)
    const work = data.find(({ slug }) => slug === params.id)
    if (!work) {
      error({ message: 'Page non trouvée', statusCode: 404 })
    }
    return work
  },

  head() {
    return {
      titleTemplate: `${this.title} — ${this.$t('name')}`,
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
