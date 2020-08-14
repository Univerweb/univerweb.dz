<template>
  <main>
    <div class="container details">
      <div class="item">
        <h1 class="h2">{{ $t('contact.title') }}</h1>
        <app-about />
      </div>
    </div>
    <div id="map"></div>
    <div class="container">
      <div class="intro">
        <h2>{{ $t('contact.other.headline') }}</h2>
      </div>
      <div class="details">
        <div
          v-for="(name, value) in $t('contact.other.body')"
          :key="value"
          class="item"
        >
          <h3 class="h6">{{ name }}</h3>
          <a :href="'mailto:' + value" class="link">
            {{ value }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    if (typeof google === 'undefined') {
      const script = document.createElement('script')
      script.onload = this.onScriptLoaded
      script.type = 'text/javascript'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&map_ids=101a5bf427dc0726`
      document.head.appendChild(script)
    } else {
      this.onScriptLoaded()
    }
  },

  methods: {
    onScriptLoaded(event = null) {
      const HQ = { lat: 36.721043, lng: 3.047502 }
      // eslint-disable-next-line no-undef
      const map = new google.maps.Map(document.getElementById('map'), {
        mapId: '101a5bf427dc0726',
        zoom: 14,
        center: HQ
      })
      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker({
        position: HQ,
        icon: {
          // eslint-disable-next-line no-undef
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#50c8f0',
          fillOpacity: 1,
          strokeColor: '#28285a',
          scale: 10
        },
        map
      })
      marker.addListener('click', function () {
        map.setZoom(16)
        map.setCenter(marker.getPosition())
      })
    }
  },

  head() {
    return {
      bodyAttrs: { class: 'contact' },
      titleTemplate: `${this.$t('contact.title')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('contact.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('contact.description')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 720px;
  background-color: $light;
}
</style>
