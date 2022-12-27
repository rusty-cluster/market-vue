import { mount } from '@vue/test-utils'
import RetailerProductSearch from '@/views/RetailerProductSearch.vue'
import RetailerProductTile from '@/components/RetailerProductTile.vue'
import { expect, test } from 'vitest'

test('renders retailer product tiles', () => {
  const wrapper = mount(RetailerProductSearch)
  const retailerProductTiles = wrapper.findAllComponents(RetailerProductTile)

  expect(retailerProductTiles.length).toBe(9)
})
