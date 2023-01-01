<template>
  <main>
    <div class="container details">
      <div class="item">
        <h1 class="h2">{{ title }}</h1>
        <AppAbout />
      </div>
    </div>
    <div id="map"></div>
    <div class="container contact">
      <div class="intro">
        <h2>{{ other }}</h2>
      </div>
      <div class="details">
        <div class="item">
          <h3 class="h6">{{ label.manager }}</h3>
          <a :href="`mailto:${managerEmail}`" class="link move-arrow">{{ managerEmail }}</a>
        </div>
        <div class="item">
          <h3 class="h6">{{ label.support }}</h3>
          <a :href="`mailto:${supportEmail}`" class="link move-arrow">{{ supportEmail }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const { data: contact } = await useAsyncData('contactPage', () => queryContent(locale.value, 'contact').only(['title', 'desc', 'other']).findOne())
const { data: global } = await useAsyncData('contactGlobal', () => queryContent(locale.value, 'global').only(['name', 'label']).findOne())

const title = contact.value!.title
const desc = contact.value!.desc
const name = global.value!.name
const item = locale.value !== 'fr' ? `${config.public.baseURL}/${locale.value}` : `${config.public.baseURL}/`
const other = contact.value!.other
const label = global.value!.label
const managerEmail = config.public.managerEmail
const supportEmail = config.public.supportEmail

useHead({
  title,

  meta: [
    { name: 'description', content: desc },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc }
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: name, item: item },
          { '@type': 'ListItem', position: 2, name: title }
        ]
      }
    }
  ]
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
