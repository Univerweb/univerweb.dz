<template>
  <main>
    <AppWorks :headline="headline" :works="works" />
    <AppRequest />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const { title, description, headline } = await $content(app.i18n.locale, 'works').only(['title', 'description', 'headline']).fetch()
    const works = await $content(app.i18n.locale, 'works_slug').only(['slug', 'title', 'tags', 'lead']).sortBy('position', 'desc').fetch()

    return {
      title,
      description,
      headline,
      works
    }
  },

  head() {
    return {
      titleTemplate: `${this.title} — ${this.$t('name')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description }
      ]
    }
  }
}
</script>
