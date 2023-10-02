<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  limit?: number
  headlineTag?: string
  headline?: string
  listItem?: string
  more?: boolean
  titleTag?: string
  posts?: Post[]
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  headlineTag: 'h1',
  headline: 'works.headline',
  listItem: 'WorkListItem',
  titleTag: 'h2',
  more: false,
})

const { t } = useI18n()
const { path } = useRoute()

const { data: posts } = await useAsyncData('works', () =>
  queryContent<Post>(path)
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'body'])
    .sort({ _id: -1 })
    .limit(props.limit)
    .find())
</script>

<template>
  <section class="container">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t(headline) }}
      </Component>
    </div>

    <div class="list-card">
      <Component :is="listItem" v-for="post in posts" :key="post._path" :post="post" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" />
  </section>
</template>

<style lang="scss">
.list-card {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: $sm) {
    grid-template-columns: 1fr 1fr;
  }

  gap: 12px;

  @media (min-width: $md) {
    gap: 16px;
  }

  @media (min-width: $lg) {
    gap: 24px;
  }

  a {
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
    background-color: $text-primary;
    opacity: 0.1;
    transition: opacity $transition;
  }

  a:hover .overlay {
    opacity: 0.6;
  }

  .inner {
    display: grid;
    grid-auto-rows: auto 1fr;
    position: absolute;
    height: 100%;
    color: $white;
    padding: 24px;

    @media (min-width: $md) {
      padding: 24px;
    }

    @media (min-width: $lg) {
      padding: 36px;
      grid-auto-rows: auto auto 1fr;
    }

    @media (min-width: $xl) {
      padding: 48px;
    }
  }

  h2,
  h3 {
    @include size(32);

    margin-bottom: 12px;
  }

  p {
    display: none;

    @media (min-width: $lg) {
      display: block;
    }

    color: $white;
    align-self: end;
    transform: translateY(calc(100% + 48px));
    transition: transform $transition;
  }

  a:hover p {
    transform: translateY(0);
  }
}
</style>
