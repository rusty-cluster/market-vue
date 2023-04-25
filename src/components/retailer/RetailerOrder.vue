<template lang="pug">
li.retailer-order
  span.retailer-order__date {{ (new Date(props.timestamp)).toDateString() }}
  span.retailer-order__id {{ props.id }}
  .retailer-order__totals
    span.retailer-order__total-price ${{ cartTotalPrice }}
    span.retailer-order__total-quantity  qty {{ cartTotalQuantity }}
    img.retailer-order__icon-svg(src='@/assets/icons/shopping-cart-filled.svg')
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: { type: Number, default: 0 },
  timestamp: { type: Number, default: 0 },
  cartItems: { type: Array, default: () => [] },
})

const cartTotalPrice = computed(() => {
  return props.cartItems.reduce((acc, currentCartItem) => {
    return acc + currentCartItem['price'] * currentCartItem['quantity']
  }, 0)
})

const cartTotalQuantity = computed(() => {
  return props.cartItems.reduce((acc, currentCartItem) => {
    return acc + currentCartItem['quantity']
  }, 0)
})
</script>

<style>
li.retailer-order
  font-size: 20px
  display: grid
  grid-template-areas:
    'date date'
    'id totals'
  align-items: center
  justify-items: center
  min-height: 4vh
  margin: 0 0 2vh 0
  padding: 1vh
  border-radius: 24px
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

span.retailer-order__date
  grid-area: date
  margin: 0 0 2vh 0

span.retailer-order__id
  grid-area: id
  color: var(--cloudy-today)

.retailer-order__totals
  grid-area: totals
  display: flex
  align-items: center
  justify-content: center

span.retailer-order__total-quantity
  padding-right: 1vh

span.retailer-order__total-price
  padding-right: 1vh

img.retailer-order__icon-svg
  height: 20px
  width: 20px

@media (min-width: 810px)
  li.retailer-order
    grid-template-areas:
      'date id totals'

  span.retailer-order__date
    margin: 0
</style>
