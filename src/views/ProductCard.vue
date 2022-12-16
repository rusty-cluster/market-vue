<template lang='pug'>
.product-card
  VendorHeader

  h1.product-card__name {{ product.name }}
  .product-card__images
    img.product-card__image(:src='product.image')

  .product-card__in-stock
    span.product-card__in-stock_true(v-if='product.inStock') In Stock
    span.product-card__in-stock_false(v-else='product.inStock') Out of Stock
  .product-card__price ${{  product.price  }}
  .product-card__options
    .product-card__option(
      v-for='option in product.options'
      :key='option.id'
      @mouseover='updateImage(option.image)'
      )
        img.product-card__option-icon(:src='option.image')
  p.product-card__description {{  product.description  }}

  .product-card__quantity
    button.product-card__decrease(@click='decreaseQuantity') -
    .product-card__counter {{ product.quantity }}
    button.product-card__increase(@click='increaseQuantity') +

  button.product-card__add-to-cart Add to Cart

  VendorFooter
</template>

<script setup>
import { reactive, ref } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'
import VendorFooter from '@/components/VendorFooter.vue'

const product = reactive({
  name: null,
  image: null,
  price: null,
  description: null,
  inStock: null,
})

function updateImage(imageURL) {
  product.image = imageURL
}

function increaseQuantity(event) {
  product.quantity += 1
}

function decreaseQuantity(event) {
  if (product.quantity === 0) return

  return product.quantity -= 1
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
  quantity: 1,
})
</script>

<style>
.product-card
  display: flex
  flex-direction: column

.product-card__name
  margin: 0 10px

.product-card__images
  margin: 0 10px

.product-card__image
  max-width: 100%
  height: auto

.product-card__in-stock
  margin: 0 10px

.product-card__price
  font-size: 40px
  color: var(--limone)
  line-height: 1
  margin: 0 10px

.product-card__description
  margin: 10px

.product-card__options
  display: flex
  margin: 0 10px
  padding-top: 16px

.product-card__option
  margin-right: 20px
  padding: 10px
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 10px

.product-card__option-icon
  height: 70px
  width: 70px

.product-card__quantity
  display: flex
  align-items: center
  justify-content: space-between
  border: 1px solid var(--kamenozoki-grey)
  background-color: var(--lynx-white)
  border-radius: 20px
  height: 40px
  margin: 10px

.product-card__increase
  width: 40px
  height: 40px
  font-family: inherit
  font-size: 16px
  border: 0
  background: 0
  cursor: pointer

.product-card__decrease
  width: 40px
  height: 40px
  font-family: inherit
  font-size: 16px
  border: 0
  background: 0
  cursor: pointer

.product-card__add-to-cart
  height: 40px
  margin: 10px
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  font-family: inherit
  font-size: 16px

.product-card__footer
  height: 40px
</style>
