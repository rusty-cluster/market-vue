<template lang="pug">
.vendor-products-item
  .vendor-products-item__images
    img.vendor-products-item__image(:src='props.product.image')

  .vendor-products-item__info
    .vendor-products-item__name {{ props.product.name }}
    .vendor-products-item__price ${{ props.product.price }}
    .vendor-products-item__in-stock
      span.products-item__in-stock In Stock
    .vendor-products-item__description {{ props.product.description }}

    .vendor-products-item__add-to-cart Edit
</template>

<script setup>
const props = defineProps({
  product: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-products-item
  margin: 0 0 2vh 0
  padding: 1vh
  flex-direction: column
  display: flex
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  background: var(--faded-grey)

.vendor-products-item__images
  height: 100%
  margin: 2vh

.vendor-products-item__image
  max-width: 100%
  height: auto

.vendor-products-item__info
  display: flex
  border-radius: 24px
  flex-direction: column
  padding: 2vh
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

.vendor-products-item__name
  font-size: 20px

.vendor-products-item__price
  font-size: 40px

.vendor-products-item__in-stock
  font-size: 14px
  padding-bottom: 30px

.vendor-products-item__description
  color: var(--cloudy-today)

.vendor-products-item__add-to-cart
  font: inherit
  color: inherit
  background-color: transparent
  padding: 16px
  align-self: flex-end
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  padding-bottom: 20px
  cursor: pointer
</style>
