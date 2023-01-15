<script setup lang="ts">
import type { PropType } from 'vue'
import type { Work } from '../../types'

defineProps({
  h1: {
    type: String,
    default: 'h1',
  },
  likeH1: {
    type: String,
    default: null,
  },
  limit: {
    type: Number,
    default: Infinity,
  },
  works: {
    type: Array as PropType<Work[]>,
    default: () => [],
  },
  more: {
    type: String,
    default: null,
  },
})

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: works } = await useAsyncData('works', () => queryContent(locale.value, 'realisations')
  .sort({ _id: -1 })
  .find())
</script>

<template>
  <section class="container works">
    <div class="intro">
      <Component :is="h1" :class="likeH1">
        {{ t('works.headline') }}
      </Component>
    </div>

    <div v-if="works?.length" class="details">
      <WorkListItem v-for="work in works.slice(0, limit)" :key="work.slug" :work="work" />
    </div>

    <Component :is="more" v-if="more" class="more">
      <NuxtLink :to="localePath('realisations')" class="btn">
        {{ t('home.more') }}
        <NuxtIcon name="arrow" />
      </NuxtLink>
    </Component>
  </section>
</template>

<style lang="scss" scoped>
.works {
  .details {
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
  }
}

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
      [lang='ar-DZ'] & {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
