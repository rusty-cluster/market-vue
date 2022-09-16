<template lang="pug">
.retailer-cart-item
  span.retailer-cart-item__quantity {{ props.quantity }}
  span.retailer-cart-item__name  {{ props.name }}
  span.retailer-cart-item__total-price  {{ props.price * props.quantity }} $
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: '' },
  quantity: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
})
</script>

<style>
.retailer-cart-item
  font-size: 28px
  display: flex
  align-items: center
  justify-content: space-between
  height: 28px
  min-width: min(90%, 65ch)
  margin: 4px
  padding: 4px
  border-style: solid
  border-width: thin
  border-radius: 4px

span.retailer-cart-item__quantity
  padding-right: 4px
  color: #118c4f

span.retailer-cart-item__total-price
  padding-left: 8px
  color: #118c4f
</style>
