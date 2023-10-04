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

const { data: posts } = await useAsyncData(`card-group-${path}`, () =>
  queryContent<Post>(path)
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'body', 'category'])
    .sort({ _id: -1 })
    .limit(props.limit)
    .find())
</script>

<template>
  <section :id="path !== localePath('blog') ? 'realisations' : 'blog'" class="container">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t(headline) }}
      </Component>
    </div>

    <div v-if="path !== localePath('blog')" class="card-group">
      <WorkCard v-for="post in (posts as Work[])" :key="post._path" :post="post" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" />
  </section>
</template>

<style lang="scss">
.card-group {
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
    background-color: $text-primary;
    opacity: 0.1;
    transition: opacity $transition;
  }

  .card:hover .overlay {
    opacity: 0.6;
  }

  .inner {
    display: grid;
    grid-auto-rows: auto 1fr;
    position: absolute;
    height: 100%;
    color: $white;
    padding: 24px;

    &.work {
      grid-auto-rows: auto auto 1fr;
    }

    @media (min-width: $md) {
      padding: 24px;
    }

    @media (min-width: $lg) {
      padding: 36px;
      grid-auto-rows: auto auto 1fr;

      &.work {
        grid-auto-rows: auto auto auto 1fr;
      }
    }

    @media (min-width: $xl) {
      padding: 48px;
    }
  }

  h2,
  h3 {
    @include size(32);

    &.work {
      @media (min-width: $xl) {
        @include size(56);
      }
    }

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

  .card:hover p {
    transform: translateY(0);
  }
}
</style>
