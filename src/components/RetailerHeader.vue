<template lang="pug">
.retailer-header
  .retailer-header__menu &#9868;
  .retailer-header__logo .mrkt
  .retailer-header__go-to-cart-button
</template>

<script setup>
const props = defineProps({
  cartItemsQuantity: { type: Number, default: 0 },
})
</script>

<style>
.retailer-header
  display: flex
  align-items: center
  justify-content: center
  position: sticky
  top: 0
  height: 50px
  background: var(--bleached-silk)

.retailer-header__menu
  font-size: 28px
  height: 44px
  width: 44px
  padding-left: 8px
  padding-right: 8px

.retailer-header__logo
  font-size: 28px
  text-align: start
  width: 90%

.retailer-header__go-to-cart-button
  display: flex
  align-items: center
  justify-content: center
  padding-left: 8px
  padding-right: 8px
  height: 24px
  width: 24px
  background: var(--bleached-silk)
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-shopping-cart' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.2' stroke='%23262626' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Ccircle cx='6' cy='19' r='2' /%3E%3Ccircle cx='17' cy='19' r='2' /%3E%3Cpath d='M17 17h-11v-14h-2' /%3E%3Cpath d='M6 5l14 1l-1 7h-13' /%3E%3C/svg%3E")
  background-position: center
  background-repeat: no-repeat
</style>
