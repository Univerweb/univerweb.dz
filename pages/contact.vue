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
          <h3 class="h6">{{ $t('label.manager') }}</h3>
          <a :href="'mailto:' + $config.managerEmail" class="link moveArrow">{{ $config.managerEmail }}</a>
        </div>
        <div class="item">
          <h3 class="h6">{{ $t('label.support') }}</h3>
          <a :href="'mailto:' + $config.supportEmail" class="link moveArrow">{{ $config.supportEmail }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const { title, description, other } = await $content(app.i18n.locale, 'contact').fetch()

    return {
      title,
      description,
      other
    }
  },

  head() {
    return {
      titleTemplate: `${this.title} — ${this.$t('name')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description }
      ]
    }
  },

  mounted() {
    if (typeof google === 'undefined') {
      const script = document.createElement('script')
      script.onload = this.onScriptLoaded
      script.type = 'text/javascript'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.$config.apiKey}&map_ids=101a5bf427dc0726`
      document.head.appendChild(script)
    } else {
      this.onScriptLoaded()
    }
  },

  methods: {
    onScriptLoaded(event = null) {
      const hq = { lat: 36.721043, lng: 3.047502 }
      // eslint-disable-next-line no-undef
      const map = new google.maps.Map(document.getElementById('map'), {
        mapId: '101a5bf427dc0726',
        zoom: 14,
        center: hq,
        backgroundColor: '#fafafa'
      })
      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker({
        position: hq,
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
  background-color: #fafafa;
}

.contact {
  background-color: var(--primary);
  color: $white;
  a {
    color: $white;
  }
}
</style>
