<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'

const { t } = useI18n()
const breadcrumb = useBreadcrumb()
const config = useRuntimeConfig()

onMounted(async () => {
  const loader = new Loader({
    apiKey: config.public.apiKey,
    version: 'weekly',
  })

  const center = { lat: 36.721043, lng: 3.047502 }
  const mapOptions = {
    mapId: '101a5bf427dc0726',
    zoom: 14,
    streetViewControl: false,
    center,
    backgroundColor: 'var(--light)',
  }

  const { Map } = await loader.importLibrary('maps')
  const map = new Map(document.getElementById('map') as HTMLElement, mapOptions)

  const marker = new google.maps.Marker({
    map,
    position: center,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: '#50c8f0',
      fillOpacity: 1,
      strokeColor: '#28285a',
      scale: 10,
    },
  })

  marker.addListener('click', () => {
    map.setZoom(16)
    map.setCenter(marker.getPosition() as google.maps.LatLng)
  })
})

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

    <div id="map" />

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
