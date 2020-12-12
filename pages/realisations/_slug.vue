<template>
  <main id="main" class="work">
    <div class="container intro">
      <WorkBack />
      <h1>{{ work.title }}</h1>
    </div>
    <div v-lazy:background-image="'/works/' + work.slug + '/' + work.slug + '_bg.jpg'" class="banner card">
      <span>
        <img v-lazy="'/works/' + work.slug + '/' + work.slug + '_bg.jpg'" :alt="work.title" />
      </span>
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
    const { slug } = params
    let path = `/${app.i18n.defaultLocale}/works_slug`
    let work, prev, next

    try {
      work = await $content(path, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        path = `/${app.i18n.locale}/works_slug`
        work = await $content(path, slug).fetch()
      } catch (err) {
        path = `/${app.i18n.defaultLocale}/works_slug`
      }
    }

    try {
      ;[prev, next] = await $content(path).only(['title', 'slug']).sortBy('position', 'asc').surround(slug, { before: 1, after: 1 }).fetch()
    } catch (e) {}

    return {
      work,
      prev,
      next
    }
  },

  head() {
    const IMG = `${process.env.BASE_URL}/works/${this.work.slug}/${this.work.slug}_bg.jpg`
    return {
      titleTemplate: `${this.work.title} — ${this.$t('name')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.work.description },
        { hid: 'og:title', property: 'og:title', content: this.work.title },
        { hid: 'og:description', property: 'og:description', content: this.work.description },
        { hid: 'og:image', property: 'og:image', content: IMG },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: IMG }
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
    span {
      padding: 80% 0 0;
      @media (min-width: $sm) {
        padding: 60% 0 0;
      }
      @media (min-width: $md) {
        padding: 50% 0 0;
      }
      img {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
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
    .tags {
      display: flex;
      flex-wrap: wrap;
      column-gap: 12px;
      margin: 0;
      padding: 0;
      list-style: none;
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
