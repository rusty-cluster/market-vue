<template lang="pug">
.vendor-product-tile
  .vendor-product-tile__images
    img.vendor-product-tile__image(:src='props.product.image')

  .vendor-product-tile__vendor-product-info
    .vendor-product-tile__name {{ props.product.name }}
    .vendor-product-tile__price ${{ props.product.price }}
    .vendor-product-tile__in-stock
      span.vendor-product-tile__in-stock In Stock
    .vendor-product-tile__description {{ props.product.description }}

    .vendor-product-tile__add-to-cart Add to Cart
</template>

<script setup>
const props = defineProps({
  product: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-product-tile
  margin: 0 0 2vh 0
  padding: 1vh
  flex-direction: column
  display: flex
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  background: var(--faded-grey)

.vendor-product-tile__images
  height: 100%
  margin: 2vh

.vendor-product-tile__image
  max-width: 100%
  height: auto

.vendor-product-tile__vendor-product-info
  display: flex
  border-radius: 24px
  flex-direction: column
  padding: 2vh
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

.vendor-product-tile__name
  font-size: 20px

.vendor-product-tile__price
  font-size: 40px

.vendor-product-tile__in-stock
  font-size: 14px
  padding-bottom: 30px

.vendor-product-tile__description
  color: var(--cloudy-today)

.vendor-product-tile__add-to-cart
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
