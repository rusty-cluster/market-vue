<template lang='pug'>
VendorHeader
.vendor-orders
  h1.vendor-orders__title Orders

  VendorOrdersItem(
    v-for='order in orders'
    :order='order'
    :key='orders.id')
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
import VendorOrdersItem from '@/components/vendor/VendorOrdersItem.vue'

const orders = ref([
  {
    id: 'ABC 11427',
    date: '10.04.2024',
    customer: 'Tom Ford inc',
    status: 'completed',
    total: 300,
  },
  {
    id: 'ABC 11427',
    date: '10.04.2024',
    customer: 'Muji Leas',
    status: 'completed',
    total: 810,
  },
  {
    id: 'ABC 11427',
    date: '10.04.2024',
    customer: 'Molemoo',
    status: 'completed',
    total: 450,
  },
  {
    id: 'ABC 11427',
    date: '10.04.2024',
    customer: 'Lis Coil',
    status: 'completed',
    total: 680,
  },
])

</script>

<style>
.vendor-orders
  margin: 0
  padding: 0 2vh
  display: flex
  flex-direction: column

.vendor-orders__title
  margin: 0 0 2vh
</style>
