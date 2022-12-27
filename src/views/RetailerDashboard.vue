<template lang="pug">
.retailer-dashboard
  RetailerHeader(
    :cartItemsQuantity='20'
  )
  RetailerFooter
</template>

<script setup>
import RetailerHeader from '@/components/RetailerHeader.vue'
import RetailerFooter from '@/components/RetailerFooter.vue'
</script>

<style>
.retailer-dashboard
  height: 100vh
</style>
