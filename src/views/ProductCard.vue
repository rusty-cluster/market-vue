<template lang='pug'>
.product-card {{ $route.params.slug }}

  .product-card__cart Cart({{ product.cart }})

  h1.product-card__name {{ product.name }}
  .product-card__images
    img.product-card__image(:src='product.image')

  .product-card__in-stock
    span.product-card__in-stock_true(v-if='product.inStock') In Stock
    span.product-card__in-stock_false(v-else='product.inStock') Out of Stock
  .product-card__price ${{  product.price  }}
  p.product-card__description {{  product.description  }}
  .product-card__options
    .product-card__option(
      v-for='option in product.options'
      :key='option.id'
      @mouseover='updateImage(option.image)'
      )
        img.product-card__option-icon(:src='option.image')

  button.product-card__add-to-cart(
    @click='addToCart'
    ) Add to Cart

</template>

<script setup>
import { reactive, ref } from 'vue'

const product = reactive({
  name: null,
  image: null,
  price: null,
  description: null,
  inStock: null,
  cart: null,
})

function updateImage(imageURL) {
  product.image = imageURL
}

function addToCart(event) {
  product.cart += 1
}

Object.assign(product, {
  name: 'Slowpoke',
  image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href,
  price: 300,
  description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I. It evolves into Slowbro starting at level 37 or Slowking when traded while holding a King\'s Rock.',
  inStock: true,
  options: [
    { id: 3333, option: 'Slowpoke', image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href },
    { id: 2222, option: 'Slowbro', image: new URL('../assets/images/pokemon-slowbro.png', import.meta.url).href },
  ],
  cart: 0,
})
</script>

<style>
.product-card
  height: 100vh
  display: grid
  background: whitesmoke
  grid-template-areas:
    '.    .    .   '
    'name name cart'
    'image image image'
    'stock stock stock'
    'price price price'
    'description description description'
    'options options options'
    'add add add'
  grid-template-rows:  repeat(8, 1fr)
  grid-template-columns: 1fr 1fr 1fr

.product-card__name
  grid-area: name

.product-card__cart
  grid-area: cart
  align-self: center
  padding: 10px
  font-size: 30px
  border: 2px solid #d8d8d8

.product-card__images
  grid-area: image

.product-card__image
  max-width: 100%
  height: auto

.product-card__in-stock
  grid-area: stock

.product-card__price
  grid-area: price
  font-size: 40px
  color: cadetblue

.product-card__description
  grid-area: description

.product-card__options
  grid-area: options
  display: flex

.product-card__option
  margin: 4px
  padding: 10px
  border: 2px solid #d8d8d8
  border-radius: 10%

.product-card__option-icon
  height: 70px
  width: 70px

.product-card__add-to-cart
  grid-area: add
  height: 40px
  border: 2px solid #d8d8d8
  position: sticky
  bottom: 0

</style>
