import { mount } from '@vue/test-utils'
import RetailerDashboard from '@/views/RetailerDashboard.vue'
import { expect, test } from 'vitest'

test('renders RetailerCart sticky header', () => {
  const wrapper = mount(RetailerDashboard)
  const stickyHeader = wrapper.find('.retailer-cart')
 
  expect(stickyHeader.isVisible()).toBe(true)
})
