import { createRouter, createWebHistory } from 'vue-router'

const RetailerCart = () => import('@/views/RetailerCart.vue')
const RetailerDashboard = () => import('@/views/RetailerDashboard.vue')
const RetailerOrders = () => import('@/views/RetailerOrders.vue')
const RetailerProductSearch = () => import('@/views/RetailerProductSearch.vue')
const VendorDashboard = () => import('@/views/VendorDashboard.vue')
const ProductCard = () => import('@/views/ProductCard.vue')
const ProductList = () => import('@/views/ProductList.vue')

const routes = [
  {
    path: '/retailer-cart',
    name: 'RetailerCart',
    component: RetailerCart
  },
  {
    path: '/retailer-dashboard',
    name: 'RetailerDashboard',
    component: RetailerDashboard
  },
  {
    path: '/retailer-orders',
    name: 'RetailerOrders',
    component: RetailerOrders
  },
  {
    path: '/retailer-product-search',
    name: 'RetailerProductSearch',
    component: RetailerProductSearch
  },
  {
    path: '/vendor-dashboard',
    name: 'VendorDashboard',
    component: VendorDashboard
  },
  {
    path: '/products/:slug',
    name: 'ProductCard',
    component: ProductCard
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
