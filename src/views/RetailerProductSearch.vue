<template lang="pug">
.retailer-product-search
  RetailerHeader(
    :cartItemsQuantity='0'
    :isSearchFieldRendered='true'
  )
  ul.retailer-product-search__list
    RetailerProductTile(
      v-for='product in products'
      :product='product'
      :key='product.name'
    )
  RetailerFooter
</template>

<script setup>
import { reactive, ref } from 'vue'

import RetailerFooter from '@/components/RetailerFooter.vue'
import RetailerHeader from '@/components/RetailerHeader.vue'
import RetailerProductTile from '@/components/RetailerProductTile.vue'

const products = ref([
  {
    name: 'Bulbasaur',
    price: 450,
    description: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. ',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Slowpoke',
    price: 300,
    description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I.',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Charmander',
    price: 340,
    description: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. ',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Squirtle',
    price: 350,
    description: 'Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. ',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Caterpie',
    price: 320,
    description: 'Caterpie (Japanese: キャタピー Caterpie) is a Bug-type Pokémon introduced in Generation I.',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Weedle',
    price: 390,
    description: 'Weedle (Japanese: ビードル Beedle) is a dual-type Bug/Poison Pokémon introduced in Generation I. ',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Pidgey',
    price: 340,
    description: 'Pidgey (Japanese: ポッポ Poppo) is a dual-type Normal/Flying Pokémon introduced in Generation I. ',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Rattata',
    price: 400,
    description: 'Rattata (Japanese: コラッタ Koratta) is a Normal-type Pokémon introduced in Generation I. ',
    inStock: true,
    inCart: 0,
  },
  {
    name: 'Magnemite',
    price: 410,
    description: 'Magnemite (Japanese: コイル Coil) is a dual-type Electric/Steel Pokémon introduced in Generation I. Prior to Generation II, it was a pure Electric-type Pokémon.',
    inStock: true,
    inCart: 0,
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
