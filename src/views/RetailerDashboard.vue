<template lang="pug">
.retailer-dashboard
  RetailerHeader
  .retailer-dashboard__main
  RetailerFooter
</template>

<script setup>
import RetailerHeader from '@/components/RetailerHeader.vue'
import RetailerFooter from '@/components/RetailerFooter.vue'
</script>

<style>
.retailer-dashboard
  display: grid
  grid-template-columns: 1fr min(100%, 800px) 1fr
  grid-template-rows: auto 1fr auto
  align-content: start
  min-height: 100vh

.retailer-dashboard > *
  grid-column: 2
</style>
