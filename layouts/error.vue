<template>
  <div class="container">
    <div>
      <h1 v-if="error.statusCode === 404">Page non trouvée</h1>
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
  props: ['error'],
  layout: 'default',
  head() {
    return {
      titleTemplate: 'Page non trouvée — %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Page non trouvée, pas de bol.'
        }
      ]
    }
  }
}
</script>
