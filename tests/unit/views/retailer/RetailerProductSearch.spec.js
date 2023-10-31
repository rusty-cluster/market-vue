import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

import RetailerHeader from '@/components/retailer/RetailerHeader.vue'
import RetailerProductTile from '@/components/retailer/RetailerProductTile.vue'
import RetailerProductSearch from '@/views/retailer/RetailerProductSearch.vue'

test.skip('correctly renders retailer-product-search__list', () => {
  const wrapper = mount(RetailerProductSearch)
  const retailerProductTiles = wrapper.findAllComponents(RetailerProductTile)

  expect(retailerProductTiles.length).toBe(9)
})

test.skip('correctly renders retailer cart totals', async () => {
  const wrapper = mount(RetailerProductSearch)
  const retailerProductTiles = wrapper.findAllComponents(RetailerProductTile)
  const firstAddToCartButton = retailerProductTiles[0]
    .find('.retailer-product-tile__add-to-cart-button')
  const secondAddToCartButton = retailerProductTiles[1]
    .find('.retailer-product-tile__add-to-cart-button')

  await firstAddToCartButton.trigger('click')
  await secondAddToCartButton.trigger('click')
  expect(
    wrapper.find('span.retailer-header__cart-total-price').text()
  ).toContain('750')
  expect(
    wrapper.find('span.retailer-header__cart-total-quantity').text()
  ).toContain('2')
})
