import { mount } from '@vue/test-utils'
import VendorProductCard from '@/views/VendorProductCard.vue'
import { expect, test } from 'vitest'

test('Renders title', () => {
  const productCard = mount(VendorProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })

  expect(productCard.text()).toContain('Slowpoke')
})

test('Renders image of product', () => {
  const productCard = mount(VendorProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })
  const image = productCard.find('.vendor-product-card__image')
 
  expect(image.html()).toContain('assets/images/pokemon-slowpoke.png')
})

test('Does not render the absence of a product', () => {
  const productCard = mount(VendorProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })
  const outOfStock = productCard.find('.vendor-product-card__quantity-label_out-of-stock')

  expect(outOfStock.exists()).toBe(false)
})

test('Renders the presence of a product', () => {
  const productCard = mount(VendorProductCard, {
    global: {
      mocks: {
        $route: { params: { slug:'test' } },
      }
    }
  })
  const inStock = productCard.get('.vendor-product-card__quantity-label_in-stock')

  expect(inStock.text()).toEqual('In Stock')
})
