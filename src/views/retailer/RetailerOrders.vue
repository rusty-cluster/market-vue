<template lang="pug">
.retailer-orders
  RetailerHeader

  ul.retailer-orders__list
    RetailerOrder(
      v-for='order in stubOrders.slice().reverse()'
      :id='order.id'
      :timestamp='order.timestamp'
      :cartItems='order.cartItems'
      :key='order.timestamp'
    )

  RetailerFooter
</template>

<script setup>
import { reactive, ref } from 'vue'

import RetailerFooter from '@/components/retailer/RetailerFooter.vue'
import RetailerHeader from '@/components/retailer/RetailerHeader.vue'
import RetailerOrder from '@/components/retailer/RetailerOrder.vue'

const stubOrders = ref([
  {
    id: 676373071000,
    timestamp: 1676373071000,
    cartItems: [
      {
        id: 1,
        price: 450,
        quantity: 1,
      },
      {
        id: 4,
        price: 340,
        quantity: 1,
      },
    ],
  },
  {
    id: 676383871000,
    timestamp: 1676383871000,
    cartItems: [
      {
        id: 81,
        price: 410,
        quantity: 2,
      },
    ],
  },
  {
    id: 676384051000,
    timestamp: 1676384051000,
    cartItems: [
      {
        id: 16,
        price: 340,
        quantity: 3,
      },
    ],
  },
  {
    id: 676384054000,
    timestamp: 1676384054000,
    cartItems: [
      {
        id: 7,
        price: 350,
        quantity: 1,
      },
    ],
  },
  {
    id: 676416454000,
    timestamp: 1676416454000,
    cartItems: [
      {
        id: 79,
        price: 300,
        quantity: 11,
      },
    ],
  },
])
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
