import { mount } from '@vue/test-utils'
import VendorProducts from '@/views/VendorProducts.vue'
import VendorProduct from '@/components/VendorProduct.vue'
import { expect, test } from 'vitest'

test('Renders several child item', () => {
  const products = mount(VendorProducts)

  expect(products.findAllComponents(VendorProduct).length).toBe(9)
})
