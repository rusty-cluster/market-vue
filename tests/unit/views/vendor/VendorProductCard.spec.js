import { mount } from '@vue/test-utils'
import VendorProductCard from '@/views/vendor/VendorProductCard.vue'
import VendorProductCartItem from '@/components/vendor/VendorProductCartItem.vue'
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

test('Does not render absence of product', () => {
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

test('Renders presence of product', () => {
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
