import { mount } from '@vue/test-utils'
import ProductCard from '@/views/ProductCard.vue'
import { expect, test } from 'vitest'

test('ProductCard renders title', () => {
  const productTitle = 'Blank name'
  const wrapper = mount(ProductCard, {
    propsData: {
      name: productTitle
    },
    global: {
      mocks: {
        $route: {params: {slug:'test'}},
      }
    }
  })

  expect(wrapper.text()).toContain(productTitle)
})
