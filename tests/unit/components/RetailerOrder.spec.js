import { mount } from '@vue/test-utils'
import RetailerOrder from '@/components/RetailerOrder.vue'
import { expect, test } from 'vitest'

test('renders name, quantity and price', () => {
  const wrapper = mount(
    RetailerOrder, { props: {
      id: 676416454000,
      timestamp: 1676416454000,
      cartItems: [
        {
          id: 79,
          price: 300,
          quantity: 11,
        },
      ],
    }}
  )
  const retailerOrderId = wrapper.get('span.retailer-order__id')
  const retailerOrderTotalQuantity = wrapper.get('span.retailer-order__total-quantity')
  const retailerOrderTotalPrice = wrapper.get('span.retailer-order__total-price')

  expect(retailerOrderId.text()).toContain('676416454000')
  expect(retailerOrderTotalQuantity.text()).toContain('11')
  expect(retailerOrderTotalPrice.text()).toContain('3300')
})
