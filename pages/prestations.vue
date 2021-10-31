<template>
  <main>
    <div class="container intro">
      <h1>{{ headline }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ webDesign.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ webDesign.content }}</p>
        <ul class="item tags">
          <li v-for="item in webDesign.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ dev.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ dev.content }}</p>
        <ul class="item tags">
          <li v-for="item in dev.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ support.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ support.content }}</p>
        <ul class="item tags">
          <li v-for="item in support.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <AppRequest />
  </main>
</template>

<script>
export default {
  name: 'PrestationsPage',

  async asyncData({ $content, app }) {
    const { title, description, headline, lead, webDesign, dev, support } = await $content(app.i18n.locale, 'prestations').fetch()

    return {
      title,
      description,
      headline,
      lead,
      webDesign,
      dev,
      support
    }
  },

  head() {
    let routeItem = `${this.$config.baseURL}/`
    if (this.$i18n.locale !== 'fr') {
      routeItem = `${this.$config.baseURL}/${this.$i18n.locale}`
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
.prestations {
  .tags {
    color: var(--color-secondary);
    transition: color $transition;
    font-weight: 500;
    margin: 0;
  }

  @media (min-width: $md) {
    &:nth-child(even) .intro * {
      grid-column: 7 / 12;
    }

    .details {
      align-items: center;
    }

    .item:nth-child(even) {
      grid-column: 7 / 10;
    }

    &:nth-child(even) .item {
      &:nth-child(odd) {
        grid-column: 7 / 12;
      }
      &:nth-child(even) {
        grid-column: 3 / 6;
        order: -1;
      }
    }
  }
}
</style>
