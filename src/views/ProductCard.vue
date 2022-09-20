<template lang='pug'>
.product-card {{ $route.params.slug }}
 
  h1.product-card__name {{ product.name }}
  .product-card__images
    img.product-card__image(:src='product.image')

  p.product-card__description {{  product.description  }}
  .product-card__in-stock
    span.product-card__in-stock_true(v-if='product.inStock') In Stock
    span.product-card__in-stock_false(v-else='product.inStock') Out of Stock
  .product-card__options
    .product-card__option(
      v-for='option in product.options'
      :key='option.id'
      @mouseover="updateImage(option.image)"
      )
        img.product-card__option-icon(:src="option.image")

</template>

<script setup>
import { reactive, ref } from 'vue'

const product = reactive({
  name: null,
  image: null,
  description: null,
  inStock: null,
})

function updateImage(imageURL) {
  product.image = imageURL
}

Object.assign(product, {
  name: 'Slowpoke',
  image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href,
  description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I. It evolves into Slowbro starting at level 37 or Slowking when traded while holding a King\'s Rock.',
  inStock: true,
  options: [
    { id: 3333, option: 'Slowpoke', image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href },
    { id: 2222, option: 'Slowbro', image: new URL('../assets/images/pokemon-slowbro.png', import.meta.url).href },
  ],
})
</script>

<style>
.product-card
  height: 100vh
  background: whitesmoke

.product-card__options
  display: flex

.product-card__option
  margin: 10px

.product-card__option-icon
  height: 70px
  width: 70px

</style>
