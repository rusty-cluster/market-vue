const back = import.meta.env.VITE_BACK

export default {
  async register(vendor) {
    try {
      const response = await fetch(`${back}/vendors/register`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vendor),
      })

      const data = (await response.json())
      if (response.status != 201) { throw data }

      return data
    } catch(error) {
      return Promise.reject(error)
    }
  },

  async login(vendor) {
    try {
      const response = await fetch(`${back}/vendors/log_in`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vendor),
      })

      const data = (await response.json())

      if (response.status != 201) { throw data }
      return data
    } catch(error) {
      return Promise.reject(error)
    }
  }
}
