<template lang="pug">
.retailer-cart
  RetailerHeader(
    :cartItemsQuantity='20'
  )
  .retailer-cart-items
    RetailerCartItem(
      v-for='stubCartItem in stubCartItems'
      :name='stubCartItem.name'
      :quantity='stubCartItem.quantity'
      :price='stubCartItem.price'
      :key='stubCartItem.name'
    )
  RetailerFooter
</template>

<script setup>
import RetailerHeader from '@/components/RetailerHeader.vue'
import RetailerFooter from '@/components/RetailerFooter.vue'
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
</style>
