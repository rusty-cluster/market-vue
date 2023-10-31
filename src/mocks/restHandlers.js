import { rest } from 'msw'

import {
  retailerCartItems,
  retailerOrders,
  retailerProducts,
} from './data/retailer'

export const restHandlers = [
  rest.get('mocks/retailer-cart-items', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(retailerCartItems))
  }),

  rest.get('mocks/retailer-orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(retailerOrders))
  }),

  rest.get('mocks/retailer-products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(retailerProducts))
  }),
]
