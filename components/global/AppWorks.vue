<template>
  <section class="container works">
    <div class="intro">
      <Component :is="h1" :class="likeH1">{{ headline }}</Component>
    </div>
    <div class="details">
      <div v-for="work in works" :key="work.slug" class="item">
        <Component :is="h2">
          <NuxtLink :to="localePath('/realisations/' + work.slug)">{{ work.title }}</NuxtLink>
        </Component>
        <NuxtLink :to="localePath('/realisations/' + work.slug)">
          <div class="card">
            <img v-lazy="'/works/' + work.slug + '/' + work.slug + '_thumbnail.jpg'" :alt="work.title" />
          </div>
          <p class="h6">{{ work.lead }}</p>
        </NuxtLink>
      </div>
    </div>
    <Component :is="more" class="more">
      <NuxtLink :to="localePath('realisations')" class="btn">{{ $t('label.more') }}<HomeArrow /></NuxtLink>
    </Component>
  </section>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
  },

  props: {
    headline: {
      type: String,
      required: true
    },
    works: {
      type: Array,
      required: true
    },
    h1: {
      type: String,
      default: 'h1'
    },
    likeH1: {
      type: String,
      default: null
    },
    h2: {
      type: String,
      default: 'h2'
    },
    more: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.more {
  display: grid;
  margin-top: 48px;
  .btn {
    justify-self: end;
    .arrow {
      fill: currentColor;
      height: 8px;
      margin-bottom: 2px;
      transform: rotate(-90deg);
      [lang='ar'] & {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
