<template lang="pug">
.retailer-product-search
  RetailerHeader(:cartItems='cartItems')

  .retailer-product-search__search-field
    .retailer-product-search__search-button
      img.retailer-product-search__icon-svg(src='@/assets/icons/magnifying-glass.svg')
    input.retailer-product-search__search-input(
      type='search'
      name='q'
      placeholder='Search for products...'
      autofocus
    )

  ul.retailer-product-search__list
    RetailerProductTile(
      v-for='product in products'
      :product='product'
      :key='product.name'
      @add-or-increase-quantity='addOrIncreaseQuantity'
    )

  RetailerFooter
</template>

<script setup>
import { onMounted } from 'vue'
import { reactive, ref } from 'vue'

import RetailerFooter from '@/components/retailer/RetailerFooter.vue'
import RetailerHeader from '@/components/retailer/RetailerHeader.vue'
import RetailerProductTile from '@/components/retailer/RetailerProductTile.vue'

const cartItems = ref([])
const products = ref([])

onMounted(async () => {
  const cartItemsResponse = await fetch('mocks/retailer-cart-items')
  const productsResponse = await fetch('mocks/retailer-products')

  cartItems.value = await cartItemsResponse.json()
  products.value = await productsResponse.json()
})

const addOrIncreaseQuantity = productInfo => {
  const indexOfFoundItem = cartItems.value.findIndex(
    item => item['id'] === productInfo['id']
  )
  const isItemFound = indexOfFoundItem > -1

  if (isItemFound) {
    return cartItems.value.at(indexOfFoundItem)['quantity']
      += productInfo['quantity']
  }
  return cartItems.value.push(productInfo)
}
</script>

<style>
.retailer-product-search
  display: grid
  grid-template-columns: 1fr min(100%, 800px) 1fr
  grid-template-rows: auto auto 1fr auto
  align-content: start
  min-height: 100vh

.retailer-product-search > *
  grid-column: 2

.retailer-product-search__search-field
  display: flex
  align-items: center
  justify-content: center
  position: sticky
  top: 8vh
  height: 6.5vh
  margin: 0
  padding: 1vh 2vh
  background: var(--faded-grey)

.retailer-product-search__search-button
  display: flex
  align-items: center
  justify-content: center
  height: 34px
  width: 34px
  cursor: pointer

input.retailer-product-search__search-input
  font-size: 20px
  flex-grow: 10
  margin: 0
  padding: 1vh
  border: none
  border-radius: 24px
  background: var(--lynx-white)

input.retailer-product-search__search-input:focus
  outline-style: none
  box-shadow: 0 4px 20px var(--limone)
  border-color: transparent

img.retailer-product-search__icon-svg
  height: 24px
  width: 24px

ul.retailer-product-search__list
  display: flex
  flex-direction: column
  margin: 0
  padding: 2vh 2vh 0
</style>
