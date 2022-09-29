import { mount } from '@vue/test-utils'
import RetailerOrder from '@/components/RetailerOrder.vue'
import { expect, test } from 'vitest'

test('renders name, quantity and price', () => {
  const wrapper = mount(
    RetailerOrder, { props: { name: '92852402-0011', quantity: 1, totalPrice: 12500 } }
  )
  const retailerOrderName = wrapper.get('span.retailer-order__name')
  const retailerOrderQuantity = wrapper.get('span.retailer-order__quantity')
  const retailerOrderTotalPrice = wrapper.get('span.retailer-order__total-price')

  expect(retailerOrderName.text()).toContain('92852402-0011')
  expect(retailerOrderQuantity.text()).toContain('1')
  expect(retailerOrderTotalPrice.text()).toContain('12500')
})
