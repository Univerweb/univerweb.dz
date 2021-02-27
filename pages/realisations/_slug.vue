<template>
  <main id="main" class="work">
    <div class="container intro">
      <WorkBack />
      <h1>{{ work.title }}</h1>
    </div>
    <div class="banner card">
      <img
        :srcset="`/works/banner/${work.slug}-425.jpg 425w, /works/banner/${work.slug}-768.jpg 768w, /works/banner/${work.slug}-850.jpg 850w, /works/banner/${work.slug}-1024.jpg 1024w, /works/banner/${work.slug}-1280.jpg 1280w, /works/banner/${work.slug}-1536.jpg 1536w, /works/banner/${work.slug}-2048.jpg 2048w, /works/banner/${work.slug}-2560.jpg 2560w`"
        sizes="100vw"
        :src="`/works/banner/${work.slug}-1280.jpg`"
        :alt="work.description"
        width="1280"
        height="648"
        loading="lazy"
      />
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
          <img
            :srcset="`/works/page/${work.slug}-377.jpg 377w, /works/page/${work.slug}-619.jpg 619w, /works/page/${work.slug}-719.jpg 719w, /works/page/${work.slug}-754.jpg 754w, /works/page/${work.slug}-800.jpg 800w, /works/page/${work.slug}-1238.jpg 1238w`"
            sizes="(max-width: 425px) 377px, (max-width: 767px) 719px, (max-width: 1279px) 619px, 800px"
            :src="`/works/page/${work.slug}-800.jpg`"
            :alt="$t('alt.workpage') + ' ' + work.title"
            loading="lazy"
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
    const ogImage = `${baseURL}/works/banner/${this.work.slug}.jpg`

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
        { hid: 'og:image', property: 'og:image', content: ogImage },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: ogImage }
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
                url: ogImage,
                width: '1920px',
                height: '1080px'
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
  .banner img {
    object-fit: cover;
    height: 456px;
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
