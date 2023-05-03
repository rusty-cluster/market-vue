import { mount } from '@vue/test-utils'
import VendorProductsItem from '@/components/vendor/VendorProductsItem.vue'
import { expect, test } from 'vitest'

test('Renders name', () => {
  const wrapper = mount(
    VendorProductsItem, { props: { product: { name: 'Bulbasaur' } } }
  )
  const name = wrapper.get('.vendor-products-item__name')

  expect(name.text()).toContain('Bulbasaur')
})

test('Renders price', () => {
  const wrapper = mount(
    VendorProductsItem, { props: { product: { price: 450 } } }
  )
  const price = wrapper.get('.vendor-products-item__price')

  expect(price.text()).toContain(450)
})

test('Renders description', () => {
  const wrapper = mount(
    VendorProductsItem, { props: { product: { description: 'Bulbasauris a dual-type Grass/Poison Pokémon.' } } }
  )
  const description = wrapper.get('.vendor-products-item__description')

  expect(description.text()).toContain('Bulbasauris a dual-type Grass/Poison Pokémon.')
})

test('Renders image of product', () => {
  const wrapper = mount(
    VendorProductsItem, { props: { product: { image:  new URL('../assets/images/pokemon-bulbasaur.webp', import.meta.url).href } } }
  )

  const image = wrapper.find('.vendor-products-item__image')
  expect(image.attributes('src')).toContain('/assets/images/pokemon-bulbasaur.webp')
})
