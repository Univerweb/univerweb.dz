<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'

const { t } = useI18n()
const breadcrumb = useBreadcrumb()
const config = useRuntimeConfig()

const map = ref<google.maps.Map | null>(null)
const marker = ref<google.maps.Marker | null>(null)
const center: google.maps.LatLngLiteral = { lat: 36.721043, lng: 3.047502 }

onMounted(async () => {
  const loader = new Loader({
    apiKey: config.public.apiKey,
    version: 'weekly',
  })
  await loader.importLibrary('maps')

  const mapOptions: google.maps.MapOptions = {
    mapId: '101a5bf427dc0726',
    zoom: 14,
    streetViewControl: false,
    center,
    backgroundColor: '#fafafa',
  }

  map.value = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    mapOptions,
  )

  marker.value = new google.maps.Marker({
    position: center,
    map: map.value,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: '#50c8f0',
      fillOpacity: 1,
      strokeColor: '#28285a',
      scale: 10,
    },
  })

  marker.value.addListener('click', () => {
    map.value?.setZoom(16)
    map.value?.setCenter(marker.value?.getPosition() as google.maps.LatLng)
  })
})

useSeoMeta({
  title: t('contact.title'),
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

    <div id="map" />

    <div class="container contact">
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

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 720px;
  background-color: #fafafa;
}

.contact {
  background-color: var(--secondary);
  color: $white;

  a {
    color: $white;
  }
}
</style>
