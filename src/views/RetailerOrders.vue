<template lang="pug">
.retailer-orders
  RetailerOrder(
    v-for='stubOrder in stubOrders.slice().reverse()'
    :timestamp='stubOrder.timestamp'
    :name='stubOrder.name'
    :quantity='stubOrder.quantity'
    :totalPrice='stubOrder.totalPrice'
    :key='stubOrder.timestamp'
  )
</template>

<script setup>
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
  height: 100vh
</style>
