<script setup lang="ts">
defineProps({
  h1: {
    type: String,
    default: 'h1',
  },
  headline: {
    type: String,
    required: true,
  },
  works: {
    type: Array,
    default: () => [],
  },
  likeH1: {
    type: String,
    default: null,
  },
  more: {
    type: String,
    default: null,
  },
})

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="container works">
    <div class="intro">
      <Component :is="h1" :class="likeH1">
        {{ headline }}
      </Component>
    </div>

    <div class="details">
      <WorkListItem v-for="(work, index) in works.slice(1)" :key="index" :work="work" />
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
