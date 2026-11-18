<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map'

const { locale, t } = useI18n()
const config = useRuntimeConfig()
const mode = useColorMode({ disableTransition: false })

const { data: contact } = await useAsyncData(
  () => `contact-${locale.value}`,
  () => queryCollection(`contact_${locale.value}`)
    .select('title', 'description', 'lead', 'map')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'contact',
  title: () => contact.value!.title,
  description: () => contact.value!.description,
})

const position = {
  lat: 36.720937,
  lng: 3.047607,
}

const showMap = ref(false)

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
    <section class="container row" aria-labelledby="intro-title">
      <div class="col col--1-6">
        <h1 id="intro-title" class="h2">
          {{ contact.title }}
        </h1>
        <p class="lead">
          {{ contact.lead }}
        </p>
        <a :href="`mailto:${config.public.baseEmail}`" class="link outfit" dir="ltr">
          {{ config.public.baseEmail }}
        </a>
      </div>
    </section>

    <section aria-labelledby="map-title">
      <ClientOnly v-if="showMap">
        <h2 id="map-title" class="visually-hidden">
          {{ t('headings.mapLocation') }}
        </h2>
        <GoogleMap
          id="map"
          ref="mapRef"
          :key="mode"
          dir="auto"
          :api-key="config.public.gmapsKey"
          :map-id="config.public.gmapsId"
          :color-scheme="mode === 'dark' ? 'DARK' : 'LIGHT'"
          :center="position"
          :zoom="14"
          :street-view-control="false"
          background-color="var(--surface-color)"
        >
          <CustomMarker :options="{ position }" @click="zoom">
            <AppLogo />
          </CustomMarker>
        </GoogleMap>
      </ClientOnly>
      <div v-else id="map" class="map-consent">
        <div class="container intro intro-justify">
          <h2 id="map-title">
            {{ contact.map.headline }}
          </h2>
          <p class="lead">
            {{ contact.map.text }}
          </p>
          <button type="button" class="btn" @click="showMap = true">
            {{ contact.map.cta }}
            <IconNext />
          </button>
        </div>
      </div>
    </section>

    <section class="container request other" aria-labelledby="other-title">
      <div class="intro">
        <h2 id="other-title">
          {{ t('headings.otherContact') }}
        </h2>
      </div>
      <div class="row items-2">
        <div class="item">
          <h3 class="label">
            {{ t('headings.manager') }}
          </h3>
          <a :href="`mailto:${config.public.managerEmail}`" class="link outfit" dir="ltr">
            {{ config.public.managerEmail }}
          </a>
        </div>
        <div class="item item-2">
          <h3 class="label">
            {{ t('headings.support') }}
          </h3>
          <a :href="`mailto:${config.public.supportEmail}`" class="link outfit" dir="ltr">
            {{ config.public.supportEmail }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
