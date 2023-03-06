import { mount } from '@vue/test-utils'
import VendorProductTile from '@/components/VendorProductTile.vue'
import { expect, test } from 'vitest'

test('VendorProductTile renders name', () => {
  const wrapper = mount(
    VendorProductTile, { props: { product: { name: 'Bulbasaur' } } }
  )
  const name = wrapper.get('.vendor-product-tile__name')

  expect(name.text()).toContain('Bulbasaur')
})

test('VendorProductTile renders price', () => {
  const wrapper = mount(
    VendorProductTile, { props: { product: { price: 450 } } }
  )
  const price = wrapper.get('.vendor-product-tile__price')

  expect(price.text()).toContain(450)
})

test('VendorProductTile renders description', () => {
  const wrapper = mount(
    VendorProductTile, { props: { product: { description: 'Bulbasauris a dual-type Grass/Poison Pokémon.' } } }
  )
  const description = wrapper.get('.vendor-product-tile__description')

  expect(description.text()).toContain('Bulbasauris a dual-type Grass/Poison Pokémon.')
})

test('VendorProductTile renders image of product', () => {
  const wrapper = mount(
    VendorProductTile, { props: { product: { image:  new URL('../assets/images/pokemon-bulbasaur.webp', import.meta.url).href } } }
  )

  const image = wrapper.find('.vendor-product-tile__image')
  expect(image.attributes('src')).toContain('/assets/images/pokemon-bulbasaur.webp')
})
