<template lang="pug">
.vendor-product-card-item
  .vendor-product-card-item__images
    img.vendor-product-card-item__image(:src='props.product.image')

  .vendor-product-card-item__product-card-info
    .vendor-product-card-item__name {{ props.product.name }}
    .vendor-product-card-item__price ${{ props.product.price }}
    .product-card-item__in-stock
      span.vendor-product-card-item__in-stock In Stock
    .vendor-product-card-item__description {{ props.product.description }}

    .vendor-product-card-item__add-to-cart Edit
</template>

<script setup>
const props = defineProps({
  product: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-product-card-item
  margin: 0 0 2vh 0
  padding: 1vh
  flex-direction: column
  display: flex
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  background: var(--faded-grey)

.vendor-product-card-item__images
  height: 100%
  margin: 2vh

.vendor-product-card-item__image
  max-width: 100%
  height: auto

.vendor-product-card-item__product-card-info
  display: flex
  border-radius: 24px
  flex-direction: column
  padding: 2vh
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

.vendor-product-card-item__name
  font-size: 20px

.vendor-product-card-item__price
  font-size: 40px

.vendor-product-card-item__in-stock
  font-size: 14px
  padding-bottom: 30px

.vendor-product-card-item__description
  color: var(--cloudy-today)

.vendor-product-card-item__add-to-cart
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
