import { mount } from '@vue/test-utils'
import VendorProducts from '@/views/VendorProducts.vue'
import VendorProductTile from '@/components/VendorProductTile.vue'
import { expect, test } from 'vitest'

test('Products renders several child ProductTile', () => {
  const products = mount(VendorProducts)

  expect(products.findAllComponents(VendorProductTile).length).toBe(9)
})
