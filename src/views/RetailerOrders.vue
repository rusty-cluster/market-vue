<template lang="pug">
.retailer-orders
  RetailerHeader(
    :cartItemsQuantity='20'
  )
  RetailerOrder(
    v-for='stubOrder in stubOrders.slice().reverse()'
    :timestamp='stubOrder.timestamp'
    :name='stubOrder.name'
    :quantity='stubOrder.quantity'
    :totalPrice='stubOrder.totalPrice'
    :key='stubOrder.timestamp'
  )
  RetailerFooter
</template>

<script setup>
import RetailerHeader from '@/components/RetailerHeader.vue'
import RetailerFooter from '@/components/RetailerFooter.vue'
import RetailerOrder from '@/components/RetailerOrder.vue'

const stubOrders = [
  {
    timestamp: 1664369496595,
    name: '92852402-0009',
    quantity: 1,
    totalPrice: 5000
  },
  {
    timestamp: 1664369518373,
    name: '92852402-0010',
    quantity: 3,
    totalPrice: 2500
  },
  {
    timestamp: 1664369529220,
    name: '92852402-0011',
    quantity: 1,
    totalPrice: 12500
  }
]
</script>

<style>
.retailer-orders
  display: grid
  grid-template-columns: 1fr min(100%, 800px) 1fr
  align-content: start
  height: 100vh

.retailer-orders > *
  grid-column: 2
  max-height: 150px
</style>
