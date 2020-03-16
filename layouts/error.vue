<template>
  <div class="container">
    <div>
      <h1 v-if="error.statusCode === 404">404</h1>
      <h1 v-else>Une erreur s'est produite</h1>
      <p>Oups… pas de bol.</p>
      <p>
        <nuxt-link to="/">Retour à la page d'accueil</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      titleTemplate: 'Page non trouvée — %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Page non trouvée, pas de bol.'
        },
        { name: 'robots', content: 'noindex, follow' }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.univerweb.dz/404'
        }
      ]
    }
  }
}
</script>
