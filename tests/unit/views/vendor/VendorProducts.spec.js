import { mount } from '@vue/test-utils'
import VendorProducts from '@/views/vendor/VendorProducts.vue'
import VendorProductsItem from '@/components/vendor/VendorProductsItem.vue'
import { expect, test } from 'vitest'

test('Renders several child item', () => {
  const product = mount(VendorProducts)

  expect(product.findAllComponents(VendorProductsItem).length).toBe(9)
})
