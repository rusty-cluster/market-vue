import { defineStore } from 'pinia'
import { reactive } from 'vue'
import vendorClient from '@/api/vendor-client.js'

export const useVendorStore = defineStore('vendor', () => {
  const vendor = reactive({
    name: null,
    email: null,
    password: null,
  })

  async function register(vendorData) {
    try {
      vendor.value = await vendorClient.register(vendorData)
    } catch(error) {
      vendor.value = {}
      return Promise.reject(error)
    }
  }

  async function login(vendorData) {
    try {
      vendor.value = await vendorClient.login(vendorData)
    } catch(error) {
      vendor.value = {}
      return Promise.reject(error)
    }
  }

  return {
    vendor,
    register,
    login
  }
})
