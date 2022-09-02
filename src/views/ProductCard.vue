<template lang="pug">
.product-card {{ $route.params.slug }}
 
  h1.product-card__name {{ name }}
</template>

<script setup>

const props = defineProps({
  name: { type: String, default: null },
})

</script>

<style>
.product-card
  height: 100vh
</style>
