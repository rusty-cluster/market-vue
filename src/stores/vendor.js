import { defineStore } from 'pinia'
import { reactive } from 'vue'
import vendorClient from '@/api/vendor-client.js'

export const useVendorStore = defineStore('vendor', () => {
  const vendor = reactive({
    id: null,
    name: null,
    email: null,
  })

  async function register(vendorData) {
    try {
      Object.assign(vendor, await vendorClient.register(vendorData))
    } catch(error) {
      vendor.id = null
      return Promise.reject(error)
    }
  }

  async function login(vendorData) {
    try {
      Object.assign(vendor, await vendorClient.login(vendorData))
    } catch(error) {
      vendor.id = null
      return Promise.reject(error)
    }
  }

  async function show() {
    try {
      Object.assign(vendor, await vendorClient.show())
    } catch(error) {
      vendor.id = null
      return Promise.reject(error)
    }
  }

  return {
    vendor,
    register,
    login,
    show
  }
})
