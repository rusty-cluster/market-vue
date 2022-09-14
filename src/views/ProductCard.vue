<template lang='pug'>
.product-card {{ $route.params.slug }}
 
  h1.product-card__name {{ product.name }}
  .product-card__images
    img.product-card__image(:src='product.image')

  p.product-card__description {{  product.description  }}
  .product-card__in-stock
    span.product-card__in-stock_true(v-if='product.inStock') In Stock
    span.product-card__in-stock_false(v-else='product.inStock') Out of Stock
</template>

<script setup>
import { reactive, ref } from 'vue'

const product = reactive({
  name: null,
  image: null,
  description: null,
  inStock: null,
})

Object.assign(product, {
  name: 'Slowpoke',
  image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href,
  description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I. It evolves into Slowbro starting at level 37 or Slowking when traded while holding a King\'s Rock.',
  inStock: true,
})
</script>

<style>
.product-card
  height: 100vh
</style>
