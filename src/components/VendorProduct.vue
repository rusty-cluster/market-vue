<template lang="pug">
.vendor-product
  .vendor-product__images
    img.vendor-product__image(:src='props.product.image')

  .vendor-product__vendor-product-info
    .vendor-product__name {{ props.product.name }}
    .vendor-product__price ${{ props.product.price }}
    .vendor-product__in-stock
      span.vendor-product__in-stock In Stock
    .vendor-product__description {{ props.product.description }}

    .vendor-product__add-to-cart Edit
</template>

<script setup>
const props = defineProps({
  product: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-product
  margin: 0 0 2vh 0
  padding: 1vh
  flex-direction: column
  display: flex
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  background: var(--faded-grey)

.vendor-product__images
  height: 100%
  margin: 2vh

.vendor-product__image
  max-width: 100%
  height: auto

.vendor-product__vendor-product-info
  display: flex
  border-radius: 24px
  flex-direction: column
  padding: 2vh
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

.vendor-product__name
  font-size: 20px

.vendor-product__price
  font-size: 40px

.vendor-product__in-stock
  font-size: 14px
  padding-bottom: 30px

.vendor-product__description
  color: var(--cloudy-today)

.vendor-product__add-to-cart
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
