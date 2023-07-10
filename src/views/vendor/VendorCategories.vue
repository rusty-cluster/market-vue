<template lang='pug'>
VendorHeader
.vendor-categories
  h1.vendor-categories__title Categories

  VendorCategoriesItem(
    v-for='category in categories'
    :category='category'
    :key='category.name'
  )

  .vendor-categories__add
      .vendor-categories__icon
        img.vendor-categories__icon-svg(src='@/assets/icons/plus.svg')
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
import VendorCategoriesItem from '@/components/vendor/VendorCategoriesItem.vue'

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

.vendor-categories__link
  width: 44vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  border: 2px solid var(--limone)
  cursor: pointer

.vendor-categories__name
  color: var(--nero)
  padding: 0 10px

.vendor-categories__icon
  display: flex
  align-items: center
  justify-content: center
  height: 30px
  width: 30px

.vendor-categories__icon-svg
  height: 16px
  width: 16px
</style>
