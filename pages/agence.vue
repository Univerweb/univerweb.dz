<template>
  <main id="main">
    <section class="container grid grid-2">
      <h1>{{ $t('agence.title') }}</h1>
      <div>
        <h2>{{ $t('agence.agence-web.title') }}</h2>
        <p>{{ $t('agence.agence-web.text.1') }}</p>
        <p>{{ $t('agence.agence-web.text.2') }}</p>
      </div>
    </section>
    <section class="container">
      <h2 class="h1 grid grid-4">{{ $t('agence.methode.title') }}</h2>
      <div class="grid grid-4">
        <div>
          <h3 class="h2">{{ $t('agence.methode.ecoute.title') }}</h3>
          <p>{{ $t('agence.methode.ecoute.text') }}</p>
        </div>
        <div>
          <h3 class="h2">{{ $t('agence.methode.recherche.title') }}</h3>
          <p>{{ $t('agence.methode.recherche.text') }}</p>
        </div>
        <div>
          <h3 class="h2">{{ $t('agence.methode.creation.title') }}</h3>
          <p>{{ $t('agence.methode.creation.text') }}</p>
        </div>
        <div>
          <h3 class="h2">{{ $t('agence.methode.suivi.title') }}</h3>
          <p>{{ $t('agence.methode.suivi.text') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.$t('agence.title')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('agence.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('agence.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('agence.description')
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
