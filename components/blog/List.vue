<script setup lang="ts">
export interface Props {
  headlineTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
})

const { t } = useI18n()
</script>

<template>
  <section class="container works">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t('blog.headline') }}
      </Component>
    </div>
  </section>
</template>
