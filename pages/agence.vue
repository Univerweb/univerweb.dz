<template>
  <main>
    <div class="container intro">
      <h1>{{ headline }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ method.title }}</h2>
      </div>
      <ol class="details">
        <li v-for="(value, name) in method.content" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">{{ value }}</p>
        </li>
      </ol>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ choose.title }}</h2>
      </div>
      <div class="details">
        <div v-for="(value, name) in choose.content" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">{{ value }}</p>
        </div>
      </div>
    </div>
    <AppRequest />
  </main>
</template>

<script>
export default {
  name: 'AgencePage',

  async asyncData({ $content, app }) {
    const { title, description, headline, lead, method, choose } = await $content(app.i18n.locale, 'agence').fetch()

    return {
      title,
      description,
      headline,
      lead,
      method,
      choose
    }
  },

  head() {
    let routeItem = `${this.$config.baseURL}/`
    if (this.$i18n.locale !== 'fr') {
      routeItem = `${this.$config.baseURL}/${this.$i18n.locale}`
    }

    return {
      title: this.title,

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
                name: this.title
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

<style lang="scss">
ol {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: counterName;
  li:before {
    counter-increment: counterName;
    content: counters(counterName, '-');
    color: $secondary;
    font-family: $fontMedium;
    @include size(56);
  }
}
</style>
