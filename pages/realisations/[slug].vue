<template>
  <main id="main" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${baseURL}${path}`" />
      </div>
      <!-- <meta property="dateCreated datePublished" :content="work.createdAt" /> -->
      <!-- <meta property="dateModified" :content="work.updatedAt" /> -->
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="name" />
        <meta property="url" :content="baseURL" />
      </div>
      <meta property="articleSection" :content="menu.realisations" />
      <meta property="description" :content="work.desc" />
      <div class="container intro">
        <WorkBack />
        <h1 property="headline">{{ work.title }}</h1>
      </div>
      <div class="banner card">
        <AppImg property="image" :src="`/images/${slug}_banner.jpg`" :alt="work.desc" sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw" />
      </div>
      <div class="container client">
        <div class="details">
          <div class="item">
            <h2 class="h6">{{ label.client }}</h2>
            <p class="lead">{{ work.title }}</p>
          </div>
          <div class="item">
            <h2 class="h6">{{ label.features }}</h2>
            <ul class="lead tags">
              <li v-for="tag in work.tags" :key="tag" property="keywords">{{ tag }}</li>
            </ul>
          </div>
          <div class="item">
            <h2 class="h6">{{ label.industry }}</h2>
            <p class="lead">{{ work.industry }}</p>
          </div>
        </div>
      </div>
      <div class="container project">
        <div class="details">
          <div class="item">
            <div class="inner">
              <p property="articleBody" class="lead">{{ work.lead }}</p>
              <a :href="work.link" class="link">{{ label.visit }}</a>
            </div>
          </div>
          <div class="item card">
            <AppImg :src="`/images/${slug}_preview.jpg`" :alt="`${alt.workpage} ${work.title}`" sizes="xs:288px sm:607px md:719px lg:619px xl:1280px" />
          </div>
        </div>
      </div>
    </article>
    <WorkNav :prev="prev" :next="next" />
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
// import { createError } from 'h3'

const { locale } = useI18n()
const route = useRoute()
const path = route.path
const slug = route.params.slug
const config = useRuntimeConfig()

const fullPath = locale.value === 'fr' ? `/${locale.value}${path}` : `${path}`

const { data, error } = await useAsyncData(`${fullPath}Page`, () => {
  return queryContent().where({ _path: fullPath }).only(['title', 'desc', 'tags', 'industry', 'lead', 'link']).findOne()
})
const { data: global } = await useAsyncData('workGlobal', () => queryContent(locale.value, 'global').only(['name', 'menu', 'label', 'alt']).findOne())

const title = data.value!.title
const desc = data.value!.desc
const baseURL = config.public.baseURL
const work = data.value!
const name = global.value!.name
const menu = global.value!.menu
const label = global.value!.label
const alt = global.value!.alt
const ogImage = `${baseURL}/images/${slug}_share.jpg`

// if (error.value) {
//   throwError(
//     createError({
//       statusCode: 404,
//       statusMessage: 'Not Found'
//     })
//   )
// }

const [prev, next] = await queryContent('/realisations')
  // .only(['_path', 'title'])
  // .where({ _id: { $not: { $contains: 'index' } } })
  .findSurround({ _path: fullPath })

useHead({
  title,

  meta: [
    { name: 'description', content: desc },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:secure_url', content: ogImage },
    { property: 'og:image:alt', content: `${title} — ${data.value!.industry}` }
  ]

  // script: [
  //   {
  //     type: 'application/ld+json',
  //     children: {
  //       '@context': 'https://schema.org',
  //       '@type': 'BreadcrumbList',
  //       itemListElement: [
  //         { '@type': 'ListItem', position: 1, name: name, item: item },
  //         { '@type': 'ListItem', position: 2, name: title }
  //       ]
  //     }
  //   }
  // ]
})
</script>

<!-- <script>
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
</script> -->

<style lang="scss" scoped>
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
