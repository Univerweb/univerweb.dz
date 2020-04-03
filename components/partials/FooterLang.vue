<template>
  <ul class="lang">
    <li>
      <NuxtLink :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>
        {{ $t('links.french') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="`/en` + $route.fullPath.replace(/^\/[^\/]+/, '')" exact>
        {{ $t('links.english') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="`/ar` + $route.fullPath.replace(/^\/[^\/]+/, '')" exact>
        {{ $t('links.arabic') }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style>
.lang {
  grid-area: lang;
  justify-content: start;
}

@media (min-width: 1440px) {
  .lang {
    justify-content: space-between;
  }
}
</style>
