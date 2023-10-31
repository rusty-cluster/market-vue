<template lang='pug'>
li.retailer-product-tile
  .retailer-product-tile__info
    .retailer-product-tile__name {{ props.product['name'] }}
    .retailer-product-tile__price ${{ props.product['price'] }}
    span.retailer-product-tile__in-stock In Stock
    .retailer-product-tile__description {{ props.product['description'] }}
    .retailer-product-tile__add-to-cart-button(
      @click="$emit('addOrIncreaseQuantity', productInfo)"
    ) Add to Cart
</template>

<script setup>
const props = defineProps({
  product: { type: Object, default: () => {} },
})

const emit = defineEmits(['addOrIncreaseQuantity'])

const productInfo = {
  id: props.product['id'],
  name: props.product['name'],
  price: props.product['price'],
  quantity: 1,
}
</script>

<style>
li.retailer-product-tile
  display: flex
  flex-direction: column
  margin: 0 0 2vh 0
  padding: 1vh
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  background: var(--faded-grey)

.retailer-product-tile__info
  display: flex
  flex-direction: column
  padding: 2vh
  border-radius: 24px
  background: var(--bleached-silk)
  box-shadow: 0 4px 20px var(--kamenozoki-grey)

.retailer-product-tile__name
  font-size: 20px

.retailer-product-tile__price
  font-size: 40px

.retailer-product-tile__in-stock
  font-size: 14px
  padding-bottom: 30px

.retailer-product-tile__description
  color: var(--cloudy-today)

.retailer-product-tile__add-to-cart-button
  font: inherit
  color: inherit
  background-color: transparent
  margin-top: 2vh
  padding: 16px
  align-self: flex-end
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  padding-bottom: 20px
  cursor: pointer
</style>
