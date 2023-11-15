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
    router-link.vendor-dashboard__link(:to="{ name: 'VendorProductCard', params: { slug: 'sunscreen-lotion' }}")
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
  padding: 20px 8vw
  display: flex
  flex-direction: column

.vendor-dashboard__nav
  margin: 16px auto
  width: 100%
  display: flex
  justify-content: space-between
  box-sizing: border-box
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 10px

.vendor-dashboard__link
  width: 100%
  font-size: 20px
  display: flex
  justify-content: space-between
  padding: 20px
  cursor: pointer

.vendor-dashboard__title
  color: var(--nero)

.vendor-dashboard__icon
  display: flex
  align-items: center
  justify-content: center

.vendor-dashboard__icon-svg
  width: 14px
</style>
