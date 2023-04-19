<template lang='pug'>
VendorHeader
.vendor-orders
  h1.vendor-orders__title Order list

  VendorOrder(
    v-for='order in orders'
    :order='order'
    :key='orders.id')

VendorFooter
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'
import VendorOrder from '@/components/VendorOrder.vue'
import VendorFooter from '@/components/VendorFooter.vue'

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
