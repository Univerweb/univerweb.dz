<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map'

useSeo({ page: 'contact' })

const { locale, t } = useI18n()
const config = useRuntimeConfig()

const { data: contact } = await useAsyncData(
  () => `contact-${locale.value}`,
  () => queryCollection(`contact_${locale.value}`)
    .select('title', 'description', 'lead', 'other')
    .first(),
  { watch: [locale] },
)

const position = {
  lat: 36.720937,
  lng: 3.047607,
}

const mapRef = ref<InstanceType<typeof GoogleMap> | null>(null)

function zoom() {
  const gmap = mapRef.value

  if (gmap?.ready) {
    gmap.map?.setZoom(16)
    gmap.map?.setCenter(position)
  }
}
</script>

<template>
  <main v-if="contact">
    <section class="container row" aria-labelledby="title">
      <div class="col col--1-6">
        <h1 id="title" class="h2">
          {{ contact.title }}
        </h1>
        <p class="lead">
          {{ contact.lead }}
        </p>
        <a :href="`mailto:${config.public.baseEmail}`" class="link outfit move">
          {{ config.public.baseEmail }}
        </a>
      </div>
    </section>

    <GoogleMap
      id="map"
      ref="mapRef"
      dir="auto"
      :api-key="config.public.gmapsKey"
      :map-id="config.public.gmapsId"
      :center="position"
      :zoom="14"
      :street-view-control="false"
      background-color="var(--background-secondary)"
    >
      <CustomMarker :options="{ position }" @click="zoom">
        <AppLogo />
      </CustomMarker>
    </GoogleMap>

    <section class="container request other" aria-labelledby="other">
      <div id="other" class="intro">
        <h2>{{ contact.other }}</h2>
      </div>
      <div class="row items-2">
        <div class="item">
          <h3 class="h6">
            {{ t('contact.manager') }}
          </h3>
          <a :href="`mailto:${config.public.managerEmail}`" class="link outfit move">
            {{ config.public.managerEmail }}
          </a>
        </div>
        <div class="item item-2">
          <h3 class="h6">
            {{ t('contact.support') }}
          </h3>
          <a :href="`mailto:${config.public.supportEmail}`" class="link outfit move">
            {{ config.public.supportEmail }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
