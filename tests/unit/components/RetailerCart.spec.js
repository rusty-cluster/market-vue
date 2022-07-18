import { mount } from '@vue/test-utils'
import RetailerCart from '@/components/RetailerCart.vue'
import { expect, test } from 'vitest'

test('render item quantity and total price', () => {
  const wrapper = mount(
    RetailerCart, { props: { itemQuantity: 11, totalPrice: 42 } }
  )
  const retailerCartItemQuantity = wrapper.get('span.retailer-cart__item-quantity')
  const retailerCartTotalPrice = wrapper.get('span.retailer-cart__total-price')
 
  expect(retailerCartItemQuantity.text()).toContain('11')
  expect(retailerCartTotalPrice.text()).toContain('42')
})
