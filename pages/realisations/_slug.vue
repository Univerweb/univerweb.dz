<template>
  <main id="main" class="work">
    <div class="container intro">
      <WorkBack />
      <h1>{{ work.title }}</h1>
    </div>
    <div v-lazy:background-image="'/works/' + work.slug + '/' + work.slug + '_bg.jpg'" class="banner card">
      <img v-lazy="'/works/' + work.slug + '/' + work.slug + '_bg.jpg'" :alt="work.title" />
    </div>
    <div class="container client">
      <div class="details">
        <div class="item">
          <h2 class="h6">{{ $t('label.client') }}</h2>
          <p class="lead">{{ work.title }}</p>
        </div>
        <div class="item">
          <h2 class="h6">{{ $t('label.features') }}</h2>
          <ul class="lead tags">
            <li v-for="tag in work.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
        <div class="item">
          <h2 class="h6">{{ $t('label.industry') }}</h2>
          <p class="lead">{{ work.industry }}</p>
        </div>
      </div>
    </div>
    <div class="container project">
      <div class="details">
        <div class="item">
          <div class="inner">
            <p class="lead">{{ work.lead }}</p>
            <a :href="work.link" class="link">{{ $t('label.visit') }}</a>
          </div>
        </div>
        <div class="item card">
          <img v-lazy="'/works/' + work.slug + '/' + work.slug + '_page.jpg'" :alt="work.title" />
        </div>
      </div>
    </div>
    <WorkNav :prev="prev" :next="next" />
    <AppRequest />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const path = `${app.i18n.locale}/works_slug`
    let work

    try {
      work = await $content(path, params.slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content(path).only(['title', 'slug']).sortBy('position', 'asc').surround(params.slug).fetch()

    return {
      work,
      prev,
      next
    }
  },

  head() {
    const ogImage = `${this.$config.baseURL}/works/${this.work.slug}/${this.work.slug}_bg.jpg`
    return {
      titleTemplate: `${this.work.title} — ${this.$t('name')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.work.description },
        { hid: 'og:title', property: 'og:title', content: this.work.title },
        { hid: 'og:description', property: 'og:description', content: this.work.description },
        { hid: 'og:image', property: 'og:image', content: ogImage },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: ogImage }
      ]
    }
  }
}
</script>

<style lang="scss">
.work {
  h1 {
    margin-bottom: 0;
  }
  .banner {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 100%;
    height: 456px;
    @media (min-width: $lg) {
      height: auto;
      max-height: 648px;
      overflow: hidden;
      &::before {
        content: '';
        width: 100%;
        display: block;
        height: 0;
        pointer-events: none;
        padding-top: 33.75%;
      }
    }
    img {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
  .client {
    @media (min-width: $sm) {
      .item:nth-child(1) {
        grid-column: 1 / 4;
      }
      .item:nth-child(2) {
        grid-column: 5 / 8;
      }
      .item:nth-child(3) {
        grid-column: 9 / 12;
      }
    }
  }
  .project {
    padding-top: 0;
    @media (min-width: $sm) {
      .item:nth-child(1) {
        grid-column: 1 / 4;
      }
      .item:nth-child(2) {
        grid-column: 5 / 13;
      }
      .inner {
        position: sticky;
        top: 120px;
      }
    }
    .card img {
      border-radius: 0.25rem;
      box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
