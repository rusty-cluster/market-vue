import { mount } from '@vue/test-utils'
import VendorOrders from '@/views/VendorOrders.vue'
import VendorOrder from '@/components/VendorOrder.vue'
import { expect, test } from 'vitest'

test('List renders several child item', () => {
  const vendorOrders = mount(VendorOrders)

  expect(vendorOrders.findAllComponents(VendorOrder).length).toBe(4)
})
