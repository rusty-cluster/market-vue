<template lang="pug">
.retailer-cart
  RetailerHeader(:cartItems='cartItems')

  ul.retailer-cart__list
    RetailerCartItem(
      v-for='cartItem in cartItems'
      :id='cartItem.id'
      :name='cartItem.name'
      :price='cartItem.price'
      :quantity='cartItem.quantity'
      :key='cartItem.name'
    )
  
  RetailerFooter
</template>

<script setup>
import { onMounted } from 'vue'
import { reactive, ref } from 'vue'

import RetailerCartItem from '@/components/retailer/RetailerCartItem.vue'
import RetailerFooter from '@/components/retailer/RetailerFooter.vue'
import RetailerHeader from '@/components/retailer/RetailerHeader.vue'

const cartItems = ref([])

onMounted(async () => {
  const cartItemsResponse = await fetch('mocks/retailer-cart-items')

  cartItems.value = await cartItemsResponse.json()
})
</script>

<style>
.retailer-cart
  display: grid
  grid-template-columns: 1fr min(100%, 800px) 1fr
  grid-template-rows: auto 1fr auto
  align-content: start
  min-height: 100vh

.retailer-cart > *
  grid-column: 2

ul.retailer-cart__list
  display: flex
  flex-direction: column
  margin: 0
  padding: 2vh 2vh 0
</style>
