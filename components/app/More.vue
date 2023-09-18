<script setup lang="ts">
export interface Props {
  path?: string
}

withDefaults(defineProps<Props>(), {
  path: 'realisations',
})

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="more">
    <NuxtLink :to="localePath(path)" class="btn">
      {{ t('home.more') }}
      <NuxtIcon name="arrow" />
    </NuxtLink>
  </div>
</template>

<style lang="scss">
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
