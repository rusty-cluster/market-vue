<template lang="pug">
.retailer-product-search
  RetailerHeader(
    :cartItems='cartItems'
    :isSearchFieldRendered='true'
  )
  ul.retailer-product-search__list
    RetailerProductTile(
      v-for='product in products'
      :product='product'
      :key='product.name'
      @add-or-increase-quantity='addOrIncreaseQuantity'
    )
  RetailerFooter
</template>

<script setup>
import { reactive, ref } from 'vue'

import RetailerFooter from '@/components/RetailerFooter.vue'
import RetailerHeader from '@/components/RetailerHeader.vue'
import RetailerProductTile from '@/components/RetailerProductTile.vue'

const cartItems = ref([])

const addOrIncreaseQuantity = productInfo => {
  const indexOfFoundItem = cartItems.value.findIndex(
    item => item['id'] === productInfo['id']
  )
  const isItemFound = indexOfFoundItem > -1

  if (isItemFound) {
    return cartItems.value.at(indexOfFoundItem)['quantity'] += productInfo['quantity']
  }
  return cartItems.value.push(productInfo)
}

const products = ref([
  {
    description: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.',
    id: 1,
    name: 'Bulbasaur',
    price: 450,
  },
  {
    description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I. It evolves into Slowbro starting at level 37 or Slowking when traded while holding a King s Rock.',
    id: 79,
    name: 'Slowpoke',
    price: 300,
  },
  {
    description: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36.',
    id: 4,
    name: 'Charmander',
    price: 340,
  },
  {
    description: 'Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36.',
    id: 7,
    name: 'Squirtle',
    price: 350,
  },
  {
    description: 'Caterpie (Japanese: キャタピー Caterpie) is a Bug-type Pokémon introduced in Generation I. It evolves into Metapod starting at level 7, which evolves into Butterfree starting at level 10.',
    id: 10,
    name: 'Caterpie',
    price: 320,
  },
  {
    description: 'Weedle (Japanese: ビードル Beedle) is a dual-type Bug/Poison Pokémon introduced in Generation I. It evolves into Kakuna starting at level 7, which evolves into Beedrill starting at level 10.',
    id: 13,
    name: 'Weedle',
    price: 390,
  },
  {
    description: 'Pidgey (Japanese: ポッポ Poppo) is a dual-type Normal/Flying Pokémon introduced in Generation I. It evolves into Pidgeotto starting at level 18, which evolves into Pidgeot starting at level 36.',
    id: 16,
    name: 'Pidgey',
    price: 340,
  },
  {
    description: 'Rattata (Japanese: コラッタ Koratta) is a Normal-type Pokémon introduced in Generation I. It evolves into Raticate starting at level 20.',
    id: 19,
    name: 'Rattata',
    price: 400,
  },
  {
    description: 'Magnemite (Japanese: コイル Coil) is a dual-type Electric/Steel Pokémon introduced in Generation I. Prior to Generation II, it was a pure Electric-type Pokémon. It evolves into Magneton starting at level 30, which evolves into Magnezone when leveled up in a special magnetic field or when exposed to a Thunder Stone.',
    id: 81,
    name: 'Magnemite',
    price: 410,
  },
])
</script>

<style>
.retailer-product-search
  display: grid
  grid-template-columns: 1fr min(100%, 800px) 1fr
  align-content: start
  min-height: 100vh

.retailer-product-search > *
  grid-column: 2

ul.retailer-product-search__list
  display: flex
  flex-direction: column
  margin: 0
  padding: 0 2vh
</style>
