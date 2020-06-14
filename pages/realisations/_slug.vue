<template>
  <main id="main" class="work">
    <div class="container">
      <work-back />
      <h1>{{ work.title }}</h1>
    </div>
    <div class="card">
      <img v-lazy="'/works/' + work.slug + '.jpg'" :alt="work.title" />
    </div>
    <work-nav />
    <work-request />
  </main>
</template>

<script>
import WorkBack from '@/components/partials/work/WorkBack'
import WorkNav from '@/components/partials/work/WorkNav'
import WorkRequest from '@/components/common/AppRequest'

export default {
  components: {
    WorkBack,
    WorkNav,
    WorkRequest
  },

  validate({ params, store }) {
    return store.state.i18n.messages.worksItem.some(
      (item) => item.slug === params.slug
    )
  },

  data() {
    const works = this.$t('worksItem')
    const slug = this.$route.params.slug
    const work = works.find((work) => work.slug === slug)
    return { work }
  },

  head() {
    return {
      titleTemplate: `${this.work.title} — ${this.$t('name')}`,
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
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
