<template>
  <p class="lead">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </p>
</template>
