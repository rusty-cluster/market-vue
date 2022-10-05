import { mount } from '@vue/test-utils'
import ProductList from '@/views/ProductList.vue'
import ProductTile from '@/components/ProductTile.vue'
import { expect, test } from 'vitest'

test('ProductList renders several child ProductTile', () => {
  const productList = mount(ProductList)

  expect(productList.findAllComponents(ProductTile).length).toBe(9)
})
