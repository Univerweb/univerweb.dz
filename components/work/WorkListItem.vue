<script setup lang="ts">
import type { PropType } from 'vue'
import type { Work } from '../../types'

defineProps({
  work: {
    type: Object as PropType<Work>,
    default: () => {},
  },
  h2: {
    type: String,
    default: 'h2',
  },
})

const { t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()
</script>

<template>
  <article vocab="https://schema.org/" typeof="Article" class="item">
    <NuxtLink :to="localePath(`/realisations/${work._path.slice(17)}`)">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="config.public.baseURL + localePath(`/realisations/${work._path.slice(17)}`)">
      </div>
      <!-- <meta property="dateCreated datePublished" :content="work.createdAt"> -->
      <!-- <meta property="dateModified" :content="work.updatedAt"> -->
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="config.public.baseURL">
      </div>
      <meta property="articleSection" :content="t('menu[0].title')">
      <meta property="description" :content="work.desc">

      <AppImg
        property="image"
        :src="`/images/${work._path.slice(17)}_thumbnail.jpg`"
        :alt="work.desc"
        width="588"
        height="624"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
      />

      <div class="overlay" />

      <div class="inner">
        <Component :is="h2" property="headline">
          {{ work.title }}
        </Component>
        <ul class="tags">
          <li v-for="tag in work.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>
        <p property="articleBody" class="lead">
          {{ work.lead }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

<style lang="scss" scoped>
.works .item {
  grid-column: initial;
  overflow: hidden;
  z-index: 1;
  border-radius: 12px;
  @media (min-width: $xl) {
    border-radius: 24px;
  }

  a {
    display: grid;
    position: relative;
    &:hover {
      .overlay {
        opacity: 0.6;
      }
      p {
        transform: translateY(0);
      }
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $textPrimary;
    opacity: 0.1;
    transition: opacity $transition;
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
}
</style>
