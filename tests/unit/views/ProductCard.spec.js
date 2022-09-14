import { mount } from '@vue/test-utils'
import ProductCard from '@/views/ProductCard.vue'
import { expect, test } from 'vitest'

test('ProductCard renders title', () => {
  const productCard = mount(ProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })

  expect(productCard.text()).toContain('Slowpoke')
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

test('Does not render the absence of a product', () => {
  const productCard = mount(ProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })
  const outOfStock = productCard.find('.product-card__in-stock_false')

  expect(outOfStock.exists()).toBe(false)
})

test('Renders the presence of a product', () => {
  const productCard = mount(ProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })
  const inStock = productCard.get('.product-card__in-stock_true')

  expect(inStock.text()).toEqual('In Stock')
})
