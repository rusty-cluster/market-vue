<template lang='pug'>
VendorHeader
.vendor-products

  VendorProductsItem(
    v-for='product in products'
    :product='product'
    :key='product.name')
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
import VendorProductsItem from '@/components/vendor/VendorProductsItem.vue'

const products = ref([
  {
    brand: 'SAYGI',
    name: 'Shampoo Aean-Mollis',
    image: new URL('/src/assets/images/product-3/shampoo-1.jpg', import.meta.url).href,
    price: 340,
    inStock: true,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'Rose Water Vestibulum',
    image: new URL('/src/assets/images/product-4/rose-water-1.jpg', import.meta.url).href,
    price: 350,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'Cleanse Integer Lacus',
    image: new URL('/src/assets/images/product-2/cleanse-1.jpg', import.meta.url).href,
    price: 410,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'SPF Lotion',
    image: new URL('/src/assets/images/product-1/SPF-lotion-1.jpg', import.meta.url).href,
    price: 300,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'Rose Water Vestibulum Mini',
    image: new URL('/src/assets/images/product-5/rose-water-mini-1.jpg', import.meta.url).href,
    price: 320,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'Cream Pellentesque',
    image: new URL('/src/assets/images/product-6/day-cream-1.jpg', import.meta.url).href,
    price: 390,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'Tonic ',
    image: new URL('/src/assets/images/product-7/tonic-1.jpg', import.meta.url).href,
    price: 340,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'Cream Nulla finibus',
    image: new URL('/src/assets/images/product-8/seed-cream-1.jpg', import.meta.url).href,
    price: 400,
    cart: 0,
  },
  {
    brand: 'SAYGI',
    name: 'Mask Sed contetur',
    image: new URL('/src/assets/images/product-9/mask-1.jpg', import.meta.url).href,
    price: 410,
    cart: 0,
  },
])
</script>

<style>
.vendor-products
  padding: 0 8vw
  display: flex
  flex-direction: column
</style>
