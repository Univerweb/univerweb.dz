<template>
  <main>
    <AppWelcome />
    <LazyAppList headline-tag="h2" title-tag="h3" :limit="6" more />
    <LazyAppRequest class-name="h1" />
  </main>
</template>
