<template>
  <main>
    <div class="container intro">
      <h1>{{ $t('agency.headline') }}</h1>
      <p class="lead">{{ $t('agency.body') }}</p>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ $t('agency.method.title') }}</h2>
      </div>
      <ol class="details">
        <li v-for="(value, name) in $t('agency.method.content')" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">{{ value }}</p>
        </li>
      </ol>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ $t('agency.choose.title') }}</h2>
      </div>
      <div class="details">
        <div v-for="(value, name) in $t('agency.choose.body')" :key="name" class="item">
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
  head() {
    return {
      titleTemplate: `${this.$t('menu.agence')} — ${this.$t('name')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('agency.description') },
        { hid: 'og:title', property: 'og:title', content: this.$t('menu.agence') },
        { hid: 'og:description', property: 'og:description', content: this.$t('agency.description') }
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
    @include size(56);
    font-weight: 800;
    [lang='ar'] & {
      font-family: $font;
    }
  }
}
</style>
