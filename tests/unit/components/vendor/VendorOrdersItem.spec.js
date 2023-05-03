import { mount } from '@vue/test-utils'
import VendorOrdersItem from '@/components/vendor/VendorOrdersItem.vue'
import { expect, test } from 'vitest'

test('Renders id', () => {
  const wrapper = mount(
    VendorOrdersItem, { props: { order: { id: 'ABC 11427' } } }
  )
  const id = wrapper.get('.vendor-orders-item__id')

  expect(id.text()).toContain('ABC 11427')
})

test('Renders date', () => {
  const wrapper = mount(
    VendorOrdersItem, { props: { order: { date: '10.04.2024' } } }
  )
  const date = wrapper.get('.vendor-orders-item__date')

  expect(date.text()).toContain('10.04.2024')
})

test('Renders customer', () => {
  const wrapper = mount(
    VendorOrdersItem, { props: { order: { customer: 'Tom Ford inc' } } }
  )
  const customer = wrapper.get('.vendor-orders-item__customer')

  expect(customer.text()).toContain('Tom Ford inc')
})

test('Renders status', () => {
  const wrapper = mount(
    VendorOrdersItem, { props: { order: { status: 'completed' } } }
  )
  const status = wrapper.get('.vendor-orders-item__status')

  expect(status.text()).toContain('completed')
})

test('Renders total', () => {
  const wrapper = mount(
    VendorOrdersItem, { props: { order: { total: 300 } } }
  )
  const total = wrapper.get('.vendor-orders-item__total')

  expect(total.text()).toContain('$300')
})

