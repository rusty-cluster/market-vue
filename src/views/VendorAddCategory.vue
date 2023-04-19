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
    .vendor-add-category__submit-button
      router-link.vendor-add-category__submit-link(:to="{ name: 'VendorCategories' }")
        .vendor-add-category__submit-title Save
</template>

<script setup>
import { reactive } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'

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

.vendor-add-category__title
  display: flex
  justify-content: center
  color: var(--limone)
  margin: 10px

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

.vendor-add-category__submit-button
  display: flex
  justify-content: space-between
  align-items: center
  flex-direction: column
  margin: 20px auto

.vendor-add-category__submit-link
  display: flex
  padding: 10px
  border-radius: 10px
  border: 2px solid var(--limone)
  cursor: pointer
  background: var(--limone)
  padding: 10px 80px

.vendor-add-category__submit-title
  color: var(--lynx-white)
  display: flex
  justify-content: center
</style>
