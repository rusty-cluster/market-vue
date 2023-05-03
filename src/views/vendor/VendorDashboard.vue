<template lang="pug">
VendorHeader
.vendor-dashboard
  .vendor-dashboard__nav
    router-link.vendor-dashboard__link(:to="{ name: 'VendorOrders' }")
      .vendor-dashboard__title Orders
      .vendor-dashboard__icon
        img.vendor-dashboard__icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__link(:to="{ name: 'VendorProducts' }")
      .vendor-dashboard__title Products
      .vendor-dashboard__icon
        img.vendor-dashboard__icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__link(:to="{ name: 'VendorProductCard', params: { slug: 'pokemon-slowpoke' }}")
      .vendor-dashboard__title Product card
      .vendor-dashboard__icon
        img.vendor-dashboard__icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__link(:to="{ name: 'VendorProductAdd' }")
      .vendor-dashboard__title Add product
      .vendor-dashboard__icon
        img.vendor-dashboard__icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__link(:to="{ name: 'VendorCategories' }")
      .vendor-dashboard__title Category
      .vendor-dashboard__icon
        img.vendor-dashboard__icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__link(:to="{ name: 'VendorCategoryAdd' }")
      .vendor-dashboard__title Add category
      .vendor-dashboard__icon
        img.vendor-dashboard__icon-svg(src='@/assets/icons/right-arrow.svg')
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
</script>

<style>
.vendor-dashboard
  margin: 0
  padding: 20px 2vh
  display: flex
  flex-direction: column

.vendor-dashboard__nav
  display: flex
  align-items: center
  justify-content: center
  box-sizing: border-box
  border: 1px solid var(--lynx-white)
  border-radius: 10px
  padding: 10px
  margin: 12px auto

.vendor-dashboard__link
  font-size: 20px
  width: 60vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.vendor-dashboard__title
  padding-left: 10px
  color: var(--nero)

.vendor-dashboard__icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

.vendor-dashboard__icon-svg
  height: 14px
  width: 14px
</style>
