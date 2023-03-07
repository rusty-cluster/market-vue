<template lang='pug'>
.vendor-add-product
  VendorHeader

  form.vendor-add-product__form
    p.vendor-add-product__form-item
      label.vendor-add-product__form-label(for='id') ID
      input.vendor-add-product__form-input(
        v-model='product.id'
        type='text'
        placeholder='id'
        name='id'
        required
      )

    p.vendor-add-product__form-item
      label.vendor-add-product__form-label(for='select') Category
      select.vendor-add-product__form-select(v-model='product.category_id' name='select' required)
        option(v-for='category in categories') {{ category.text }}

    p.vendor-add-product__form-item
      label.vendor-add-product__form-label(for='name') Name
      input.vendor-add-product__form-input(
        v-model='product.name'
        type='text'
        placeholder='name'
        name='name'
        required
      )

    p.vendor-add-product__form-item
      label.vendor-add-product__form-label(for='price') Price
      input.vendor-add-product__form-input(
        v-model.number='product.price'
        type='number'
        name='price'
        required
      )

    p.vendor-add-product__form-item
      label.vendor-add-product__form-label(for='description') Description
      textarea.vendor-add-product__form-input(
        v-model='product.description'
        type='text'
        placeholder='description'
        name='description'
        required
      )

    p.vendor-add-product__form-item
      label.vendor-add-product__form-label(for='inserted_at')
      input.vendor-add-product__form-input(readonly='true' :value='product.inserted_at' name='inserted_at')

    p.vendor-add-product__form-item
      label.vendor-add-product__form-label(for='updated_at')
      input.vendor-add-product__form-input(readonly='true' :value='product.updated_at' name='updated_at')

    router-link.vendor-add-product__save(to='/vendor/products/pokemon-slowpoke')
      .vendor-add-product__save-button Save
      .vendor-add-product__save-icon
        img.vendor-add-product__save-icon-svg(src='@/assets/icons/right-arrow.svg')

  VendorFooter
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'
import VendorFooter from '@/components/VendorFooter.vue'

const name = ref('')

const product = reactive({
  id: null,
  category_id: null,
  name: null,
  price: null,
  description: null,
  inserted_at: '',
  updated_at: ''
})

const categories = reactive([
  { id: 1, text: 'Category-1' },
  { id: 2, text: 'Category-2' },
  { id: 3, text: 'Category-3' }
])
</script>

<style>
.vendor-add-product
  display: flex
  flex-direction: column
  min-width: 375px

.vendor-add-product__form
  display: flex
  flex-direction: column
  box-sizing: border-box
  padding: 0 2vh

.vendor-add-product__form-item
  display: flex
  box-sizing: border-box

.vendor-add-product__form-label
  display: flex
  justify-content: end
  align-items: center
  padding-right: 10px
  font-size: 18px
  width: 26vw

.vendor-add-product__form-select
  display: flex
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-size: 16px
  padding: 10px

.vendor-add-product__form-input
  display: flex
  width: 56vw
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.vendor-add-product__save
  width: 60vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.vendor-add-product__save-button
  padding-left: 10px
  color: var(--nero)

.vendor-add-product__save-icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

.vendor-add-product__save-icon-svg
  height: 14px
  width: 14px
</style>
