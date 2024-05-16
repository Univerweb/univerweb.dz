<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map'

const { t } = useI18n()
const meta = useMeta('contact')
const breadcrumb = useBreadcrumb('contact')
const config = useRuntimeConfig()

const markerOptions = {
  position: {
    lat: 36.720937,
    lng: 3.047607,
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
  <main class="contact">
    <div class="container row">
      <div class="col col--1-6">
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
      background-color="var(--background-secondary)"
    >
      <CustomMarker :options="markerOptions" @click="zoom">
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="20" viewBox="0 0 162 20">
          <path fill="#50C8F0" d="M8.688 15.643a4.351 4.351 0 0 1-4.348 4.349A4.35 4.35 0 0 1 0 15.643a4.351 4.351 0 0 1 4.348-4.348 4.35 4.35 0 0 1 4.34 4.348Zm11.304 0a4.351 4.351 0 0 1-4.349 4.349 4.351 4.351 0 0 1-4.348-4.349 4.351 4.351 0 0 1 4.348-4.348c2.4.009 4.349 1.95 4.349 4.348ZM8.688 4.348A4.351 4.351 0 0 1 4.34 8.696 4.355 4.355 0 0 1 0 4.348 4.351 4.351 0 0 1 4.348 0c2.4 0 4.34 1.95 4.34 4.348Z" />
          <path fill="#28285A" d="M38.442 19.467V17.75c-.924 1.4-2.607 2.24-4.323 2.24-3.299 0-5.431-2.423-5.431-5.747v-8.18h2.874v7.963c0 1.975 1.158 3.4 3.19 3.4 1.974 0 3.665-1.534 3.665-3.666V6.064h2.85V19.46h-2.825v.008ZM46.88 6.064V7.78c.95-1.4 2.608-2.24 4.349-2.24 3.273 0 5.406 2.423 5.406 5.747v8.18h-2.85v-7.972c0-1.974-1.182-3.398-3.19-3.398-2.007 0-3.665 1.532-3.665 3.665v7.705h-2.873V6.064h2.823Zm12.145-3.932c0-1 .742-1.716 1.791-1.716 1.025 0 1.766.709 1.766 1.716 0 1.025-.741 1.766-1.766 1.766-1.05.009-1.79-.733-1.79-1.766Zm3.216 17.335h-2.85V6.064h2.85v13.403Zm6.522 0L63.865 6.064h3.057l3.849 11.187 3.881-11.187h3.082l-4.931 13.403h-4.04ZM85.189 5.539c4.165 0 7.123 2.957 7.123 7.097 0 .317-.025.708-.05 1.025l-11.296-.025c.342 2.374 2.008 3.957 4.19 3.957 1.791 0 3.457-1.058 3.957-2.533l2.69.4C91.037 18.1 88.272 20 85.206 20c-4.19 0-7.197-3.082-7.197-7.389 0-4.123 3.007-7.072 7.18-7.072Zm4.14 5.99c-.316-2.108-2.007-3.59-4.223-3.59-2.166 0-3.748 1.449-4.115 3.59h8.338Zm7.847-5.465V7.78c.817-1.374 2.108-2.19 3.64-2.19.525 0 1.133.133 1.716.34v2.558a5.636 5.636 0 0 0-2.082-.425c-1.9 0-3.166 1.691-3.166 4.065v7.33h-2.873V6.065h2.765Zm10.754 13.403-4.323-13.403h2.982l3.349 10.58 2.948-10.58h3.041l3.057 10.629 3.298-10.629h2.949l-4.373 13.403h-3.773l-2.666-10.08-2.716 10.08h-3.773Zm24.981-13.928c4.165 0 7.122 2.957 7.122 7.097 0 .317-.025.708-.05 1.025l-11.287-.025c.342 2.374 2.008 3.957 4.19 3.957 1.791 0 3.457-1.058 3.957-2.533l2.691.4c-.767 2.64-3.532 4.54-6.598 4.54-4.19 0-7.197-3.082-7.197-7.389-.008-4.123 2.999-7.072 7.172-7.072Zm4.14 5.99c-.316-2.108-2.007-3.59-4.223-3.59-2.166 0-3.748 1.449-4.115 3.59h8.338Zm12.812 8.463c-2.058 0-3.774-.9-4.932-2.4v1.875h-2.799V0h2.874v7.888c1.133-1.474 2.849-2.349 4.857-2.349 3.906 0 6.722 3.032 6.722 7.23 0 4.19-2.849 7.223-6.722 7.223Zm-4.957-7.23c0 2.607 1.85 4.54 4.407 4.54 2.532 0 4.431-1.875 4.431-4.54 0-2.608-1.874-4.54-4.431-4.54-2.566.008-4.407 1.932-4.407 4.54Zm12.97 5.305c0-1 .741-1.715 1.766-1.715 1.058 0 1.766.708 1.766 1.715 0 1.025-.708 1.766-1.766 1.766-1.025 0-1.766-.741-1.766-1.765Z" />
        </svg>
      </CustomMarker>
    </GoogleMap>

    <div class="container request">
      <div class="intro">
        <h2>{{ t('contact.other') }}</h2>
      </div>
      <div class="row">
        <div class="col col--1-6">
          <h3 class="h6">
            {{ t('contact.manager') }}
          </h3>
          <a :href="`mailto:${config.public.managerEmail}`" class="link outfit move">
            {{ config.public.managerEmail }}
          </a>
        </div>
        <div class="col col--7-12">
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
