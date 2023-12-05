<template lang="pug">
.retailer-header
  router-link.retailer-header__menu-button(:to="{ name: 'RetailerDashboard' }")
    img.retailer-header__icon-svg(src='@/assets/icons/menu.svg')
  span.retailer-header__logo mrkt
  span.retailer-header__email {{ retailer }}
  span.retailer-header__cart-total-price ${{ cartTotalPrice }}
  span.retailer-header__cart-total-quantity  qty {{ cartTotalQuantity }}
  router-link.retailer-header__go-to-cart-button(:to="{ name: 'RetailerCart' }")
    img.retailer-header__icon-svg(src='@/assets/icons/shopping-cart.svg')
</template>

<script setup>
import { computed } from 'vue'
import { reactive, ref } from 'vue'
import retailerClient from '@/api/retailer-client'
import { useRetailerStore } from '@/stores/retailer'

const props = defineProps({
  cartItems: { type: Array, default: () => [] },
})

const retailer = useRetailerStore()

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
  align-items: center
  justify-content: center
  position: sticky
  top: 0
  height: 8vh
  margin: 0
  padding: 0 2vh
  background: var(--faded-grey)

.retailer-header__menu-button
  display: flex
  align-items: center
  justify-content: center
  flex-shrink: 0
  height: 34px
  width: 34px
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 8px
  cursor: pointer

span.retailer-header__logo
  flex-grow: 10
  font-size: 24px
  letter-spacing: -2px
  flex: 1 1 auto
  text-align: start
  padding-left: 1vh

span.retailer-header__cart-total-price
  font-size: 16px
  color: var(--nero)
  padding-right: 1vh

span.retailer-header__cart-total-quantity
  font-size: 16px
  color: var(--nero)
  padding-right: 1vh

.retailer-header__go-to-cart-button
  display: flex
  align-items: center
  justify-content: center
  flex-shrink: 0
  height: 34px
  width: 34px
  background: var(--bleached-silk)
  border-radius: 100%
  cursor: pointer

img.retailer-header__icon-svg
  height: 24px
  width: 24px
</style>
