import { mount } from '@vue/test-utils'
import VendorCategoryAdd from '@/views/vendor/VendorCategoryAdd.vue'
import { expect, test } from 'vitest'

test('Sets value in ID field', async () => {
  const wrapper = mount(VendorCategoryAdd)
  const input = wrapper.find('.vendor-category-add__input[name="id"]')

  await input.setValue('0013')

  expect(input.element.value).toBe('0013')
})

test('Sets value in name field', async () => {
  const wrapper = mount(VendorCategoryAdd)
  const input = wrapper.find('.vendor-category-add__input[name="name"]')

  await input.setValue('bag')

  expect(input.element.value).toBe('bag')
})
