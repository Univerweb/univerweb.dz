<template>
  <main>
    <HomeWelcome :headline="headline" :lead="lead" />
    <AppWorks :headline="worksPage.headline" :works="works" />
    <AppRequest />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const { title, description, headline, lead } = await $content(app.i18n.locale, 'home').fetch()
    const worksPage = await $content(app.i18n.locale, 'works').only('headline').fetch()
    const works = await $content(app.i18n.locale, 'works_slug').limit(6).sortBy('position', 'desc').fetch()
    return {
      title,
      description,
      headline,
      lead,
      worksPage,
      works
    }
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
