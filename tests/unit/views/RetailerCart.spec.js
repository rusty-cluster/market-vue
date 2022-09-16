import { mount } from '@vue/test-utils'
import RetailerCart from '@/views/RetailerCart.vue'
import RetailerCartItem from '@/components/RetailerCartItem.vue'
import { expect, test } from 'vitest'

test('renders RetailerCart items', () => {
  const wrapper = mount(RetailerCart)
  const retailerCartItems = wrapper.findAllComponents(RetailerCartItem)

  expect(retailerCartItems.length).toBe(5)
})
