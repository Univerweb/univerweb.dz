<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

const { t } = useI18n()
const meta = useMeta('contact')
const breadcrumb = useBreadcrumb('contact')
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

useSeoMeta(meta)
useHead({ script: [breadcrumb] })
</script>

<template>
  <main>
    <div class="container row">
      <div class="col">
        <h1 class="h2">
          {{ t('contact.title') }}
        </h1>
        <p class="lead">
          {{ t('contact.about') }}
        </p>
        <a :href="`mailto:${config.public.baseEmail}`" class="link outfit move">
          {{ config.public.baseEmail }}
        </a>
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
      <div class="row">
        <div class="col">
          <h3 class="h6">
            {{ t('contact.manager') }}
          </h3>
          <a :href="`mailto:${config.public.managerEmail}`" class="link outfit move">
            {{ config.public.managerEmail }}
          </a>
        </div>
        <div class="col">
          <h3 class="h6">
            {{ t('contact.support') }}
          </h3>
          <a :href="`mailto:${config.public.supportEmail}`" class="link outfit move">
            {{ config.public.supportEmail }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
