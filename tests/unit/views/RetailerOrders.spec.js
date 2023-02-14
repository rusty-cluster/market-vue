import { mount } from '@vue/test-utils'
import RetailerOrders from '@/views/RetailerOrders.vue'
import RetailerOrder from '@/components/RetailerOrder.vue'
import { expect, test } from 'vitest'

test('correctly renders retailer-orders__list', () => {
  const wrapper = mount(RetailerOrders)
  const retailerOrdersList = wrapper.findAllComponents(RetailerOrder)

  expect(retailerOrdersList.length).toBe(5)
})
