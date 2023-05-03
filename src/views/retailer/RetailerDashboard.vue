<template lang="pug">
RetailerHeader
.retailer-dashboard
  .retailer-dashboard__nav
    router-link.retailer-dashboard__nav-link(:to="{ name: 'RetailerProductSearch' }") Search product
      .retailer-dashboard__nav-icon
        img.retailer-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')
    
  .retailer-dashboard__nav
    router-link.retailer-dashboard__nav-link(:to="{ name: 'RetailerCart' }") Go to cart
      .retailer-dashboard__nav-icon
        img.retailer-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')
    
  .retailer-dashboard__nav
    router-link.retailer-dashboard__nav-link(:to="{ name: 'RetailerOrders' }") Order history
      .retailer-dashboard__nav-icon
        img.retailer-dashboard__nav-icon-svg(src='@/assets/icons/right-arrow.svg')
    
RetailerFooter
</template>

<script setup>
import RetailerFooter from '@/components/retailer/RetailerFooter.vue'
import RetailerHeader from '@/components/retailer/RetailerHeader.vue'
</script>

<style>
.retailer-dashboard
  display: flex
  flex-direction: column
  align-items: center
  min-height: 63vh
  margin: 0
  padding: 20px 2vh

.retailer-dashboard__nav
  display: flex
  align-items: center
  justify-content: center
  width: 60vw
  box-sizing: border-box
  border: 1px solid var(--lynx-white)
  border-radius: 10px
  margin: 12px auto
  padding: 10px

.retailer-dashboard__nav-link
  font-size: 20px
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  padding: 1.5vh
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)
  color: var(--nero)

.retailer-dashboard__nav-icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

img.retailer-dashboard__nav-icon-svg
  height: 14px
  width: 14px

@media (min-width: 810px)
  .retailer-dashboard__nav
    width: 20vw
</style>
