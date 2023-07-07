import { createRouter, createWebHistory } from 'vue-router'

const LandingPage = () => import('@/views/LandingPage.vue')
const RetailerCart = () => import('@/views/retailer/RetailerCart.vue')
const RetailerDashboard = () => import('@/views/retailer/RetailerDashboard.vue')
const RetailerLogin = () => import('@/views/retailer/RetailerLogin.vue')
const RetailerOrders = () => import('@/views/retailer/RetailerOrders.vue')
const RetailerProductSearch = () => import('@/views/retailer/RetailerProductSearch.vue')
const RetailerRegistration = () => import('@/views/retailer/RetailerRegistration.vue')
const VendorDashboard = () => import('@/views/vendor/VendorDashboard.vue')
const VendorRegistration = () => import('@/views/vendor/VendorRegistration.vue')
const VendorLogin = () => import('@/views/vendor/VendorLogin.vue')
const VendorProductCard = () => import('@/views/vendor/VendorProductCard.vue')
const VendorProducts = () => import('@/views/vendor/VendorProducts.vue')
const VendorProductAdd = () => import('@/views/vendor/VendorProductAdd.vue')
const VendorOrders = () => import('@/views/vendor/VendorOrders.vue')
const VendorCategories = () => import('@/views/vendor/VendorCategories.vue')
const VendorCategoryAdd = () => import('@/views/vendor/VendorCategoryAdd.vue')

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
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
    path: '/retailer/login',
    name: 'RetailerLogin',
    component: RetailerLogin
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
    path: '/retailer/registration',
    name: 'RetailerRegistration',
    component: RetailerRegistration
  },
  {
    path: '/vendor',
    name: 'VendorDashboard',
    component: VendorDashboard
  },
  {
    path: '/vendor/registration',
    name: 'VendorRegistration',
    component: VendorRegistration
  },
  {
    path: '/vendor/login',
    name: 'VendorLogin',
    component: VendorLogin
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
    name: 'VendorProductAdd',
    component: VendorProductAdd
  },
  {
    path: '/vendor/orders',
    name: 'VendorOrders',
    component: VendorOrders
  },
  {
    path: '/vendor/categories',
    name: 'VendorCategories',
    component: VendorCategories
  },
  {
    path: '/vendor/categories/add',
    name: 'VendorCategoryAdd',
    component: VendorCategoryAdd
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
