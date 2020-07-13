<template>
  <main>
    <div class="container details">
      <div class="item">
        <h1 class="h2">{{ $t('contact.title') }}</h1>
        <app-about />
      </div>
    </div>
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
