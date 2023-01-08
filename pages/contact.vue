<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const seoItem = useSeoItem()

useHead({
  title: t('contact.title'),

  meta: [
    { name: 'description', content: t('contact.desc') },
    { property: 'og:title', content: t('contact.title') },
    { property: 'og:description', content: t('contact.desc') },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('name'), item: seoItem },
          { '@type': 'ListItem', position: 2, name: t('contact.title') },
        ],
      },
    },
  ],
})

// mounted() {
//   if (typeof google === 'undefined') {
//     const script = document.createElement('script')
//     script.onload = this.onScriptLoaded
//     script.type = 'text/javascript'
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${this.$config.public.apiKey}&map_ids=101a5bf427dc0726`
//     document.head.appendChild(script)
//   } else {
//     this.onScriptLoaded()
//   }
// },

// methods: {
//   onScriptLoaded(event = null) {
//     const hq = { lat: 36.721043, lng: 3.047502 }
//     const map = new google.maps.Map(document.getElementById('map'), {
//       mapId: '101a5bf427dc0726',
//       zoom: 14,
//       streetViewControl: false,
//       center: hq,
//       backgroundColor: '#fafafa'
//     })
//     const marker = new google.maps.Marker({
//       position: hq,
//       icon: {
//         path: google.maps.SymbolPath.CIRCLE,
//         fillColor: '#50c8f0',
//         fillOpacity: 1,
//         strokeColor: '#28285a',
//         scale: 10
//       },
//       map
//     })
//     marker.addListener('click', function () {
//       map.setZoom(16)
//       map.setCenter(marker.getPosition())
//     })
//   }
// }
</script>

<template>
  <main>
    <div class="container details">
      <div class="item">
        <h1 class="h2">
          {{ t('contact.title') }}
        </h1>
        <AppAbout />
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
