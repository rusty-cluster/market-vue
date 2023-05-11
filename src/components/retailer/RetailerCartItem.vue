<template lang="pug">
li.retailer-cart-item
  span.retailer-cart-item__name  {{ props.name }}
  span.retailer-cart-item__total-price  ${{ props.price * props.quantity }}
  span.retailer-cart-item__quantity  qty {{ props.quantity }}
</template>

<script setup>
const props = defineProps({
  id: { type: Number, default: 0 },
  name: { type: String, default: '' },
  quantity: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
})
</script>

<style>
li.retailer-cart-item
  font-size: 20px
  display: flex
  align-items: center
  justify-content: center
  min-height: 4vh
  margin: 0 0 2vh
  padding: 1vh
  border-radius: 24px
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

span.retailer-cart-item__name
  flex-grow: 10
  color: var(--cloudy-today)
  padding: 0 1vh

span.retailer-cart-item__quantity
  color: var(--nero)
  padding-right: 1vh

span.retailer-cart-item__total-price
  color: var(--nero)
  padding-right: 1vh
</style>
