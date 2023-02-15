<script setup lang="ts">
import { createError } from 'h3'
import type { Work } from '../../types'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const seo = useSeo()
const route = useRoute()
const path = `/${locale.value}/${route.params.slug}`

const { data: _work, error } = await useAsyncData(`work-${locale.value}-${route.params.slug}`, () => {
  return queryContent()
    .where({ _path: path })
    .only(['title', 'desc', 'slug', 'createdAt', 'updatedAt', 'tags', 'industry', 'lead', 'link'])
    .findOne()
})

const work = _work.value as Work

if (error.value) {
  showError(
    createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    }),
  )
}

const [prev, next] = await queryContent(locale.value)
  .only(['slug', 'title'])
  .findSurround({ _path: path })

useHead({
  title: work.title,

  meta: [
    { name: 'description', content: work.desc },
    { property: 'og:title', content: work.title },
    { property: 'og:description', content: work.desc },
    { property: 'og:image', content: `${seo.baseUrl}/images/${work.slug}_share.jpg` },
    { property: 'og:image:secure_url', content: `${seo.baseUrl}/images/${work.slug}_share.jpg` },
    { property: 'og:image:alt', content: `${seo.baseUrl} — ${work.industry}` },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': seo.breadcrumbItemOne },
          { '@type': 'ListItem', 'position': 2, 'name': t('works.title'), 'item': `${seo.baseUrl}${localePath('realisations')}` },
          { '@type': 'ListItem', 'position': 3, 'name': work.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main id="main" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${seo.baseUrl}${route.path}`">
      </div>
      <meta property="dateCreated datePublished" :content="work.createdAt">
      <meta property="dateModified" :content="work.updatedAt">
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="seo.baseUrl">
      </div>
      <meta property="articleSection" :content="t('works.title')">
      <meta property="description" :content="work.desc">
      <div class="container intro">
        <WorkBack />
        <h1 property="headline">
          {{ work.title }}
        </h1>
      </div>

      <div class="banner card">
        <AppImg
          property="image"
          :src="`/images/${work.slug}_banner.jpg`"
          :alt="work.desc"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
        />
      </div>

      <div class="container client">
        <div class="details">
          <div class="item">
            <h2 class="h6">
              {{ t('work.client') }}
            </h2>
            <p class="lead">
              {{ work.title }}
            </p>
          </div>
          <div class="item">
            <h2 class="h6">
              {{ t('work.features') }}
            </h2>
            <ul class="lead tags">
              <li v-for="tag in work.tags" :key="tag" property="keywords">
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="item">
            <h2 class="h6">
              {{ t('work.industry') }}
            </h2>
            <p class="lead">
              {{ work.industry }}
            </p>
          </div>
        </div>
      </div>

      <div class="container project">
        <div class="details">
          <div class="item">
            <div class="inner">
              <p property="articleBody" class="lead">
                {{ work.lead }}
              </p>
              <a :href="work.link" class="link">{{ t('work.visit') }}</a>
            </div>
          </div>
          <div class="item card">
            <AppImg
              :src="`/images/${work.slug}_preview.jpg`"
              :alt="`${t('work.alt')} ${work.title}`"
              sizes="xs:288px sm:607px md:719px lg:619px xl:1280px"
            />
          </div>
        </div>
      </div>
    </article>

    <LazyWorkNav :prev="prev" :next="next" />

    <LazyAppRequest />
  </main>
</template>

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
