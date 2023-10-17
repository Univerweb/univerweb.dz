<script setup lang="ts">
import type { Work } from '../../types'

const localePath = useLocalePath()
const { t } = useI18n()
const breadcrumb = useBreadcrumb()
const config = useRuntimeConfig()
const { path, params: { slug } } = useRoute()
const img = useImage()
const ogImagePath = img(`realisations/${slug}_banner.png`, { width: 1920, height: 1080, position: 'top', format: 'jpg', quality: 80 })

const { data: post } = await useAsyncData(`content-${path}`, () =>
  queryContent()
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'link', 'body'])
    .where({ _path: path })
    .findOne() as Promise<Work>)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogType: 'article',
  ogImage: `${config.public.baseURL}${ogImagePath}`,
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
          { '@type': 'ListItem', 'position': 3, 'name': post.value.title },
        ],
      },
    },
  ],
})

const prev = ref<null | Pick<Work, '_path' | 'title'>>(null)
const next = ref<null | Pick<Work, '_path' | 'title'>>(null)

async function fetchPrevNext() {
  const [prevNav, nextNav] = await queryContent<Pick<Work, '_path' | 'title'>>(localePath('realisations'))
    .only(['_path', 'title'])
    .findSurround(path)
  prev.value = prevNav
  next.value = nextNav
}

onMounted(() => {
  fetchPrevNext()
})
</script>

<template>
  <main v-if="post" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${config.public.baseURL}${path}`" />
      </div>
      <time property="dateCreated datePublished" :datetime="post.createdAt.toString()" />
      <time property="dateModified" :datetime="post.updatedAt.toString()" />
      <div property="author publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="config.public.baseURL" />
      </div>
      <span property="articleSection" :content="t('works.title')" />
      <span property="description" :content="post.description" />

      <div class="container intro">
        <AppBack path="realisations" menu="menu.realisations" />
        <h1 property="headline">
          {{ post.title }}
        </h1>
      </div>

      <AppPicture :picture="post" ext="png" />

      <div class="container client">
        <div class="details">
          <div class="item">
            <h2 class="h6">
              {{ t('work.client') }}
            </h2>
            <p class="lead">
              {{ post.title }}
            </p>
          </div>
          <div class="item">
            <h2 class="h6">
              {{ t('work.services') }}
            </h2>
            <ul class="lead tags">
              <li v-for="tag in post.tags" :key="tag" property="keywords">
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="item">
            <h2 class="h6">
              {{ t('work.category') }}
            </h2>
            <p class="lead">
              {{ post.category }}
            </p>
          </div>
        </div>
      </div>

      <div class="container project">
        <div class="details">
          <div class="item">
            <div class="inner">
              <ContentRendererMarkdown
                :value="post"
                :components="{ p: 'span' }"
                tag="p"
                property="articleBody"
                class="lead"
              />
              <a v-if="post.link" :href="post.link" class="link">
                {{ t('work.visit') }}
              </a>
              <p v-else>
                {{ t('work.state') }}
              </p>
            </div>
          </div>
          <AppPicture
            :picture="post"
            type="preview"
            :alt="`${t('work.alt')} ${post.title}`"
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

    .item:nth-child(1) {
      @media (min-width: $md) {
        grid-column: 1 / 4;

        .inner {
          position: sticky;
          top: 120px;
        }
      }
    }

    .item:nth-child(2) {
      aspect-ratio: 3 / 2;
      padding: 40px;
      overflow-y: scroll;

      @media (min-width: $md) {
        grid-column: 5 / 13;
      }

      &::-webkit-scrollbar {
        width: 6px;

        &-thumb {
          background-color: var(--secondary);
        }

        &-track {
          background-color: var(--primary);
        }
      }

      img {
        border-radius: 0.25rem;
        box-shadow: 0 0 40px 0 rgba(0 0 0 / 10%);
      }
    }
  }
}
</style>
