<script setup lang="ts">
defineProps<{
  to: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="more">
    <NuxtLink :to="localePath(to)" class="btn">
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
