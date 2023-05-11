import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { mockEndpoint } from './src/mocks/server'

import { retailerCartItems } from './src/mocks/data/retailer'

import RetailerCartItem from '@/components/retailer/RetailerCartItem.vue'
import RetailerCart from '@/views/retailer/RetailerCart.vue'

test.skip('correctly renders retailer-cart__list', async () => {
  mockEndpoint('http://mocks/retailer-cart-items', { body: retailerCartItems })

  const wrapper = mount(RetailerCart)
  const retailerCartList = wrapper.findAllComponents(RetailerCartItem)

  expect(retailerCartList.length).toBe(5)
})
