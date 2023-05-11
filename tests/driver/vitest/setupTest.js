import {
  afterAll,
  afterEach,
  beforeAll
} from 'vitest'

import { mockServer } from './src/mocks/server'


beforeAll(() => mockServer.listen({ onUnhandledRequest: 'error' }))

afterAll(() => mockServer.close())

afterEach(() => mockServer.resetHandlers())
