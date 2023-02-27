import { mount } from '@vue/test-utils'
import VendorOrders from '@/views/VendorOrders.vue'
import VendorOrderTile from '@/components/VendorOrderTile.vue'
import { expect, test } from 'vitest'

test('List renders several child Tile', () => {
  const vendorOrders = mount(VendorOrders)

  expect(vendorOrders.findAllComponents(VendorOrderTile).length).toBe(4)
})
