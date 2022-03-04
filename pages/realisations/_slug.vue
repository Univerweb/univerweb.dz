<template>
  <main id="main" class="work">
    <div class="container intro">
      <WorkBack />
      <h1>{{ work.title }}</h1>
    </div>
    <div class="banner card">
      <AppImg :src="`/images/${work.slug}_banner.jpg`" :alt="work.description" sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw" />
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
          <AppImg
            :src="`/images/${work.slug}_preview.jpg`"
            :alt="`${$t('alt.workpage')} ${work.title}`"
            sizes="xs:288px sm:607px md:719px lg:619px xl:1280px"
          />
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

  head({ $config: { baseURL } }) {
    const image = `${baseURL}/images/${this.work.slug}_share.jpg`

    let routeItem = `${baseURL}/`
    if (this.$i18n.locale !== 'fr') {
      routeItem = `${baseURL}/${this.$i18n.locale}`
    }

    return {
      titleTemplate: `${this.work.title} — ${this.$t('name')}`,

      meta: [
        { hid: 'description', name: 'description', content: this.work.description },
        { hid: 'og:title', property: 'og:title', content: this.work.title },
        { hid: 'og:description', property: 'og:description', content: this.work.description },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: image },
        { hid: 'og:image:alt', property: 'og:image:alt', content: `${this.work.title} — ${this.work.industry}` }
      ],

      script: [
        {
          json: [
            {
              '@context': 'https://schema.org',
              '@type': 'article',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${baseURL}${this.$route.path}`
              },
              headline: this.work.title,
              image: {
                '@type': 'ImageObject',
                url: image,
                width: '1920px',
                height: '1080px'
              },
              author: {
                '@type': 'Thing',
                name: this.$t('name'),
                url: `${baseURL}`
              },
              dateCreated: this.work.createdAt,
              datePublished: this.work.createdAt,
              dateModified: this.work.updatedAt,
              articleSection: this.$t('menu.realisations'),
              articleBody: this.work.lead,
              keywords: this.work.tags,
              description: this.work.description
            },

            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: this.$t('name'),
                  item: routeItem
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: this.$t('menu.realisations'),
                  item: `${baseURL}${this.localePath('realisations')}`
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: this.work.title
                }
              ]
            }
          ],
          type: 'application/ld+json'
        }
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
    aspect-ratio: 3/2;
    @media (min-width: $lg) {
      aspect-ratio: 3/1;
    }
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .client {
    @media (min-width: $md) {
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
    @media (min-width: $md) {
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
