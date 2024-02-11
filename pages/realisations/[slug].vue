<script setup lang="ts">
import type { Nav, Work } from '../../types'

const localePath = useLocalePath()
const { t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path, params: { slug } } = useRoute()
const img = useImage()
const ogImagePath = img(`realisations/${slug}_banner.png`, { width: 2400, height: 1256, quality: 80 })

const { data: post } = await useAsyncData(
  `post${path}`,
  () => queryContent()
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'link', 'body'])
    .where({ _path: path })
    .findOne() as Promise<Work>,
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const { data: surround } = await useAsyncData(
  `surround${path}`,
  async () => {
    const [prev, next] = await queryContent(localePath('realisations'))
      .only(['_path', 'title'])
      .findSurround(path) as Nav[]

    return { prev, next }
  },
  { watch: [localePath] },
)

const { data: related } = await useAsyncData(
  `related${path}`,
  () => queryContent(localePath('realisations'))
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'body'])
    .where({ category: post.value!.category, _path: { $ne: path } })
    .sort({ _id: -1, $numeric: true })
    .find() as Promise<Work[]>,
  { watch: [localePath] },
)

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogType: 'article',
  ogImage: `${baseUrl}${ogImagePath}`,
  twitterTitle: post.value.title,
  twitterDescription: post.value.description,
  twitterImage: `${baseUrl}${ogImagePath}`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': localeBaseUrl },
          { '@type': 'ListItem', 'position': 2, 'name': t('works.title'), 'item': `${baseUrl}${localePath('realisations')}` },
          { '@type': 'ListItem', 'position': 3, 'name': post.value.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="post" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${baseUrl}${path}`" />
      </span>
      <span property="author publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="baseUrl" />
      </span>
      <time property="dateCreated datePublished" :datetime="post.createdAt.toString()" />
      <time property="dateModified" :datetime="post.updatedAt.toString()" />
      <span property="articleSection" :content="t('works.title')" />
      <span property="description" :content="post.description" />

      <div class="container intro">
        <AppBack path="realisations" menu="menu[0].label" />
        <h1 property="headline">
          {{ post.title }}
        </h1>
      </div>

      <AppPicture
        :picture="post"
        :width="2560"
        :height="1280"
        sizes="295px xs:607px sm:719px md:927px lg:1136px xl:1280px"
        ext="png"
      />

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
            sizes="257px xs:569px sm:665px md:549px xl:730px"
            class-name="item"
            :img-attrs="null"
          />
        </div>
      </div>
    </article>

    <div v-if="related && related.length" class="container">
      <div class="intro">
        <h2>
          {{ t('work.related') }}
        </h2>
      </div>
      <div class="card-group">
        <WorkCard v-for="p in related" :key="p._path" :work="p" title-tag="h3" />
      </div>
    </div>

    <LazyAppNav :prev="surround!.prev" :next="surround!.next" />
  </main>
</template>

<style lang="scss">
.work {
  h1 {
    margin-block-end: 0;
  }

  .banner {
    overflow: hidden;
    justify-items: center;
    padding: 12px;
    padding-bottom: 0 !important;

    @include media($xs, 16px);
    @include media($sm, 24px);
    @include media($md, 48px);
    @include media($lg, 72px);

    img {
      max-width: $xl;
      height: auto;
      border-radius: 0.5rem 0.5rem 0 0;
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
      padding: 16px;
      overflow-y: scroll;

      @include media($sm, 24px, 24px);

      @media (min-width: $md) {
        grid-column: 5 / 13;
        padding: 32px;
      }

      &::-webkit-scrollbar {
        width: 6px;

        &-thumb {
          background-color: $primary;
        }

        &-track {
          background-color: var(--text-secondary);
        }
      }

      img {
        border-radius: 0.25rem;
      }
    }
  }
}
</style>
