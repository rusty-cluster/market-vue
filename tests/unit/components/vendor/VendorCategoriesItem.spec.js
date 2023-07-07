import { mount } from '@vue/test-utils'
import VendorCategoriesItem from '@/components/vendor/VendorCategoriesItem.vue'
import { expect, test } from 'vitest'

test('Renders id', () => {
  const wrapper = mount(
    VendorCategoriesItem, { props: { category: { id: '0013' } } }
  )
  const id = wrapper.get('.vendor-categories-item__id')

  expect(id.text()).toContain('0013')
})

test('Renders name', () => {
  const wrapper = mount(
    VendorCategoriesItem, { props: { category: { name: 'Bag' } } }
  )
  const name = wrapper.get('.vendor-categories-item__name')

  expect(name.text()).toContain('Bag')
})
