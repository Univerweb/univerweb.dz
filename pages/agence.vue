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
        <li class="item">
          <h3 class="h2">{{ $t('agency.methode.ecoute.title') }}</h3>
          <p>{{ $t('agency.methode.ecoute.text') }}</p>
        </li>
        <li class="item">
          <h3 class="h2">{{ $t('agency.methode.recherche.title') }}</h3>
          <p>{{ $t('agency.methode.recherche.text') }}</p>
        </li>
        <li class="item">
          <h3 class="h2">{{ $t('agency.methode.creation.title') }}</h3>
          <p>{{ $t('agency.methode.creation.text') }}</p>
        </li>
        <li class="item">
          <h3 class="h2">{{ $t('agency.methode.suivi.title') }}</h3>
          <p>{{ $t('agency.methode.suivi.text') }}</p>
        </li>
      </ol>
    </div>

    <div class="container">
      <h2 class="h1">{{ $t('agency.choisir.title') }}</h2>
      <div class="grid">
        <div class="item">
          <h3 class="h2">{{ $t('agency.choisir.prestation.title') }}</h3>
          <p>{{ $t('agency.choisir.prestation.text') }}</p>
        </div>
        <div class="item">
          <h3 class="h2">{{ $t('agency.choisir.pointe.title') }}</h3>
          <p>{{ $t('agency.choisir.pointe.text') }}</p>
        </div>
        <div class="item">
          <h3 class="h2">{{ $t('agency.choisir.projet.title') }}</h3>
          <p>{{ $t('agency.choisir.projet.text') }}</p>
        </div>
        <div class="item">
          <h3 class="h2">{{ $t('agency.choisir.design.title') }}</h3>
          <p>{{ $t('agency.choisir.design.text') }}</p>
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
