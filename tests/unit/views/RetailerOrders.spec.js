import { mount } from '@vue/test-utils'
import RetailerOrders from '@/views/RetailerOrders.vue'
import RetailerOrder from '@/components/RetailerOrder.vue'
import { expect, test } from 'vitest'

test('renders retailer orders', () => {
  const wrapper = mount(RetailerOrders)
  const retailerOrders = wrapper.findAllComponents(RetailerOrder)

  expect(retailerOrders.length).toBe(3)
})
