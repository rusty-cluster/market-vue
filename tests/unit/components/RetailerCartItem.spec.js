import { mount } from '@vue/test-utils'
import RetailerCartItem from '@/components/RetailerCartItem.vue'
import { expect, test } from 'vitest'

test('render quantity and price', () => {
  const wrapper = mount(
    RetailerCartItem, { props: { name: 'Gold Leaf', quantity: 11, price: 500 } }
  )
  const retailerCartItemName = wrapper.get('span.retailer-cart-item__name')
  const retailerCartItemQuantity = wrapper.get('span.retailer-cart-item__quantity')
  const retailerCartItemTotalPrice = wrapper.get('span.retailer-cart-item__total-price')

  expect(retailerCartItemName.text()).toContain('Gold Leaf')
  expect(retailerCartItemQuantity.text()).toContain('11')
  expect(retailerCartItemTotalPrice.text()).toContain('5500')
})
