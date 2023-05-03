<template lang='pug'>
VendorHeader
.vendor-category-add
  h1.vendor-category-add__title Category

  form.vendor-category-add__form
    p.vendor-category-add__item
      label.vendor-category-add__label(for='id') ID
      input.vendor-category-add__input(
        v-model=' category.id'
        type='text'
        placeholder='id'
        name='id'
        required
      )
    p.vendor-category-add__item
      label.vendor-category-add__label(for='name') Name
      input.vendor-category-add__input(
        v-model='category.name'
        type='text'
        placeholder='name'
        name='name'
        required
      )
    .vendor-category-add__submit-button
      router-link.vendor-category-add__submit-link(:to="{ name: 'VendorCategories' }")
        .vendor-category-add__submit-title Save
</template>

<script setup>
import { reactive } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'

const category = reactive({
  id: null,
  name: null,
})
</script>

<style>
.vendor-category-add
  margin: 0
  padding: 0 2vh
  display: flex
  flex-direction: column

.vendor-category-add__form
  display: flex
  flex-direction: column
  box-sizing: border-box

.vendor-category-add__title
  display: flex
  justify-content: center
  color: var(--limone)
  margin: 10px

.vendor-category-add__item
  display: flex

.vendor-category-add__label
  display: flex
  justify-content: end
  align-items: center
  padding-right: 10px
  font-size: 18px
  width: 17vw

.vendor-category-add__input
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.vendor-category-add__submit-button
  display: flex
  justify-content: space-between
  align-items: center
  flex-direction: column
  margin: 20px auto

.vendor-category-add__submit-link
  display: flex
  padding: 10px
  border-radius: 10px
  border: 2px solid var(--limone)
  cursor: pointer
  background: var(--limone)
  padding: 10px 80px

.vendor-category-add__submit-title
  color: var(--lynx-white)
  display: flex
  justify-content: center
</style>
