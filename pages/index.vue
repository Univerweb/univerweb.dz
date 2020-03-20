<template>
  <main>
    <section class="container hero">
      <div>
        <h1>Nous créons des sites web.</h1>
        <p class="h2">
          Nous concevons des sites web qui répondent précisément à vos attentes
          et qui respectent intégralement votre image de marque.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Création de sites web',
      description: 'Contenu à venir…'
    }
  },
  head() {
    return {
      titleTemplate: `%s — ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
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
