<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

const { t } = useI18n()
const breadcrumb = useBreadcrumb()
const config = useRuntimeConfig()

const markerOptions = {
  position: {
    lat: 36.721043,
    lng: 3.047502,
  },
  icon: {
    path: 'M -1,-1 A 1,1 0 1,0 1,-1 A 1,1 0 1,0 -1,-1',
    fillColor: '#50c8f0',
    fillOpacity: 1,
    strokeColor: '#28285a',
    scale: 10,
  },
}

const mapRef = ref<InstanceType<typeof GoogleMap>>()

function zoom() {
  const gmap = mapRef.value

  if (gmap?.ready) {
    gmap.map?.setZoom(16)
    gmap.map?.setCenter(markerOptions.position)
  }
}

useSeoMeta({
  title: () => t('contact.title'),
  description: t('contact.desc'),
  ogTitle: t('contact.title'),
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': breadcrumb },
          { '@type': 'ListItem', 'position': 2, 'name': t('contact.title') },
        ],
      },
    },
  ],
})
</script>

<template>
  <main>
    <div class="container details">
      <div class="item">
        <h1 class="h2">
          {{ t('contact.title') }}
        </h1>
        <FooterAbout />
        <FooterLink />
      </div>
    </div>

    <GoogleMap
      id="map"
      ref="mapRef"
      :api-key="config.public.gmapsKey"
      :map-id="config.public.gmapsId"
      :center="markerOptions.position"
      :zoom="14"
      :street-view-control="false"
      background-color="var(--light)"
    >
      <Marker :options="markerOptions" @click="zoom" />
    </GoogleMap>

    <div class="container other">
      <div class="intro">
        <h2>{{ t('contact.other') }}</h2>
      </div>
      <div class="details">
        <div class="item">
          <h3 class="h6">
            {{ t('contact.manager') }}
          </h3>
          <a :href="`mailto:${config.public.managerEmail}`" class="link move-arrow">
            {{ config.public.managerEmail }}
          </a>
        </div>
        <div class="item">
          <h3 class="h6">
            {{ t('contact.support') }}
          </h3>
          <a :href="`mailto:${config.public.supportEmail}`" class="link move-arrow">
            {{ config.public.supportEmail }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
#map {
  width: 100%;
  height: 720px;
  background-color: var(--light);
  transition: background-color $transition;
}

.other {
  background-color: var(--secondary);
  color: $white;

  a {
    color: $white;
  }
}
</style>
