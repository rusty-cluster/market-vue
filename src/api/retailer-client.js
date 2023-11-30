const back = import.meta.env.VITE_BACK

export default {
  async login(retailer) {
    try {
      const response = await fetch(`${back}/retailers/log_in`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(retailer),
      })
      
      const data = (await response.json()).data

      if (response.status != 201) { throw data }
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async register(retailer) {
    try {
      const response = await fetch(`${back}/retailers/register`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(retailer),
      })
      
      const data = (await response.json()).data

      if (response.status != 201) { throw data }
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
