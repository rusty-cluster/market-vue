<template lang="pug">
.vendor-orders-item
  .vendor-orders-item__id {{ props.order.id }}
  .vendor-orders-item__date {{ props.order.date }}
  .vendor-orders-item__customer {{ props.order.customer }}
  .vendor-orders-item__status {{ props.order.status }}

  .vendor-orders-item__total ${{ props.order.total }}
</template>

<script setup>
const props = defineProps({
  order: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-orders-item
  display: grid
  grid-template-areas:
   "order customer status"
   "order .        total"
  grid-template-columns: 1.5fr repeat(2, 2fr)
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 10px
  background: var(--lynx-white)
  padding: 1vh 2vh
  margin: 1vh 0

.vendor-orders-item__order
  grid-area: order
  place-self: center

.vendor-orders-item__id
  color: var(--holy-crow)

.vendor-orders-item__date
  font-size: 14px
  color: var(--cloudy-today)

.vendor-orders-item__customer
  grid-area: customer
  justify-self: center
  color: var(--holy-crow)

.vendor-orders-item__status
  grid-area: status
  justify-self: end
  color: var(--holy-crow)

.vendor-orders-item__total
  grid-area: total
  justify-self: end
</style>
