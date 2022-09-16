import { mount } from '@vue/test-utils'
import RetailerCartHeader from '@/components/RetailerCartHeader.vue'
import { expect, test } from 'vitest'

test('render item quantity and total price', () => {
  const wrapper = mount(
    RetailerCartHeader, { props: { itemQuantity: 20, totalPrice: 34500 } }
  )
  const retailerCartHeaderItemQuantity = wrapper.get('span.retailer-cart-header__item-quantity')
  const retailerCartHeaderTotalPrice = wrapper.get('span.retailer-cart-header__total-price')
 
  expect(retailerCartHeaderItemQuantity.text()).toContain('20')
  expect(retailerCartHeaderTotalPrice.text()).toContain('34500')
})
