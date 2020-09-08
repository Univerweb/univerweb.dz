<template>
  <main>
    <div class="container">
      <div class="intro">
        <h1>{{ $t('prestations.headline') }}</h1>
        <p class="lead">{{ $t('prestations.body') }}</p>
      </div>
    </div>
    <div class="container webDesign">
      <div class="intro">
        <h2>{{ $t('prestations.webDesign.headline') }}</h2>
        <p class="lead">{{ $t('prestations.webDesign.body') }}</p>
      </div>
    </div>
    <div class="container dev">
      <div class="intro">
        <h2>{{ $t('prestations.dev.headline') }}</h2>
        <p class="lead">{{ $t('prestations.dev.body') }}</p>
      </div>
    </div>
    <div class="container support">
      <div class="intro">
        <h2>{{ $t('prestations.support.headline') }}</h2>
        <p class="lead">{{ $t('prestations.support.body') }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: { class: 'prestations' },
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

<style lang="scss">
.prestations .webDesign .intro *,
.prestations .support .intro * {
  @media (min-width: $sm) {
    grid-column: 6 / 13;
  }
  @media (min-width: $md) {
    grid-column: 7 / 13;
  }
}
</style>
