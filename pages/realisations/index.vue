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

  head({ $config: { baseURL } }) {
    let routeItem = `${baseURL}/`
    if (this.$i18n.locale !== 'fr') {
      routeItem = `${baseURL}/${this.$i18n.locale}`
    }

    return {
      titleTemplate: `${this.title} — ${this.$t('name')}`,

      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description }
      ],

      script: [
        {
          json: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: this.$t('name'),
                item: routeItem
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: this.title,
                item: `${baseURL}${this.$route.fullPath}`
              }
            ]
          },
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
