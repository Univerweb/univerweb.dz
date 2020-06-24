<template>
  <main>
    <div class="container intro">
      <h1>{{ $t('agency.webAgency.title') }}</h1>
      <p class="lead">
        {{ $t('agency.webAgency.text') }}
      </p>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ $t('agency.methode.title') }}</h2>
      </div>
      <ol class="details">
        <li
          v-for="(name, value) in $t('agency.methode.list')"
          :key="value"
          class="item"
        >
          <h3>{{ value }}</h3>
          <p class="lead">{{ name }}</p>
        </li>
      </ol>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ $t('agency.choisir.title') }}</h2>
      </div>
      <div class="details">
        <div
          v-for="(name, value) in $t('agency.choisir.list')"
          :key="value"
          class="item"
        >
          <h3>{{ value }}</h3>
          <p class="lead">{{ name }}</p>
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
ol {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: counterName;
  & li:before {
    counter-increment: counterName;
    content: counters(counterName, '-');
    color: $blue;
    @include size(56);
    font-weight: 800;
  }
}
</style>
