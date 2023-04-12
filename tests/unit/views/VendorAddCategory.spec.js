import { mount } from '@vue/test-utils'
import VendorAddCategory from '@/views/VendorAddCategory.vue'
import { expect, test } from 'vitest'

test('Sets value in ID field', async () => {
  const wrapper = mount(VendorAddCategory)
  const input = wrapper.find('.vendor-add-category__form-input[name="id"]')
  console.log(wrapper.vm)
  await input.setValue('0013')

  expect(input.element.value).toBe('0013')
})

test('Sets value in name field', async () => {
  const wrapper = mount(VendorAddCategory)
  const input = wrapper.find('.vendor-add-category__form-input[name="name"]')

  await input.setValue('bag')

  expect(input.element.value).toBe('bag')
})
