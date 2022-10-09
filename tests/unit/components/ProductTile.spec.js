import { mount } from '@vue/test-utils'
import ProductTile from '@/components/ProductTile.vue'
import { expect, test } from 'vitest'

test('ProductTile renders name', () => {
  const wrapper = mount(
    ProductTile, { props: { product: { name: 'Bulbasaur' } } }
  )
  const name = wrapper.get('.product-tile__name')

  expect(name.text()).toContain('Bulbasaur')
})

test('ProductTile renders price', () => {
  const wrapper = mount(
    ProductTile, { props: { product: { price: 450 } } }
  )
  const price = wrapper.get('.product-tile__price')

  expect(price.text()).toContain(450)
})

test('ProductTile renders description', () => {
  const wrapper = mount(
    ProductTile, { props: { product: { description: 'Bulbasauris a dual-type Grass/Poison Pokémon.' } } }
  )
  const description = wrapper.get('.product-tile__description')

  expect(description.text()).toContain('Bulbasauris a dual-type Grass/Poison Pokémon.')
})

test('ProductTile renders image of product', () => {
  const wrapper = mount(
    ProductTile, { props: { product: { image:  new URL('../assets/images/pokemon-bulbasaur.webp', import.meta.url).href } } }
  )

  const image = wrapper.find('.product-tile__image')
  expect(image.attributes('src')).toContain('/assets/images/pokemon-bulbasaur.webp')
})
