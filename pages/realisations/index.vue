<template>
  <main id="main" class="works">
    <div class="container">
      <h1>{{ $t('works.title') }}</h1>
      <div class="grid">
        <div v-for="(work, index) in $t('workItem')" :key="index" class="item">
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
@media (min-width: $md) {
  .works .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.works .item {
  display: grid;
  align-content: start;
  & h3,
  & .h3 {
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
      padding: 15px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
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
