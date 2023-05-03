<template lang='pug'>
VendorHeader
.vendor-product-card

  .vendor-product-card__category {{ product.category }}
  h1.vendor-product-card__name {{ product.name }}

  .vendor-product-card__images
    img.vendor-product-card__image(:src='product.image')
  .vendor-product-card__options
    .vendor-product-card__option(
      v-for='option in product.options'
      :key='option.id'
      @mouseover='updateImage(option.image)'
      )
      img.vendor-product-card__option-icon(:src='option.image')

  span.vendor-product-card__quantity-label.vendor-product-card__quantity-label_in-stock(v-if='product.inStock') In Stock
  span.vendor-product-card__quantity-label.vendor-product-card__quantity-label_out-of-stock(v-else) Out of Stock

  .vendor-product-card__price ${{  product.price  }}
  p.vendor-product-card__description {{  product.description  }}

  router-link.vendor-product-card__edit(:to="{ name: 'VendorProductAdd' }")
    .vendor-product-card__edit-text Edit
    .vendor-product-card__edit-icon
      img.vendor-product-card__edit-icon-svg(src='@/assets/icons/right-arrow.svg')
</template>

<script setup>
import { reactive, ref } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
import VendorProductCartItem from '@/components/vendor/VendorProductCartItem.vue'

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

Object.assign(product, {
  category: 'POKEMON',
  name: 'Slowpoke',
  image: new URL('/src/assets/images/pokemon-slowpoke.png', import.meta.url).href,
  price: 300,
  description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I. It evolves into Slowbro starting at level 37 or Slowking when traded while holding a King\'s Rock.',
  inStock: true,
  options: [
    { id: 3333, option: 'Slowpoke', image: new URL('/src/assets/images/pokemon-slowpoke.png', import.meta.url).href },
    { id: 2222, option: 'Slowbro', image: new URL('/src/assets/images/pokemon-slowbro.png', import.meta.url).href },
  ],
})
</script>

<style>
.vendor-product-card
  display: flex
  flex-direction: column

.vendor-product-card__category
  font-size: 12px
  display: flex
  justify-content: center

.vendor-product-card__name
  display: flex
  justify-content: center
  margin: 0 18px
  font-weight: 400
  font-size: 40px
  padding-bottom: 30px
  line-height: 0.5

.vendor-product-card__images
  padding: 18px 18px 0 18px
  background: var(--lynx-white)

.vendor-product-card__image
  max-width: 100%
  height: auto

.vendor-product-card__options
  display: flex
  padding: 18px
  background: var(--lynx-white)

.vendor-product-card__option
  border: 1px solid var(--cloudy-today)
  border-radius: 6px
  margin-right: 20px
  padding: 10px
  border-radius: 10px

.vendor-product-card__quantity-label
  margin: 0 18px
  padding-top: 18px

.vendor-product-card__price
  font-size: 40px
  color: var(--limone)
  line-height: 1
  margin: 0 18px

.vendor-product-card__description
  margin: 18px
  padding-bottom: 30px

.vendor-product-card__option-icon
  height: 70px
  width: 70px

.vendor-product-card__edit
  width: 60vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.vendor-product-card__edit-text
  padding-left: 10px
  color: var(--nero)

.vendor-product-card__edit-icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

.vendor-product-card__edit-icon-svg
  height: 14px
  width: 14px
</style>
