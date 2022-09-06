<template lang='pug'>
.product-card {{ $route.params.slug }}
 
  h1.product-card__name {{ product.name }}
  .product-card__images
    img.product-card__image(:src='product.image')
</template>

<script setup>
import { reactive, ref } from 'vue'

const product = reactive({
  name: null,
  image: null,
})

Object.assign(product, {
  name: 'Slowpoke',
  image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href,
})
</script>

<style>
.product-card
  height: 100vh
</style>
