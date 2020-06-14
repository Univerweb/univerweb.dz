<template>
  <main>
    <div class="container grid">
      <div class="item">
        <h1>{{ $t('agency.title') }}</h1>
      </div>
      <div class="item">
        <h2>{{ $t('agency.webAgency.title') }}</h2>
        <p>{{ $t('agency.webAgency.text_1') }}</p>
        <p>{{ $t('agency.webAgency.text_2') }}</p>
      </div>
    </div>
    <div class="container working">
      <h2 class="h1">{{ $t('agency.methode.title') }}</h2>
      <ol class="grid">
        <li
          v-for="(name, value) in $t('agency.methode.list')"
          :key="value"
          class="item"
        >
          <h3 class="h2">{{ value }}</h3>
          <p>{{ name }}</p>
        </li>
      </ol>
    </div>
    <div class="container">
      <h2 class="h1">{{ $t('agency.choisir.title') }}</h2>
      <div class="grid">
        <div
          v-for="(name, value) in $t('agency.choisir.list')"
          :key="value"
          class="item"
        >
          <h3 class="h2">{{ value }}</h3>
          <p>{{ name }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.$t('agency.title')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('agency.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('agency.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('agency.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@media (min-width: $lg) {
  .working .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

ol {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: counterName;
  & li:before {
    counter-increment: counterName;
    content: counters(counterName, '-', decimal-leading-zero);
    color: $blue;
    font-weight: 800;
    font-size: 84px;
    line-height: 84px;
  }
}
</style>
