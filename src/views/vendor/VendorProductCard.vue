<template lang='pug'>
VendorHeader
.vendor-product-card

  .vendor-product-card__category {{ product.category }}
  h1.vendor-product-card__name {{ product.name }}
  .vendor-product-card__brand {{ product.brand }}

  .vendor-product-card__images
    img.vendor-product-card__image(:src='product.image')
  .vendor-product-card__options
    .vendor-product-card__option(
      v-for='option in product.options'
      :key='option.id'
      @mouseover='updateImage(option.image)'
      )
      img.vendor-product-card__option-icon(:src='option.image')

  p.vendor-product-card__description {{  product.description  }}
  .vendor-product-card__price ${{  product.price  }}

  span.vendor-product-card__quantity-label.vendor-product-card__quantity-label_in-stock(v-if='product.inStock') In Stock
  span.vendor-product-card__quantity-label.vendor-product-card__quantity-label_out-of-stock(v-else) Out of Stock

  router-link.vendor-product-card__edit(:to="{ name: 'VendorProductAdd' }") Edit
</template>

<script setup>
import { reactive, ref } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
import VendorProductCartItem from '@/components/vendor/VendorProductCartItem.vue'

const product = reactive({
  name: null,
  brand: null,
  image: null,
  price: null,
  description: null,
  inStock: null,
})

function updateImage(imageURL) {
  product.image = imageURL
}

Object.assign(product, {
  category: 'FACE',
  brand: 'SAYGI',
  name: 'Sunscreen Lotion',
  image: new URL('/src/assets/images/product-1/SPF-lotion-1.jpg', import.meta.url).href,
  price: 300,
  description: 'Sed et porttitor enim. Aenean risus neque, tincidunt vitae nibh vitae, varius efficitur mauris. Maecenas non feugiat nisi, ut sagittis nunc. Etiam non diam arcu. Maecenas mollis pretium sem id blandit. Cras venenatis enim nec maximus blandit.',
  inStock: true,
  options: [
    { id: 3333, option1: 'Sunscreen Lotion', image: new URL('/src/assets/images/product-1/SPF-lotion-1.jpg', import.meta.url).href },
    { id: 2222, option2: 'Sunscreen Lotion', image: new URL('/src/assets/images/product-1/SPF-lotion-2.jpg', import.meta.url).href },
    { id: 4444, option3: 'Sunscreen Lotion', image: new URL('/src/assets/images/product-1/SPF-lotion-3.jpg', import.meta.url).href },
    { id: 5555, option4: 'Sunscreen Lotion', image: new URL('/src/assets/images/product-1/SPF-lotion-4.jpg', import.meta.url).href },
  ],
})
</script>

<style>
.vendor-product-card
  display: flex
  flex-direction: column

.vendor-product-card__category
  font-size: 12px
  display: flex
  justify-content: center

.vendor-product-card__brand
  padding: 10px 0 20px
  display: flex
  justify-content: center
  font-size: 20px
  color: var(--cloudy-today)

.vendor-product-card__name
  margin: 0 18px
  text-align: center
  line-height: 0.8
  font-weight: 400
  font-size: 40px

.vendor-product-card__image
  max-width: 100%
  object-fit: cover

.vendor-product-card__options
  display: flex

.vendor-product-card__option-icon
  width: 25vw

.vendor-product-card__quantity-label
  margin: 0 2vh
  color: var(--cloudy-today)

.vendor-product-card__price
  font-size: 30px
  margin: 0 2vh

.vendor-product-card__description
  margin: 2vh

.vendor-product-card__edit
  padding: 16px
  margin: 30px
  width: 40vw
  display: flex
  justify-content: center
  align-self: center
  cursor: pointer
  color: var(--thamar-black)
  border: 1px solid var(--thamar-black)
  border-radius: 10px
</style>
