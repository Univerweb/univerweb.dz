<script setup lang="ts">
const { t, tm, rt } = useI18n()
const meta = useMeta('agency')
const breadcrumb = useBreadcrumb('agency')

useSeoMeta(meta)
useHead({ script: [breadcrumb] })
</script>

<template>
  <main>
    <div class="container intro">
      <h1>{{ t('agency.headline') }}</h1>
      <p class="lead">
        {{ t('agency.lead') }}
      </p>
    </div>

    <div class="container">
      <div class="intro">
        <h2 class="h1">
          {{ t('agency.method.title') }}
        </h2>
      </div>
      <ol class="details method">
        <li v-for="(value, name) in (tm('agency.method.content') as { name: string })" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">
            {{ rt(value) }}
          </p>
        </li>
      </ol>
    </div>

    <div class="container">
      <div class="intro">
        <h2 class="h1">
          {{ t('agency.choose.title') }}
        </h2>
      </div>
      <div class="details">
        <div v-for="(value, name) in (tm('agency.choose.content') as { name: string })" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">
            {{ rt(value) }}
          </p>
        </div>
      </div>
    </div>

    <LazyAppRequest />
  </main>
</template>

<style lang="scss">
.method {
  counter-reset: method;

  li::before {
    @include font(56, 900);

    counter-increment: method;
    content: counters(method, '-');
    color: $primary;
  }
}
</style>
