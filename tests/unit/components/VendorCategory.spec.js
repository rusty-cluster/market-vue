import { mount } from '@vue/test-utils'
import VendorCategory from '@/components/VendorCategory.vue'
import { expect, test } from 'vitest'

test('VendorCategory renders id', () => {
  const wrapper = mount(
    VendorCategory, { props: { category: { id: '0013' } } }
  )
  const id = wrapper.get('.vendor-category__id')

  expect(id.text()).toContain('0013')
})

test('VendorCategory renders name', () => {
  const wrapper = mount(
    VendorCategory, { props: { category: { name: 'Bag' } } }
  )
  const name = wrapper.get('.vendor-category__name')

  expect(name.text()).toContain('Bag')
})
