<script setup lang="ts">
import type { Post } from '../../types'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const breadcrumb = useBreadcrumb()
const config = useRuntimeConfig()
const { path, params: { slug } } = useRoute()

const { data } = await useAsyncData(
  `content-${path}`,
  () => queryContent<Post>().where({ _path: path }).findOne(),
)

if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

const [prev, next] = await queryContent('realisations', locale.value)
  .only(['_path', 'title'])
  .findSurround({ _path: path })

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
  ogTitle: data.value?.title,
  ogType: 'article',
  ogImage: `${config.public.baseURL}/_ipx/w_1536&f_jpg&q_80/realisations/${slug}_banner.jpg`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': breadcrumb },
          { '@type': 'ListItem', 'position': 2, 'name': t('works.title'), 'item': `${config.public.baseURL}${localePath('realisations')}` },
          { '@type': 'ListItem', 'position': 3, 'name': data.value?.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="data" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${config.public.baseURL}${path}`">
      </div>
      <time property="dateCreated datePublished" :datetime="data.createdAt.toString()" />
      <time property="dateModified" :datetime="data.updatedAt.toString()" />
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="config.public.baseURL">
      </div>
      <meta property="articleSection" :content="t('works.title')">
      <meta property="description" :content="data.description">

      <div class="container intro">
        <AppBack path="realisations" menu="menu.realisations" />
        <h1 property="headline">
          {{ data.title }}
        </h1>
      </div>

      <AppPicture :post="data" ext="png" />

      <div class="container client">
        <div class="details">
          <div class="item">
            <h2 class="h6">
              {{ t('work.client') }}
            </h2>
            <p class="lead">
              {{ data.title }}
            </p>
          </div>
          <div class="item">
            <h2 class="h6">
              {{ t('work.features') }}
            </h2>
            <ul class="lead tags">
              <li v-for="tag in data.tags" :key="tag" property="keywords">
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="item">
            <h2 class="h6">
              {{ t('work.industry') }}
            </h2>
            <p class="lead">
              {{ data.industry }}
            </p>
          </div>
        </div>
      </div>

      <div class="container project">
        <div class="details">
          <div class="item">
            <div class="inner">
              <ContentRendererMarkdown
                :value="data"
                :components="{ p: 'span' }"
                tag="p"
                property="articleBody"
                class="lead"
              />
              <a v-if="data.link" :href="data.link" class="link">{{ t('work.visit') }}</a>
              <p v-else>
                {{ t('work.state') }}
              </p>
            </div>
          </div>
          <AppPicture
            :post="data"
            type="preview"
            :alt="`${t('work.alt')} ${data.title}`"
            sizes="xs:288px sm:607px md:719px lg:619px xl:1280px"
            class-name="item"
            :img-attrs="null"
          />
        </div>
      </div>
    </article>

    <LazyAppNav :prev="prev" :next="next" />

    <LazyAppRequest />
  </main>
</template>

<style lang="scss">
.work {
  h1 {
    margin-bottom: 0;
  }

  .banner {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 12;

    @media (min-width: $md) {
      aspect-ratio: 16 / 9;
    }

    @media (min-width: $lg) {
      aspect-ratio: 16 / 8;
    }

    @media (min-width: $xl) {
      aspect-ratio: 16 / 6;
    }

    @media (min-width: $xxl) {
      aspect-ratio: 16 / 4;
    }

    img {
      position: absolute;
      inset: 0;
      max-width: $xl;
      height: auto;
      margin: 40px auto 0;
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

    picture img {
      border-radius: 0.25rem;
      box-shadow: 0 0 40px 0 rgba(0 0 0 / 10%);
    }
  }
}
</style>
