<template lang='pug'>
.product-card
  .product-card__cart Cart({{ product.cart }})

  h1.product-card__name {{ product.name }}
  .product-card__images
    img.product-card__image(:src='product.image')

  .product-card__in-stock
    span.product-card__in-stock_true(v-if='product.inStock') In Stock
    span.product-card__in-stock_false(v-else='product.inStock') Out of Stock
  .product-card__price ${{  product.price  }}
  .product-card__options
    .product-card__option(
      v-for='option in product.options'
      :key='option.id'
      @mouseover='updateImage(option.image)'
      )
        img.product-card__option-icon(:src='option.image')
  p.product-card__description {{  product.description  }}

  .product-card__quantity
    button.product-card__decrease(@click='decreaseQuantity') -
    .product-card__counter {{ product.quantity }}
    button.product-card__increase(@click='increaseQuantity') +

  button.product-card__add-to-cart(
    @click='addToCart'
    ) Add to Cart

</template>

<script setup>
import { reactive, ref } from 'vue'

const product = reactive({
  name: null,
  image: null,
  price: null,
  description: null,
  inStock: null,
  cart: null,
})

function updateImage(imageURL) {
  product.image = imageURL
}

function increaseQuantity(event) {
  product.quantity += 1
}

function decreaseQuantity(event) {
  if (product.quantity === 0) return

  return product.quantity -= 1
}

function addToCart(event) {
  product.cart += product.quantity
}

Object.assign(product, {
  name: 'Slowpoke',
  image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href,
  price: 300,
  description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I. It evolves into Slowbro starting at level 37 or Slowking when traded while holding a King\'s Rock.',
  inStock: true,
  options: [
    { id: 3333, option: 'Slowpoke', image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href },
    { id: 2222, option: 'Slowbro', image: new URL('../assets/images/pokemon-slowbro.png', import.meta.url).href },
  ],
  quantity: 1,
  cart: 0,
})
</script>

<style>
.product-card
  height: 100%
  display: grid
  grid-template-columns: minmax(0, 0.2fr) 1fr 1fr 1fr minmax(0, 0.2fr)
  grid-template-areas:
    '  .   name        name        cart          .  '
    '  .   image       image       image         .  '
    '  .   stock       stock       stock         .  '
    '  .   price       price       price         .  '
    '  .   options     options     options       .  '
    '  .   description description description   .  '
    '  .   quantity    quantity    quantity      .  '
    '  .   add         add         add           .  '

.product-card__name
  grid-area: name

.product-card__cart
  grid-area: cart
  align-self: center
  text-align: center
  padding: 10px
  font-size: 20px
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px

.product-card__images
  grid-area: image

.product-card__image
  max-width: 100%
  height: auto

.product-card__in-stock
  grid-area: stock

.product-card__price
  grid-area: price
  font-size: 40px
  color: var(--limone)
  line-height: 1

.product-card__description
  grid-area: description
  margin-bottom: 5vh

.product-card__options
  grid-area: options
  display: flex
  margin-top: 16px

.product-card__option
  margin-right: 20px
  padding: 10px
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 10px

.product-card__option-icon
  height: 70px
  width: 70px

.product-card__quantity
  grid-area: quantity
  display: flex
  justify-content: space-between
  align-items: center
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  height: 40px

.product-card__increase
  width: 40px
  height: 40px
  font-family: inherit
  font-size: 16px
  border: 0
  background: 0
  cursor: pointer

.product-card__decrease
  width: 40px
  height: 40px
  font-family: inherit
  font-size: 16px
  border: 0
  background: 0
  cursor: pointer

.product-card__add-to-cart
  grid-area: add
  height: 40px
  margin: 16px 0
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  font-family: inherit
  font-size: 16px

</style>
