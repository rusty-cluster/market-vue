<template lang="pug">
.retailer-header
  .retailer-header__navbar
    .retailer-header__menu-button
    span.retailer-header__logo .mrkt
    span.retailer-header__cart-total-price ${{ cartTotalPrice }}
    span.retailer-header__cart-total-quantity {{ cartTotalQuantity }}
    .retailer-header__go-to-cart-button
  RetailerProductSearchField(
    v-if='props.isSearchFieldRendered === true'
  )
</template>

<script setup>
import { computed } from 'vue'

import RetailerProductSearchField from '@/components/RetailerProductSearchField.vue'

const props = defineProps({
  cartItems: { type: Array, default: () => [] },
  isSearchFieldRendered: { type: Boolean, default: false },
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
.retailer-header
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  position: sticky
  top: 0
  background: var(--bleached-silk)

.retailer-header__navbar
  display: flex
  align-items: center
  justify-content: center
  height: 50px
  width: 90%
  margin: 0 2vh
  padding: 1vh

.retailer-header__menu-button
  display: flex
  align-items: center
  justify-content: center
  flex-shrink: 0
  height: 44px
  width: 24px
  padding-left: 8px
  padding-right: 8px
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 14px
  background: var(--bleached-silk)
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-menu' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.2' stroke='%23262626' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cline x1='4' y1='8' x2='20' y2='8' /%3E%3Cline x1='4' y1='16' x2='20' y2='16' /%3E%3C/svg%3E")
  background-position: center
  background-repeat: no-repeat

span.retailer-header__logo
  font-size: 24px
  letter-spacing: -2px
  flex: 1 1 auto
  text-align: start
  width: 90%
  padding-left: 8px
  padding-right: 8px

span.retailer-header__cart-total-price
  font-size: 16px
  color: var(--nero)
  padding-left: 8px
  padding-right: 8px

span.retailer-header__cart-total-quantity
  font-size: 16px
  color: var(--nero)

.retailer-header__go-to-cart-button
  display: flex
  align-items: center
  justify-content: center
  flex-shrink: 0
  height: 44px
  width: 24px
  padding-left: 8px
  padding-right: 8px
  background: var(--bleached-silk)
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-shopping-cart' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.2' stroke='%23262626' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Ccircle cx='6' cy='19' r='2' /%3E%3Ccircle cx='17' cy='19' r='2' /%3E%3Cpath d='M17 17h-11v-14h-2' /%3E%3Cpath d='M6 5l14 1l-1 7h-13' /%3E%3C/svg%3E")
  background-position: center
  background-repeat: no-repeat
</style>
