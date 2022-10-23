/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from '../reducers'

const createStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState
  })
  return store
}

const store = createStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default createStore
