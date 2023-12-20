<script setup lang="ts">
import type { Post, Work } from '../../types'

export interface Props {
  limit?: number
  headlineTag?: string
  headline?: string
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  headlineTag: 'h1',
  headline: 'works.headline',
  titleTag: 'h2',
  more: false,
})

const { t } = useI18n()
const { path } = useRoute()
const localePath = useLocalePath()

const { data: posts } = await useAsyncData(
  `posts${path}`,
  () => queryContent<Post>(path)
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'body', 'category'])
    .sort({ _id: -1, $numeric: true })
    .limit(props.limit)
    .find(),
)
</script>

<template>
  <section :id="path !== localePath('blog') ? 'realisations' : 'blog'" class="container">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t(headline) }}
      </Component>
    </div>

    <div v-if="path !== localePath('blog')" class="card-group">
      <WorkCard v-for="post in (posts as Work[])" :key="post._path" :card="post" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" />
  </section>
</template>

<style lang="scss">
.card-group {
  gap: 12px;

  @include grid(1, 1fr);

  @media (min-width: $sm) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: $md) {
    gap: 16px;
  }

  @media (min-width: $lg) {
    gap: 24px;
  }

  .card {
    overflow: hidden;
    z-index: 1;
    border-radius: 12px;

    @media (min-width: $xl) {
      border-radius: 24px;
    }
  }

  article {
    display: grid;
    position: relative;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(17 17 17 / 0%) 0%, rgba(17 17 17 / 0%) 60%, rgba(17 17 17 / 60%) 100%);
    opacity: 1;
    transition: opacity $transition;
  }

  .card:hover .overlay {
    background-color: $text-primary;
    opacity: 0.6;
  }

  .inner {
    display: grid;
    grid-auto-rows: auto 1fr;
    position: absolute;
    height: 100%;
    color: $white;
    padding: 24px;

    @include media($md, 24px, 24px);
    @include media($lg, 36px, 36px);
    @include media($xl, 48px, 48px);
  }

  h2,
  h3 {
    @include size(32);

    &.work {
      @media (min-width: $xl) {
        @include size(56);
      }
    }
  }

  p {
    color: $white;
    align-self: end;
    transform: translateY(calc(100% + 48px));
    transition: transform $transition;
    visibility: hidden;

    @media (min-width: $lg) {
      visibility: visible;
    }
  }

  .card:hover p {
    transform: translateY(0);
  }
}
</style>
