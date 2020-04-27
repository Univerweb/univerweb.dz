<template>
  <section v-if="$route.name === home" class="container works">
    <h2 class="h1">{{ $t('works.title') }}</h2>
    <div class="grid">
      <div
        v-for="(work, index) in $t('works.work')"
        :key="work.id"
        :index="index"
        class="item"
      >
        <h3>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            {{ work.name }}
          </nuxt-link>
        </h3>

        <nuxt-link :to="localePath('/realisations/' + work.slug)">
          <img :src="work.thumbnail" :alt="work.name" />
          <p>{{ work.description }}</p>
        </nuxt-link>
      </div>
    </div>
  </section>

  <section v-else class="container">
    <h1>{{ $t('works.title') }}</h1>
    <div class="grid">
      <div
        v-for="(work, index) in $t('works.work')"
        :key="work.id"
        :index="index"
        class="item"
      >
        <h2 class="h3">
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            {{ work.name }}
          </nuxt-link>
        </h2>

        <nuxt-link :to="localePath('/realisations/' + work.slug)">
          <img :src="work.thumbnail" :alt="work.name" />
          <p>{{ work.description }}</p>
        </nuxt-link>
      </div>
    </div>
  </section>
  <!-- <div class="grid">
    <div v-for="(work, index) in works" :key="index" class="item">
      <h2 class="h3">
        <nuxt-link
          :to="
            localePath({
              name: 'realisations-id',
              params: { id: work.slug }
            })
          "
        >
          {{ work.name }}
        </nuxt-link>
      </h2>
      <nuxt-link
        :to="localePath({ name: 'realisations-id', params: { id: work.slug } })"
      >
        <img :src="work.thumbnail" :alt="work.name" />
        <p>{{ work.description }}</p>
      </nuxt-link>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      home: `index___${this.$i18n.locale}`
    }
  }
}
</script>

<style lang="scss">
.works .item {
  display: grid;
  align-content: start;
  & h3,
  & .h3 {
    order: 1;
  }
  & > a {
    position: relative;
    display: grid;
    & p {
      display: grid;
      align-items: end;
      background: $blue;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 15px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover p {
      opacity: 1;
    }
  }
}
</style>
