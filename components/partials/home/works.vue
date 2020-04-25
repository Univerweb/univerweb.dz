<template>
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
