<script setup lang="ts">
import { createError } from 'h3'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const route = useRoute()
const config = useRuntimeConfig()
const seoItem = useSeoItem()

const fullPath = locale.value === 'fr' ? `/${locale.value}${route.path}` : `${route.path}`

const { data, error } = await useAsyncData(`${fullPath}Page`, () => {
  return queryContent().where({ _path: fullPath }).only(['title', 'desc', 'tags', 'industry', 'lead', 'link']).findOne()
})

if (error.value) {
  showError(
    createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    })
  )
}

const [prev, next] = await queryContent(locale.value, 'realisations')
  // .only(['_path', 'title'])
  // .where({ _id: { $not: { $contains: 'index' } } })
  .findSurround({ _path: fullPath })

useHead({
  title: data.value!.title,

  meta: [
    { name: 'description', content: data.value!.desc },
    { property: 'og:title', content: data.value!.title },
    { property: 'og:description', content: data.value!.desc },
    { property: 'og:image', content: `${config.public.baseURL}/images/${route.params.slug}_share.jpg` },
    { property: 'og:image:secure_url', content: `${config.public.baseURL}/images/${route.params.slug}_share.jpg` },
    { property: 'og:image:alt', content: `${data.value!.title} — ${data.value!.industry}` },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('name'), item: seoItem },
          { '@type': 'ListItem', position: 2, name: t('menu[0].title'), item: `${config.public.baseURL}${localePath('realisations')}` },
          { '@type': 'ListItem', position: 3, name: data.value!.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="data" id="main" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${config.public.baseURL}${route.path}`" />
      </div>
      <!-- <meta property="dateCreated datePublished" :content="data.createdAt" /> -->
      <!-- <meta property="dateModified" :content="data.updatedAt" /> -->
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')" />
        <meta property="url" :content="config.public.baseURL" />
      </div>
      <meta property="articleSection" :content="t('menu[0].title')" />
      <meta property="description" :content="data.desc" />
      <div class="container intro">
        <WorkBack />
        <h1 property="headline">
          {{ data.title }}
        </h1>
      </div>
      <div class="banner card">
        <AppImg
          property="image"
          :src="`/images/${route.params.slug}_banner.jpg`"
          :alt="data.desc"
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
              <p property="articleBody" class="lead">
                {{ data.lead }}
              </p>
              <a :href="data.link" class="link">{{ t('work.visit') }}</a>
            </div>
          </div>
          <div class="item card">
            <AppImg
              :src="`/images/${route.params.slug}_preview.jpg`"
              :alt="`${t('work.alt')} ${data.title}`"
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
