import { createRouter, createWebHistory } from 'vue-router'
import VendorDashboard from '@/views/VendorDashboard.vue'
import ProductCard from '@/views/ProductCard.vue'

const RetailerDashboard = () => import('@/views/RetailerDashboard.vue')

const routes = [
  {
    path: '/retailer',
    name: 'RetailerDashboard',
    component: RetailerDashboard
  },
  {
    path: '/vendor-dashboard',
    name: 'VendorDashboard',
    component: VendorDashboard
  },
  {
    path: '/products/:slug',
    component: ProductCard
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
