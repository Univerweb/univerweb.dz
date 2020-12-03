<template>
  <main>
    <div class="container intro">
      <h1>{{ $t('prestations.headline') }}</h1>
      <p class="lead">{{ $t('prestations.body') }}</p>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ $t('prestations.webDesign.headline') }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ $t('prestations.webDesign.body') }}</p>
        <ul class="item">
          <li v-for="item in $t('prestations.webDesign.tags')" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ $t('prestations.dev.headline') }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ $t('prestations.dev.body') }}</p>
        <ul class="item">
          <li v-for="item in $t('prestations.dev.tags')" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ $t('prestations.support.headline') }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ $t('prestations.support.body') }}</p>
        <ul class="item">
          <li v-for="item in $t('prestations.support.tags')" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.$t('menu.prestations')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('prestations.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('menu.prestations')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('prestations.description')
        }
      ]
    }
  }
}
</script>
