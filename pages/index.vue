<template>
  <main>
    <AppWelcome />
    <WorkCardGroup headline-tag="h2" title-tag="h3" :limit="6" more />
    <BlogCardGroup headline-tag="h2" title-tag="h3" :limit="2" more />
    <LazyAppRequest class-name="h1" />
  </main>
</template>
