<script setup lang="ts">
import type { Work } from '../../types'

const props = defineProps({
  headlineTag: {
    type: String,
    default: 'h1',
  },
  limit: {
    type: Number,
    default: 0,
  },
  more: {
    type: Boolean,
    default: false,
  },
})

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: _works } = await useAsyncData('works', () => queryContent(locale.value)
  .only(['title', 'desc', 'slug', 'tags', 'lead'])
  .sort({ _id: -1 })
  .limit(props.limit)
  .find())

const works = ref<Work[]>(_works)
</script>

<template>
  <section class="container works">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t('works.headline') }}
      </Component>
    </div>

    <div v-if="works?.length" class="details">
      <WorkListItem v-for="work in works" :key="work.slug" :work="work" />
    </div>

    <div v-if="more" class="more">
      <NuxtLink :to="localePath('realisations')" class="btn">
        {{ t('home.more') }}
        <NuxtIcon name="arrow" />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works .details {
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
