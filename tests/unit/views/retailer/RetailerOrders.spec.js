import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

import RetailerOrder from '@/components/retailer/RetailerOrder.vue'
import RetailerOrders from '@/views/retailer/RetailerOrders.vue'

test.skip('correctly renders retailer-orders__list', () => {
  const wrapper = mount(RetailerOrders)
  const retailerOrdersList = wrapper.findAllComponents(RetailerOrder)

  expect(retailerOrdersList.length).toBe(5)
})
