import { createRouter, createWebHistory } from 'vue-router'

const RetailerDashboard = () => import('@/views/RetailerDashboard.vue')

const routes = [
  {
    path: '/retailer',
    name: 'RetailerDashboard',
    component: RetailerDashboard
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
