import { mount } from '@vue/test-utils'
import RetailerDashboard from '@/views/RetailerDashboard.vue'
import { expect, test } from 'vitest'

test('renders RetailerCartHeader', () => {
  const wrapper = mount(RetailerDashboard)
  const stickyHeader = wrapper.find('.retailer-cart-header')
 
  expect(stickyHeader.isVisible()).toBe(true)
})
