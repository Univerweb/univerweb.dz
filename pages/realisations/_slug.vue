<template>
  <main id="main" class="work">
    <div class="container">
      <nuxt-link :to="localePath('realisations')" class="link">
        <lang-arrow /> {{ $t('works.title') }}
      </nuxt-link>
      <h1>{{ work.title }}</h1>

      <div class="grid work-navigation">
        <nuxt-link
          :to="
            localePath({
              name: 'realisations-slug',
              params: { slug }
            })
          "
          class="link"
          :data-text="$t('links.previous')"
        >
          {{ work.id }}
        </nuxt-link>

        <nuxt-link
          :to="
            localePath({
              name: 'realisations-slug',
              params: { slug }
            })
          "
          class="link"
          :data-text="$t('links.next')"
        >
          {{ work.id }}
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, error, app }) {
    const API_PATH = app.i18n.locale + '/v1/works'
    const FILTERS = 'fields[node--work]=title,slug,thumbnail'

    const { data } = await axios.get(
      process.env.apiUrl + `/${API_PATH}?${FILTERS}`
    )
    const work = data.data.find(({ slug }) => slug === params.slug)
    if (!work) {
      error({ message: 'Page non trouvée', statusCode: 404 })
    }
    return { work, API_URL: process.env.apiUrl }
  },

  head() {
    return {
      titleTemplate: `${this.work.title} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
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
.work .link {
  display: inline-block;
  margin-bottom: 30px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  [dir='rtl'] & {
    font-family: $font-arabe;
  }
  & .arrow {
    fill: currentColor;
    height: 5px;
    transform: rotate(90deg);
    margin-right: 10px;
    margin-bottom: 2px;
    [dir='rtl'] & {
      transform: rotate(-90deg);
      margin-right: 0;
      margin-left: 10px;
    }
  }
}

.work-navigation {
  grid-template-columns: repeat(2, auto);
  background: $dark-blue;
  padding: 70px;
}

.work-navigation a {
  position: relative;
  color: $blue;
}

.work-navigation a::before {
  content: attr(data-text);
  position: absolute;
  top: -20px;
  width: 21px;
  height: 36px;
  color: $white;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0;
  pointer-events: none;
}
</style>
