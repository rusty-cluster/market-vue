<template lang='pug'>
VendorHeader
.vendor-categories
  h1.vendor-categories__title Categories

  VendorCategory(
    v-for='category in categories'
    :category='category'
    :key='categories.name'
  )

  .vendor-categories__add
    router-link.vendor-categories__add-link(:to="{ name: 'VendorAddCategory' }")
      .vendor-categories__add-name Add Category
      .vendor-categories__add-icon
        img.vendor-categories__add-icon-svg(src='@/assets/icons/plus.svg')

VendorFooter
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'
import VendorCategory from '@/components/VendorCategory.vue'
import VendorFooter from '@/components/VendorFooter.vue'

const categories = ref([
  {
    id: '0013',
    name: 'Bag',
  },
  {
    id: '0020',
    name: 'T-shirt',
  },
  {
    id: '0023',
    name: 'Shoes',
  },
  {
    id: '0024',
    name: 'Jacket',
  },
])
</script>

<style>
.vendor-categories
  margin: 0
  padding: 0 2vh
  display: flex
  flex-direction: column

.vendor-categories__title
  display: flex
  justify-content: center
  color: var(--limone)
  margin: 10px

.vendor-categories__add
  display: flex
  justify-content: space-between
  align-items: center

.vendor-categories__add-link
  width: 44vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  border: 2px solid var(--limone)
  cursor: pointer

.vendor-categories__add-name
  color: var(--nero)
  padding: 0 10px

.vendor-categories__add-icon
  display: flex
  align-items: center
  justify-content: center
  height: 30px
  width: 30px

.vendor-categories__add-icon-svg
  height: 16px
  width: 16px
</style>
