<template lang='pug'>
.add-product
  VendorHeader

  form.add-product__form
    p.add-product__form-item
      label.add-product__form-label(for='id') ID
      input.add-product__form-input(
        v-model='product.id'
        type='text'
        placeholder='id'
        name='id'
        required
      )

    p.add-product__form-item
      label.add-product__form-label(for='select') Category:
      select.add-product__form-select(v-model='product.category_id' name='select' required)
        option(v-for='category in categories') {{ category.text }}

    p.add-product__form-item
      label.add-product__form-label(for='name') Name
      input.add-product__form-input(
        v-model='product.name'
        type='text'
        placeholder='name'
        name='name'
        required
      )

    p.add-product__form-item
      label.add-product__form-label(for='price') Price
      input.add-product__form-input(
        v-model.number='product.price'
        type='number'
        name='price'
        required
      )

    p.add-product__form-item
      label.add-product__form-label(for='description') Description
      textarea.add-product__form-input(
        v-model='product.description'
        type='text'
        placeholder='description'
        name='description'
        required
      )

    p.add-product__form-item
      label.add-product__form-label(for='inserted_at')
      input.add-product__form-input(readonly='true' :value='product.inserted_at' name='inserted_at')

    p.add-product__form-item
      label.add-product__form-label(for='updated_at')
      input.add-product__form-input(readonly='true' :value='product.updated_at' name='updated_at')

    .add-product__button-save Save

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
.add-product
  display: flex
  flex-direction: column
  min-width: 375px

.add-product__form
  display: flex
  flex-direction: column
  box-sizing: border-box
  padding: 0 20px

.add-product__form-item
  display: flex
  box-sizing: border-box

.add-product__form-label
  display: flex
  justify-content: end
  align-items: center
  padding-right: 10px
  font-size: 18px
  width: 26vw

.add-product__form-select
  display: flex
  width: 60vw
  color: var(--holy-crow)
  border: 1px solid var(--cloudy-today)
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.add-product__form-input
  display: flex
  width: 56vw
  color: var(--holy-crow)
  border: 1px solid var(--cloudy-today)
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.add-product__button-save
  display: flex
  justify-content: center
  cursor: not-allowed
  color: var(--nero)
  background: var(--lynx-white)
  border: 1px solid var(--cloudy-today)
  border-radius: 6px
  font-size: 22px
  padding: 10px
  margin-top: 40px
</style>
