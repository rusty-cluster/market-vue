<template lang="pug">
.retailer-cart
  RetailerCartHeader(
    :itemQuantity='20'
    :totalPrice='34500'
  )
  .retailer-cart-items
    RetailerCartItem(
      v-for='stubCartItem in stubCartItems'
      :name='stubCartItem.name'
      :quantity='stubCartItem.quantity'
      :price='stubCartItem.price'
      :key='stubCartItem.name'
    )
</template>

<script setup>
import RetailerCartHeader from '@/components/RetailerCartHeader.vue'
import RetailerCartItem from '@/components/RetailerCartItem.vue'

const stubCartItems = [
  {
    name: 'Nugget',
    quantity: 1,
    price: 5000
  },
  {
    name: 'Big Mushroom',
    quantity: 3,
    price: 2500
  },
  {
    name: 'Gold Leaf',
    quantity: 11,
    price: 500
  },
  {
    name: 'Pearl',
    quantity: 4,
    price: 1000
  },
  {
    name: 'Comet Shard',
    quantity: 1,
    price: 12500
  }
]
</script>

<style>
.retailer-cart
  height: 100vh

.retailer-cart-items
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  top: 50
</style>
