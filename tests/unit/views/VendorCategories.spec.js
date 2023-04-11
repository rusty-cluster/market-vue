import { mount } from '@vue/test-utils'
import VendorCategories from '@/views/VendorCategories.vue'
import VendorCategory from '@/components/VendorCategory.vue'
import { expect, test } from 'vitest'

test('List renders several child tile', () => {
  const vendorCategories = mount(VendorCategories)

  expect(vendorCategories.findAllComponents(VendorCategory).length).toBe(4)
})
