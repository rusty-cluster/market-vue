<template lang="pug">
.vendor-products-item
  .vendor-products-item__images
    img.vendor-products-item__image(:src='props.product.image')

  .vendor-products-item__info
    .vendor-products-item__brand {{ props.product.brand }}
    .vendor-products-item__name {{ props.product.name }}
    .vendor-products-item__price ${{ props.product.price }}
    .vendor-products-item__in-stock
      span.products-item__in-stock In Stock

    .vendor-products-item__edit Edit
</template>

<script setup>
const props = defineProps({
  product: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-products-item
  margin: 0 0 2vh 0
  flex-direction: column
  display: flex

.vendor-products-item__image
  max-width: 100%
  height: auto

.vendor-products-item__info
  margin: 20px 0 20px
  display: flex
  flex-direction: column
  background: var(--white)

.vendor-products-item__brand
  font-size: 18px
  color: var(--cloudy-today)

.vendor-products-item__name
  font-size: 30px

.vendor-products-item__price
  font-size: 30px

.vendor-products-item__in-stock
  font-size: 14px
  color: var(--cloudy-today)

.vendor-products-item__description
  color: var(--cloudy-today)

.vendor-products-item__edit
  padding: 16px
  margin: 20px
  width: 80vw
  display: flex
  justify-content: center
  align-self: center
  cursor: pointer
  border: 1px solid var(--faded-grey)
  border-radius: 10px
  background-color: transparent
</style>
