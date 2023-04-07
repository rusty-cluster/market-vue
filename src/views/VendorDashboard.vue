<template lang="pug">
VendorHeader
.vendor-dashboard
  .vendor-dashboard__nav
    router-link.vendor-dashboard__nav-link(:to="{ name: 'VendorOrders' }")
        .vendor-dashboard__nav-title Orders
        .vendor-dashboard__nav-icon
          img.vendor-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__nav-link(:to="{ name: 'VendorProducts' }")
        .vendor-dashboard__nav-title Products
        .vendor-dashboard__nav-icon
          img.vendor-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__nav-link(:to="{ name: 'VendorProductCard', params: { slug: 'pokemon-slowpoke' }}")
      .vendor-dashboard__nav-title Product card
      .vendor-dashboard__nav-icon
        img.vendor-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__nav-link(:to="{ name: 'VendorAddProduct' }")
        .vendor-dashboard__nav-title Add product
        .vendor-dashboard__nav-icon
          img.vendor-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')

  .vendor-dashboard__nav
    router-link.vendor-dashboard__nav-link(:to="{ name: 'VendorOrders' }")
        .vendor-dashboard__nav-title Add category
        .vendor-dashboard__nav-icon
          img.vendor-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')


VendorFooter
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'
import VendorFooter from '@/components/VendorFooter.vue'
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

.vendor-dashboard__nav-link
  font-size: 20px
  width: 60vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.vendor-dashboard__nav-title
  padding-left: 10px
  color: var(--nero)

.vendor-dashboard__nav-icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

.vendor-dashboard__nav-icon-svg
  height: 14px
  width: 14px
</style>
