<template>
  <main id="main">
    <section class="container grid grid-2">
      <h1>{{ $t('agency.title') }}</h1>
      <div>
        <h2>{{ $t('agency.webAgency.title') }}</h2>
        <p>{{ $t('agency.webAgency.text_1') }}</p>
        <p>{{ $t('agency.webAgency.text_2') }}</p>
      </div>
    </section>
    <section class="container">
      <h2 class="h1 grid grid-4">{{ $t('agency.methode.title') }}</h2>
      <div class="grid grid-4">
        <div>
          <h3 class="h2">{{ $t('agency.methode.ecoute.title') }}</h3>
          <p>{{ $t('agency.methode.ecoute.text') }}</p>
        </div>
        <div>
          <h3 class="h2">{{ $t('agency.methode.recherche.title') }}</h3>
          <p>{{ $t('agency.methode.recherche.text') }}</p>
        </div>
        <div>
          <h3 class="h2">{{ $t('agency.methode.creation.title') }}</h3>
          <p>{{ $t('agency.methode.creation.text') }}</p>
        </div>
        <div>
          <h3 class="h2">{{ $t('agency.methode.suivi.title') }}</h3>
          <p>{{ $t('agency.methode.suivi.text') }}</p>
        </div>
      </div>
    </section>
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
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: ''
        }
      ]
    }
  }
}
</script>
