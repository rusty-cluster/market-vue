import { setupWorker } from 'msw'
import { restHandlers } from './restHandlers'

export const mockServiceWorker = setupWorker(...restHandlers)
