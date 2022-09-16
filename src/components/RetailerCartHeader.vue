<template lang="pug">
.retailer-cart-header
  .retailer-cart-header__item-quantity-and-total-price
    span.retailer-cart-header__item-quantity {{ props.itemQuantity }}
    span items
    span.retailer-cart-header__total-price {{ props.totalPrice }} $ 
  .retailer-cart-header__order-button Order
</template>

<script setup>
const props = defineProps({
  itemQuantity: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
})
</script>

<style>
.retailer-cart-header
  font-size: 28px
  display: flex
  align-items: center
  justify-content: space-around
  position: sticky
  top: 0
  height: 50px
  background: #ccccff

.retailer-cart-header__item-quantity-and-total-price
  display: flex
  align-items: center
  justify-content: center
  height: 28px

span.retailer-cart-header__item-quantity
  padding-right: 4px
  color: #ffffcc

span.retailer-cart-header__total-price
  padding-left: 8px
  color: #ffffcc

.retailer-cart-header__order-button
  display: flex
  align-items: center
  justify-content: center
  height: 28px
  padding: 4px
  border-style: solid
  border-width: thin
  border-radius: 4px
</style>
