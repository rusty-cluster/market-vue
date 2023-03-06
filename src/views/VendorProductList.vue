<template lang='pug'>
.vendor-product-list
  VendorHeader

  h1.vendor-product-list__title Product List
  VendorProductTile(
    v-for='product in products'
    :product='product'
    :key='product.name')

  VendorFooter
</template>

<script setup>
import { ref } from 'vue'
import VendorHeader from '@/components/VendorHeader.vue'
import VendorProductTile from '@/components/VendorProductTile.vue'
import VendorFooter from '@/components/VendorFooter.vue'

const products = ref([
  {
    name: 'Bulbasaur',
    image: new URL('../assets/images/pokemon-bulbasaur.webp', import.meta.url).href,
    price: 450,
    description: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. ',
    cart: 0,
  },
  {
    name: 'Slowpoke',
    image: new URL('../assets/images/pokemon-slowpoke.png', import.meta.url).href,
    price: 300,
    description: 'Slowpoke (Japanese: ヤドン Yadon) is a dual-type Water/Psychic Pokémon introduced in Generation I.',
    cart: 0,
  },
  {
    name: 'Charmander',
    image: new URL('../assets/images/pokemon-charmander.png', import.meta.url).href,
    price: 340,
    description: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. ',
    inStock: true,
    cart: 0,
  },
  {
    name: 'Squirtle',
    image: new URL('../assets/images/pokemon-squirtle.png', import.meta.url).href,
    price: 350,
    description: 'Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. ',
    cart: 0,
  },
  {
    name: 'Caterpie',
    image: new URL('../assets/images/pokemon-caterpie.png', import.meta.url).href,
    price: 320,
    description: 'Caterpie (Japanese: キャタピー Caterpie) is a Bug-type Pokémon introduced in Generation I.',
    cart: 0,
  },
  {
    name: 'Weedle',
    image: new URL('../assets/images/pokemon-weedle.png', import.meta.url).href,
    price: 390,
    description: 'Weedle (Japanese: ビードル Beedle) is a dual-type Bug/Poison Pokémon introduced in Generation I. ',
    cart: 0,
  },
  {
    name: 'Pidgey',
    image: new URL('../assets/images/pokemon-pidgey.png', import.meta.url).href,
    price: 340,
    description: 'Pidgey (Japanese: ポッポ Poppo) is a dual-type Normal/Flying Pokémon introduced in Generation I. ',
    cart: 0,
  },
  {
    name: 'Rattata',
    image: new URL('../assets/images/pokemon-rattata.png', import.meta.url).href,
    price: 400,
    description: 'Rattata (Japanese: コラッタ Koratta) is a Normal-type Pokémon introduced in Generation I. ',
    cart: 0,
  },
  {
    name: 'Magnemite',
    image: new URL('../assets/images/pokemon-magnemite.webp', import.meta.url).href,
    price: 410,
    description: 'Magnemite (Japanese: コイル Coil) is a dual-type Electric/Steel Pokémon introduced in Generation I. Prior to Generation II, it was a pure Electric-type Pokémon.',
    cart: 0,
  },
])

</script>

<style>
.vendor-product-list
  margin: 0
  padding: 0 2vh
  display: flex
  flex-direction: column
</style>
