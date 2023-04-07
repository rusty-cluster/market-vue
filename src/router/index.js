import { createRouter, createWebHistory } from 'vue-router'

const RetailerCart = () => import('@/views/RetailerCart.vue')
const RetailerDashboard = () => import('@/views/RetailerDashboard.vue')
const RetailerOrders = () => import('@/views/RetailerOrders.vue')
const RetailerProductSearch = () => import('@/views/RetailerProductSearch.vue')
const VendorDashboard = () => import('@/views/VendorDashboard.vue')
const VendorProductCard = () => import('@/views/VendorProductCard.vue')
const VendorProducts = () => import('@/views/VendorProducts.vue')
const VendorAddProduct = () => import('@/views/VendorAddProduct.vue')
const VendorOrders = () => import('@/views/VendorOrders.vue')

const routes = [
  {
    path: '/retailer/cart',
    name: 'RetailerCart',
    component: RetailerCart
  },
  {
    path: '/retailer',
    name: 'RetailerDashboard',
    component: RetailerDashboard
  },
  {
    path: '/retailer/orders',
    name: 'RetailerOrders',
    component: RetailerOrders
  },
  {
    path: '/retailer/product-search',
    name: 'RetailerProductSearch',
    component: RetailerProductSearch
  },
  {
    path: '/vendor',
    name: 'VendorDashboard',
    component: VendorDashboard
  },
  {
    path: '/vendor/products/:slug',
    name: 'VendorProductCard',
    component: VendorProductCard
  },
  {
    path: '/vendor/products',
    name: 'VendorProducts',
    component: VendorProducts
  },
  {
    path: '/vendor/products/add',
    name: 'VendorAddProduct',
    component: VendorAddProduct
  },
  {
    path: '/vendor/orders',
    name: 'VendorOrders',
    component: VendorOrders
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
