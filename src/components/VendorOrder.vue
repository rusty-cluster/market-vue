<template lang="pug">
.vendor-order
  .vendor-order__id {{ props.order.id }}
  .vendor-order__date {{ props.order.date }}
  .vendor-order__customer {{ props.order.customer }}
  .vendor-order__status {{ props.order.status }}

  .vendor-order__total ${{ props.order.total }}
</template>

<script setup>
const props = defineProps({
  order: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-order
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

.vendor-order__order
  grid-area: order
  place-self: center

.vendor-order__id
  color: var(--holy-crow)

.vendor-order__date
  font-size: 14px
  color: var(--cloudy-today)

.vendor-order__customer
  grid-area: customer
  justify-self: center
  color: var(--holy-crow)

.vendor-order__status
  grid-area: status
  justify-self: end
  color: var(--holy-crow)

.vendor-order__total
  grid-area: total
  justify-self: end
</style>
