import { mount } from '@vue/test-utils'
import VendorCategories from '@/views/vendor/VendorCategories.vue'
import VendorCategoriesItem from '@/components/vendor/VendorCategoriesItem.vue'
import { expect, test } from 'vitest'

test('List renders several child items', () => {
  const categories = mount(VendorCategories)

  expect(categories.findAllComponents(VendorCategoriesItem).length).toBe(4)
})
