import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import retailerClient from '@/api/retailer-client.js'

export const useRetailerStore = defineStore('retailer', () => {
  const retailer = reactive({
    email: null,
    name: null,
    password: null
  })

  async function register(retailerData) {
    try {
      retailer.value = await retailerClient.register(retailerData)
    } catch(error) {
      retailer.value = {}

      return Promise.reject(error)
    }
  }

  return {
    retailer,
    register
  }
})
