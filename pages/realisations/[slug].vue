<template>
  <main id="main" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${$config.public.baseURL}${$route.path}`" />
      </div>
      <meta property="dateCreated datePublished" :content="work.createdAt" />
      <meta property="dateModified" :content="work.updatedAt" />
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="$t('name')" />
        <meta property="url" :content="$config.public.baseURL" />
      </div>
      <meta property="articleSection" :content="$t('menu.realisations')" />
      <meta property="description" :content="work.description" />
      <div class="container intro">
        <WorkBack />
        <h1 property="headline">{{ work.title }}</h1>
      </div>
      <div class="banner card">
        <AppImg
          property="image"
          :src="`/images/${work.slug}_banner.jpg`"
          :alt="work.description"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
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
              <li v-for="tag in work.tags" :key="tag" property="keywords">{{ tag }}</li>
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
              <p property="articleBody" class="lead">{{ work.lead }}</p>
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
    </article>
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

  head({ $config. public: { baseURL } }) {
    const image = `${baseURL}/images/${this.work.slug}_share.jpg`
    const routeItem = this.$i18n.locale === 'fr' ? `${baseURL}/` : `${baseURL}/${this.$i18n.locale}`

    return {
      title: this.work.title,

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
