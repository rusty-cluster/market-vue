<template lang='pug'>
VendorHeader
.vendor-add-category
  h1.vendor-add-category__title Category

  form.vendor-add-category__form
    p.vendor-add-category__form-item
      label.vendor-add-category__form-label(for='id') ID
      input.vendor-add-category__form-input(
        v-model=' category.id'
        type='text'
        placeholder='id'
        name='id'
        required
      )
    p.vendor-add-category__form-item
      label.vendor-add-category__form-label(for='name') Name
      input.vendor-add-category__form-input(
        v-model='category.name'
        type='text'
        placeholder='name'
        name='name'
        required
      )
    router-link.vendor-add-category__save-button(to='/vendor/categories')
      .vendor-add-category__save Save

VendorFooter
</template>

<script setup>
import { reactive } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'
import VendorFooter from '@/components/VendorFooter.vue'

const category = reactive({
  id: null,
  name: null,
})
</script>

<style>
.vendor-add-category
  margin: 0
  padding: 0 2vh
  display: flex
  flex-direction: column

.vendor-add-category__form
  display: flex
  flex-direction: column
  box-sizing: border-box

.vendor-add-category__form-item
  display: flex

.vendor-add-category__form-label
  display: flex
  justify-content: end
  align-items: center
  padding-right: 10px
  font-size: 18px
  width: 17vw

.vendor-add-category__form-input
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.vendor-add-category__save-button
  width: 24vw
  display: flex
  justify-content: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.vendor-add-category__save
  color: var(--nero)
</style>
