<template>
  <main>
    <AppWorks :headline="headline" :works="works" />
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
const title = ref('My App')
const description = ref('My App Description')
const name = ref('Name')
const item = ref('Item')

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    }
  ],
  script: [
    {
      json: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: name, item: item },
          { '@type': 'ListItem', position: 2, name: title }
        ]
      },
      type: 'application/ld+json'
    }
  ]
})
</script>

<script>
export default {
  name: 'RealisationsPage',

  async asyncData({ $content, app }) {
    const { title, description, headline } = await $content(app.i18n.locale, 'works').only(['title', 'description', 'headline']).fetch()
    const works = await $content(app.i18n.locale, 'works_slug').only(['slug', 'title', 'description', 'tags', 'lead']).sortBy('position', 'desc').fetch()

    return {
      title,
      description,
      headline,
      works
    }
  }

  // OLD Code
  // head() {
  //   let routeItem = `${this.$config. public.baseURL}/`
  //   if (this.$i18n.locale !== 'fr') {
  //     routeItem = `${this.$config. public.baseURL}/${this.$i18n.locale}`
  //   }

  //   return {
  //     title: this.title,

  //     meta: [
  //       { hid: 'description', name: 'description', content: this.description },
  //       { hid: 'og:title', property: 'og:title', content: this.title },
  //       { hid: 'og:description', property: 'og:description', content: this.description }
  //     ],

  //     script: [
  //       {
  //         json: {
  //           '@context': 'https://schema.org',
  //           '@type': 'BreadcrumbList',
  //           itemListElement: [
  //             {
  //               '@type': 'ListItem',
  //               position: 1,
  //               name: this.$t('name'),
  //               item: routeItem
  //             },
  //             {
  //               '@type': 'ListItem',
  //               position: 2,
  //               name: this.title
  //             }
  //           ]
  //         },
  //         type: 'application/ld+json'
  //       }
  //     ]
  //   }
  // }
}
</script>
