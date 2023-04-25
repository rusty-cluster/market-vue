import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

import RetailerCartItem from '@/components/retailer/RetailerCartItem.vue'
import RetailerCart from '@/views/retailer/RetailerCart.vue'

test('correctly renders retailer-cart__list', () => {
  const wrapper = mount(RetailerCart)
  const retailerCartList = wrapper.findAllComponents(RetailerCartItem)

  expect(retailerCartList.length).toBe(5)
})
