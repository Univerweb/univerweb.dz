<script setup lang="ts">
import type { Work } from '../../types'

export interface Props {
  headlineTag?: string
  limit?: number
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  limit: 0,
  more: false,
  titleTag: 'h2',
})

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: _works } = await useAsyncData('works', () => queryContent('works', locale.value)
  .only(['title', 'desc', 'slug', 'createdAt', 'updatedAt', 'tags', 'lead'])
  .sort({ _id: -1 })
  .limit(props.limit)
  .find())

const works = _works.value as Work[]
</script>

<template>
  <section class="container works">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t('works.headline') }}
      </Component>
    </div>

    <ul v-if="works?.length" class="details">
      <WorkListItem v-for="work in works" :key="work.slug" :work="work" :title-tag="titleTag" />
    </ul>

    <div v-if="more" class="more">
      <NuxtLink :to="localePath('realisations')" class="btn">
        {{ t('home.more') }}
        <NuxtIcon name="arrow" />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss">
.works .details {
  margin: 0;
  padding: 0;
  list-style: none;
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
      height: 8px;
      transform: rotate(-90deg);

      [lang='ar-DZ'] & {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
