<template lang='pug'>
.product-card
  VendorHeader

  .product-card__category {{ product.category }}
  h1.product-card__name {{ product.name }}

  .product-card__images
    img.product-card__image(:src='product.image')
  .product-card__options
    .product-card__option(
      v-for='option in product.options'
      :key='option.id'
      @mouseover='updateImage(option.image)'
      )
      img.product-card__option-icon(:src='option.image')

  span.product-card__quantity-label.product-card__quantity-label_in-stock(v-if='product.inStock') In Stock
  span.product-card__quantity-label.product-card__quantity-label_out-of-stock(v-else) Out of Stock

  .product-card__price ${{  product.price  }}
  p.product-card__description {{  product.description  }}

  router-link.product-card__edit(to='/vendor/products/add')
    .product-card__edit-button Edit
    .product-card__edit-icon
      img.product-card__edit-icon-svg(src='@/assets/icons/right-arrow.svg')

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

Object.assign(product, {
  category: 'POKEMON',
  name: 'Slowpoke',
  image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href,
  price: 300,
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
  display: flex
  flex-direction: column

.product-card__category
  font-size: 12px
  display: flex
  justify-content: center

.product-card__name
  display: flex
  justify-content: center
  margin: 0 18px
  font-weight: 400
  font-size: 40px
  padding-bottom: 30px
  line-height: 0.5

.product-card__images
  padding: 18px 18px 0 18px
  background: var(--lynx-white)

.product-card__image
  max-width: 100%
  height: auto

.product-card__options
  display: flex
  padding: 18px
  background: var(--lynx-white)

.product-card__option
  border: 1px solid var(--cloudy-today)
  border-radius: 6px
  margin-right: 20px
  padding: 10px
  border-radius: 10px

.product-card__quantity-label
  margin: 0 18px
  padding-top: 18px

.product-card__price
  font-size: 40px
  color: var(--limone)
  line-height: 1
  margin: 0 18px

.product-card__description
  margin: 18px
  padding-bottom: 30px

.product-card__option-icon
  height: 70px
  width: 70px

.product-card__edit
  width: 60vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.product-card__edit-button
  padding-left: 10px
  color: var(--nero)

.product-card__edit-icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

.product-card__edit-icon-svg
  height: 14px
  width: 14px
</style>
