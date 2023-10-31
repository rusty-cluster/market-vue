<template lang="pug">
.retailer-orders
  RetailerHeader(:cartItems='cartItems')

  ul.retailer-orders__list
    RetailerOrder(
      v-for='order in orders.slice().reverse()'
      :id='order.id'
      :timestamp='order.timestamp'
      :cartItems='order.cartItems'
      :key='order.timestamp'
    )

  RetailerFooter
</template>

<script setup>
import { onMounted } from 'vue'
import { reactive, ref } from 'vue'

import RetailerFooter from '@/components/retailer/RetailerFooter.vue'
import RetailerHeader from '@/components/retailer/RetailerHeader.vue'
import RetailerOrder from '@/components/retailer/RetailerOrder.vue'

const cartItems = ref([])
const orders = ref([])

onMounted(async () => {
  const cartItemsResponse = await fetch('mocks/retailer-cart-items')
  const ordersResponse = await fetch('mocks/retailer-orders')

  cartItems.value = await cartItemsResponse.json()
  orders.value = await ordersResponse.json()
})
</script>

<style>
.retailer-orders
  display: grid
  grid-template-columns: 1fr min(100%, 800px) 1fr
  grid-template-rows: auto 1fr auto
  align-content: start
  min-height: 100vh

.retailer-orders > *
  grid-column: 2

ul.retailer-orders__list
  display: flex
  flex-direction: column
  margin: 0
  padding: 2vh 2vh 0
</style>
