import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

import RetailerCartItem from '@/components/retailer/RetailerCartItem.vue'

test('render quantity and price', () => {
  const wrapper = mount(
    RetailerCartItem, { props: { name: 'Slowpoke', quantity: 5, price: 300 } }
  )
  const retailerCartItemName = wrapper.get('span.retailer-cart-item__name')
  const retailerCartItemQuantity = wrapper.get('span.retailer-cart-item__quantity')
  const retailerCartItemTotalPrice = wrapper.get('span.retailer-cart-item__total-price')

  expect(retailerCartItemName.text()).toContain('Slowpoke')
  expect(retailerCartItemQuantity.text()).toContain('5')
  expect(retailerCartItemTotalPrice.text()).toContain('1500')
})
