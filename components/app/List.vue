<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  slug?: string
  limit?: number
  headlineTag?: string
  headline?: string
  listItem?: string
  more?: boolean
  titleTag?: string
}

withDefaults(defineProps<Props>(), {
  slug: 'realisations',
  limit: 0,
  headlineTag: 'h1',
  headline: 'works.headline',
  listItem: 'WorkListItem',
  titleTag: 'h2',
  more: false,
})

const { t } = useI18n()
const localePath = useLocalePath()
const { path } = useRoute()
</script>

<template>
  <section :id="slug" class="container">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t(headline) }}
      </Component>
    </div>

    <ContentList v-slot="{ list }" :path="path" :sort="{ _id: -1 }" :limit="limit">
      <div class="details details-card">
        <Component :is="listItem" v-for="article in (list as Post[])" :key="article._path" :post="article" :title-tag="titleTag" />
      </div>
    </ContentList>

    <div v-if="more" class="more">
      <NuxtLink :to="localePath(slug)" class="btn">
        {{ t('home.more') }}
        <NuxtIcon name="arrow" />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss">
.details-card {
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

  .item {
    grid-column: initial;
    overflow: hidden;
    z-index: 1;
    border-radius: 12px;

    @media (min-width: $xl) {
      border-radius: 24px;
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

    &:hover .overlay {
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

    &:hover p {
      transform: translateY(0);
    }
  }
}

.more {
  display: grid;
  margin-top: 48px;

  .btn {
    justify-self: end;

    .arrow {
      height: 8px;
      transform: rotate(-90deg);

      [lang='ar-DZ'] & {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
