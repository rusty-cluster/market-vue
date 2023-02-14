import { mount } from '@vue/test-utils'
import RetailerCart from '@/views/RetailerCart.vue'
import RetailerCartItem from '@/components/RetailerCartItem.vue'
import { expect, test } from 'vitest'

test('correctly renders retailer-cart__list', () => {
  const wrapper = mount(RetailerCart)
  const retailerCartList = wrapper.findAllComponents(RetailerCartItem)

  expect(retailerCartList.length).toBe(5)
})
