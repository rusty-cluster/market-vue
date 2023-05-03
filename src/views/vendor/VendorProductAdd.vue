<template lang='pug'>
VendorHeader
form.product-add
  p.vendor-product-add__item
    label.vendor-product-add__label(for='id') ID
    input.vendor-product-add__input(
      v-model='product.id'
      type='text'
      placeholder='id'
      name='id'
      required
    )

  p.vendor-product-add__item
    label.vendor-product-add__label(for='select') Category
    select.vendor-product-add__select(v-model='product.category_id' name='select' required)
      option(v-for='category in categories') {{ category.text }}

  p.vendor-product-add__item
    label.vendor-product-add__label(for='name') Name
    input.vendor-product-add__input(
      v-model='product.name'
      type='text'
      placeholder='name'
      name='name'
      required
    )

  p.vendor-product-add__item
    label.vendor-product-add__label(for='price') Price
    input.vendor-product-add__input(
      v-model.number='product.price'
      type='number'
      name='price'
      required
    )

  p.vendor-product-add__item
    label.vendor-product-add__label(for='description') Description
    textarea.vendor-product-add__input(
      v-model='product.description'
      type='text'
      placeholder='description'
      name='description'
      required
    )

  p.vendor-product-add__item
    label.vendor-product-add__label(for='inserted_at')
    input.vendor-product-add__input(readonly='true' :value='product.inserted_at' name='inserted_at')

  p.vendor-product-add__item
    label.vendor-product-add__label(for='updated_at')
    input.vendor-product-add__input(readonly='true' :value='product.updated_at' name='updated_at')

  router-link.vendor-product-add__submit(:to="{ name: 'VendorProductCard', params: { slug: 'pokemon-slowpoke' }}")
    span.vendor-product-add__submit-title Save
</template>

<script setup>
import { ref, reactive } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'

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
.vendor-product-add
  display: flex
  flex-direction: column
  box-sizing: border-box
  padding: 0 2vh

.vendor-product-add__item
  display: flex
  box-sizing: border-box

.vendor-product-add__label
  display: flex
  justify-content: end
  align-items: center
  padding-right: 10px
  font-size: 18px
  width: 26vw

.vendor-product-add__select
  display: flex
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-size: 16px
  padding: 10px

.vendor-product-add__input
  display: flex
  width: 56vw
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.vendor-product-add__submit
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px 80px
  margin: 20px auto
  cursor: pointer
  background: var(--limone)

.vendor-product-add__submit-title
  color: var(--lynx-white)
  display: flex
  justify-content: center
</style>
