import { mount } from '@vue/test-utils'
import VendorOrderTile from '@/components/VendorOrderTile.vue'
import { expect, test } from 'vitest'

test('VendorOrderTile renders id', () => {
  const wrapper = mount(
    VendorOrderTile, { props: { order: { id: 'ABC 11427' } } }
  )
  const id = wrapper.get('.vendor-order-tile__id')

  expect(id.text()).toContain('ABC 11427')
})

test('VendorOrderTile renders date', () => {
  const wrapper = mount(
    VendorOrderTile, { props: { order: { date: '10.04.2024' } } }
  )
  const date = wrapper.get('.vendor-order-tile__date')

  expect(date.text()).toContain('10.04.2024')
})

test('VendorOrderTile renders customer', () => {
  const wrapper = mount(
    VendorOrderTile, { props: { order: { customer: 'Tom Ford inc' } } }
  )
  const customer = wrapper.get('.vendor-order-tile__customer')

  expect(customer.text()).toContain('Tom Ford inc')
})

test('VendorOrderTile renders status', () => {
  const wrapper = mount(
    VendorOrderTile, { props: { order: { status: 'completed' } } }
  )
  const status = wrapper.get('.vendor-order-tile__status')

  expect(status.text()).toContain('completed')
})

test('VendorOrderTile renders total', () => {
  const wrapper = mount(
    VendorOrderTile, { props: { order: { total: 300 } } }
  )
  const total = wrapper.get('.vendor-order-tile__total')

  expect(total.text()).toContain('$300')
})

