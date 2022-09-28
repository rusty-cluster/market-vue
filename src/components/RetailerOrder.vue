<template lang="pug">
.retailer-order
  span.retailer-order__date {{ (new Date(props.timestamp)).toDateString() }}
  span.retailer-order__name {{ props.name }}
  span.retailer-order__quantity {{ props.quantity }} wares
  span.retailer-order__total-price ${{ props.totalPrice }}
</template>

<script setup>
const props = defineProps({
  timestamp: { type: Number, default: 0 },
  name: { type: String, default: '' },
  quantity: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
})
</script>

<style>
.retailer-order
  font-size: 28px
  display: grid
  grid-template-areas:
    'date date'
    'name name'
    'quantity total-price'
  align-items: center
  justify-items: center
  min-width: 90%
  margin: 4px
  padding: 4px
  border-style: solid
  border-width: thin
  border-radius: 4px

span.retailer-order__date
  grid-area: date

span.retailer-order__name
  grid-area: name
  color: #0022ee

span.retailer-order__quantity
  grid-area: quantity

span.retailer-order__total-price
  grid-area: total-price
  color: #118c4f
</style>
