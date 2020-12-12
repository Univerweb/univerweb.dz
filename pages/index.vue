<template>
  <main>
    <HomeWelcome :headline="headline" :lead="lead" />
    <HomeWorks />
    <HomeRequest />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const { title, description, headline, lead } = await $content(app.i18n.locale, 'home').fetch()
    return { title, description, headline, lead }
  },

  head() {
    return {
      titleTemplate: `${this.$t('name')} — ${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description }
      ]
    }
  }
}
</script>
