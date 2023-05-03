import { mount } from '@vue/test-utils'
import VendorOrders from '@/views/vendor/VendorOrders.vue'
import VendorOrdersItem from '@/components/vendor/VendorOrdersItem.vue'
import { expect, test } from 'vitest'

test('List renders several child item', () => {
  const orders = mount(VendorOrders)

  expect(orders.findAllComponents(VendorOrdersItem).length).toBe(4)
})
