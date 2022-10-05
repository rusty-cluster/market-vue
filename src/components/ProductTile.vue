<template lang="pug">
.product-tile
  .product-tile__images
    img.product-tile__image(:src='props.product.image')

  .product-tile__product-info
    .product-tile__name {{ props.product.name }}
    .product-tile__price ${{ props.product.price }}
    .product-tile__in-stock
      span.product-tile__in-stock In Stock
    .product-tile__description {{ props.product.description }}

    button.product-tile__add-to-cart Add to Cart
</template>

<script setup>

const props = defineProps({
  product: { type: Object, default: () => {} },
})

</script>

<style>
.product-tile
  margin: 0 0 2vh 0
  padding: 1vh
  flex-direction: column
  display: flex
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  background: var(--faded-grey)

.product-tile__images
  height: 100%
  margin: 2vh

.product-tile__image
  max-width: 100%
  height: auto

.product-tile__product-info
  display: flex
  border-radius: 24px
  flex-direction: column
  padding: 2vh
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

.product-tile__name
  font-size: 20px

.product-tile__price
  font-size: 40px

.product-tile__in-stock
  font-size: 14px
  padding-bottom: 30px

.product-tile__description
  color: var(--cloudy-today)

.product-tile__add-to-cart
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
