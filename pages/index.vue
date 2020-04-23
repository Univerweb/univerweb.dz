<template>
  <main id="main">
    <home-welcome id="welcome" />
    <div id="works" class="container">
      <h1>{{ $t('works.title') }}</h1>
      <div class="lead">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia non
          incidunt quo dolor praesentium culpa neque quam, quis ullam?
          Reprehenderit quis facilis voluptas quod molestiae vitae et error
          adipisci natus?
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import homeWelcome from '@/components/partials/home/welcome'

export default {
  components: {
    homeWelcome
  },

  head() {
    return {
      titleTemplate: `${this.$t('name')} — ${this.$t('home.title')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('home.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('home.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: ''
        }
      ]
    }
  }
}
</script>
