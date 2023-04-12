import { mount } from '@vue/test-utils'
import VendorOrder from '@/components/VendorOrder.vue'
import { expect, test } from 'vitest'

test('Renders id', () => {
  const wrapper = mount(
    VendorOrder, { props: { order: { id: 'ABC 11427' } } }
  )
  const id = wrapper.get('.vendor-order__id')

  expect(id.text()).toContain('ABC 11427')
})

test('Renders date', () => {
  const wrapper = mount(
    VendorOrder, { props: { order: { date: '10.04.2024' } } }
  )
  const date = wrapper.get('.vendor-order__date')

  expect(date.text()).toContain('10.04.2024')
})

test('Renders customer', () => {
  const wrapper = mount(
    VendorOrder, { props: { order: { customer: 'Tom Ford inc' } } }
  )
  const customer = wrapper.get('.vendor-order__customer')

  expect(customer.text()).toContain('Tom Ford inc')
})

test('Renders status', () => {
  const wrapper = mount(
    VendorOrder, { props: { order: { status: 'completed' } } }
  )
  const status = wrapper.get('.vendor-order__status')

  expect(status.text()).toContain('completed')
})

test('Renders total', () => {
  const wrapper = mount(
    VendorOrder, { props: { order: { total: 300 } } }
  )
  const total = wrapper.get('.vendor-order__total')

  expect(total.text()).toContain('$300')
})

