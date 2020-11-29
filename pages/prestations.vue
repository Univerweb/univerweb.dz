<template>
  <main>
    <div class="container intro">
      <h1>{{ $t('prestations.headline') }}</h1>
      <p class="lead">{{ $t('prestations.body') }}</p>
    </div>
    <div class="container">
      <div class="intro">
        <h2>{{ $t('prestations.webDesign.headline') }}</h2>
      </div>
      <div class="details">
        <ul class="item">
          <li v-for="item in $t('prestations.webDesign.tags')" :key="item">
            {{ item }}
          </li>
        </ul>
        <p class="item lead">{{ $t('prestations.webDesign.body') }}</p>
      </div>
    </div>
    <div class="container">
      <div class="intro">
        <h2>{{ $t('prestations.dev.headline') }}</h2>
      </div>
      <div class="details">
        <ul class="item">
          <li v-for="item in $t('prestations.dev.tags')" :key="item">
            {{ item }}
          </li>
        </ul>
        <p class="item lead">{{ $t('prestations.dev.body') }}</p>
      </div>
    </div>
    <div class="container">
      <div class="intro">
        <h2>{{ $t('prestations.support.headline') }}</h2>
      </div>
      <div class="details">
        <ul class="item">
          <li v-for="item in $t('prestations.support.tags')" :key="item">
            {{ item }}
          </li>
        </ul>
        <p class="item lead">{{ $t('prestations.support.body') }}</p>
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
.prestations .container:nth-child(2n) h2 {
  @media (min-width: $sm) {
    grid-column: 7 / 12;
  }
}

.prestations .container {
  .details {
    align-items: center;
    ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: 12px;
      margin: 0;
      padding: 0;
      list-style: none;
      color: $black-light;
      font-weight: 500;
      @media (min-width: $sm) {
        grid-column: 3 / 6;
      }
    }
  }
  &:nth-child(3) .details ul {
    @media (min-width: $sm) {
      grid-column: 7 / 10;
    }
  }
}

.prestations .container:nth-child(3) p {
  @media (min-width: $sm) {
    order: -1;
    grid-column: 1 / 6;
  }
}
</style>
