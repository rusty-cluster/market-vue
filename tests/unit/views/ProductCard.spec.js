import { mount } from '@vue/test-utils'
import ProductCard from '@/views/ProductCard.vue'
import { expect, test } from 'vitest'

test('ProductCard renders title', () => {
  const wrapper = mount(ProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })

  expect(wrapper.text()).toContain('Slowpoke')
})

test('ProductCard renders image of product', () => {
  const productCard = mount(ProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })
  const image = productCard.find('.product-card__image')
 
  expect(image.html()).toContain('assets/images/pokemon-slowpoke.png')
})
