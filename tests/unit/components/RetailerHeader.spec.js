import { mount } from '@vue/test-utils'
import RetailerHeader from '@/components/RetailerHeader.vue'
import RetailerProductSearchField from '@/components/RetailerProductSearchField.vue'
import { expect, test } from 'vitest'

test('correctly renders RetailerProductSearchField', () => {
  const wrapper = mount(
    RetailerHeader, { props: { isSearchFieldRendered: true } }
  )
  const retailerProductSearchFields = wrapper.findAllComponents(RetailerProductSearchField)

  expect(retailerProductSearchFields.length).toBe(1)
})
