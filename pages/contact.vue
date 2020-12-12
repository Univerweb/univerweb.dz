<template>
  <main>
    <div class="container details">
      <div class="item">
        <h1 class="h2">{{ $t('menu.contact') }}</h1>
        <AppAbout />
      </div>
    </div>
    <div id="map"></div>
    <div class="container contact">
      <div class="intro">
        <h2>{{ $t('contact.other.title') }}</h2>
      </div>
      <div class="details">
        <div v-for="(value, name) in $t('contact.other.body')" :key="name" class="item">
          <h3 class="h6">{{ name }}</h3>
          <a :href="'mailto:' + value" class="link moveArrow">{{ value }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.$t('menu.contact')} — ${this.$t('name')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('contact.description') },
        { hid: 'og:title', property: 'og:title', content: this.$t('menu.contact') },
        { hid: 'og:description', property: 'og:description', content: this.$t('contact.description') }
      ]
    }
  },

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
  }
}
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 720px;
  background-color: #e5e3df;
}

.contact {
  background-color: var(--primary);
  color: $white;
  a {
    color: $white;
  }
}
</style>
