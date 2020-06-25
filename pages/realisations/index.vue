<template>
  <main>
    <div class="container">
      <h1>{{ $t('works.title') }}</h1>
      <div class="details">
        <div v-for="(work, index) in $t('worksItem')" :key="index" class="item">
          <h2 class="h3">
            <nuxt-link :to="localePath('/realisations/' + work.slug)">
              {{ work.title }}
            </nuxt-link>
          </h2>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            <div class="card">
              <img v-lazy="'/works/' + work.slug + '.jpg'" :alt="work.title" />
            </div>
            <p>{{ work.title }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: { class: 'works' },
      titleTemplate: `${this.$t('works.title')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('works.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('works.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('works.description')
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
.works .details {
  row-gap: 48px;
  @media (min-width: $sm) {
    column-gap: 48px;
    & .item:nth-child(odd) {
      grid-column: 1 / 7;
    }
    & .item:nth-child(even) {
      grid-column: 7 / 13;
    }
  }

  @media (min-width: $md) {
    & .item:nth-child(3n + 1) {
      grid-column: 1 / 5;
    }
    & .item:nth-child(3n + 2) {
      grid-column: 5 / 9;
    }
    & .item:nth-child(3n + 3) {
      grid-column: 9 / 13;
    }
  }
}

.works .item {
  display: grid;
  align-content: start;
  & h3,
  & .h3 {
    margin-top: 12px;
    margin-bottom: 0;
    order: 1;
  }
  & > a {
    position: relative;
    display: grid;
    & p {
      display: grid;
      align-items: end;
      background: $blue;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 12px;
      opacity: 0;
      transition: opacity $transition;
    }
    &:hover p {
      opacity: 1;
    }
  }
}

.card {
  display: grid;
  background: $light;
}

img[lazy='error'] {
  background: red;
}

img[lazy='loading'] {
  background: $light;
  opacity: 0;
  transition: opacity $transition;
}

img[lazy='loaded'] {
  opacity: 1;
}
</style>
