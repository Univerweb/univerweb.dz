<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { IconWebsiteCreation, IconWebHosting, IconBrandIdentity, IconDigitalMarketing } from '#components'

defineProps<{
  index: number
  titleTag: string
  card: Pick<Collections['service_fr' | 'service_en' | 'service_ar'], 'title' | 'description' | 'cta' | 'path'>
}>()

const icons = [
  IconWebsiteCreation,
  IconWebHosting,
  IconBrandIdentity,
  IconDigitalMarketing,
]
</script>

<template>
  <div class="card-prestation" vocab="https://schema.org/" typeof="Service">
    <component :is="icons[index]" fill="var(--color-secondary)" />

    <component :is="titleTag" property="name serviceType">
      {{ card.title }}
    </component>

    <p class="lead" property="description">
      {{ card.description }}
    </p>

    <AppMore :path="card.path" :label="card.cta" />
  </div>
</template>
