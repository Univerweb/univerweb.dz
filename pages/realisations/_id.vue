<template>
  <main id="main">
    <div class="container">
      <h1>{{ work.title }}</h1>
      <p class="lead">{{ work.body.value }}</p>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return Boolean(params.id)
  },
  async asyncData({ params, error, app }) {
    const locale = app.i18n.locale

    const url = `https://api.univerweb.dz/${locale}/v1/works/${params.id}`

    try {
      const {
        data: {
          data: { attributes }
        }
      } = await axios.get(url)
      return { work: attributes }
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
