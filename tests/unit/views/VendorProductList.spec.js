import { mount } from '@vue/test-utils'
import VendorProductList from '@/views/VendorProductList.vue'
import VendorProductTile from '@/components/VendorProductTile.vue'
import { expect, test } from 'vitest'

test('ProductList renders several child ProductTile', () => {
  const productList = mount(VendorProductList)

  expect(productList.findAllComponents(VendorProductTile).length).toBe(9)
})
