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
        <ul class="item">
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
        <ul class="item">
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
        <ul class="item">
          <li v-for="item in support.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <AppRequest />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const { title, description, headline, lead, webDesign, dev, support } = await $content(app.i18n.locale, 'prestations').fetch()

    return { title, description, headline, lead, webDesign, dev, support }
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
