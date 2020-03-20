<template>
  <main class="container hero error">
    <section>
      <h1 v-if="error.statusCode === 404">{{ title }}</h1>
      <h1 v-else>Une erreur s'est produite</h1>
      <p class="h2">Oups… pas de bol.</p>
      <nuxt-link to="/" class="btn">Retour à l'accueil</nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      title: 'Page non trouvée',
      description: 'Page non trouvée, pas de bol.'
    }
  },
  head() {
    return {
      titleTemplate: `${this.title} — %s`,
      meta: [
        {
          name: 'robots',
          content: 'noindex, follow'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: ''
        },
        {
          hid: 'og:description',
          name: 'og:description',
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
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: null
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          content: null
        }
      ]
    }
  }
}
</script>

<style>
.hero.error {
  justify-content: center;
  text-align: center;
}
</style>
