import { mount } from '@vue/test-utils'
import VendorProductsItem from '@/components/vendor/VendorProductsItem.vue'
import { expect, test } from 'vitest'

test('Renders image of product', () => {
  const wrapper = mount(
    VendorProductsItem, { props: { product: { image:  new URL('../assets/images/product-1/SPF-lotion-1.jpg', import.meta.url).href } } }
  )

  const image = wrapper.find('.vendor-products-item__image')
  expect(image.attributes('src')).toContain('/assets/images/product-1/SPF-lotion-1.jpg')
})

test('Renders brand', () => {
  const wrapper = mount(
    VendorProductsItem, { props: { product: { brand: 'SAYGI' } } }
  )
  const description = wrapper.get('.vendor-products-item__brand')

  expect(description.text()).toContain('SAYGI')
})

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
