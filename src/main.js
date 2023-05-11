import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

if (process.env.NODE_ENV === 'development') {
  import('@/mocks/browser').then(({ mockServiceWorker }) => mockServiceWorker.start())
}

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('.app')
