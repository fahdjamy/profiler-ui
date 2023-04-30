import { combineReducers } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import blogSlice from './blogSlice'
import serviceSlice from './serviceSlice'

const rootReducer = combineReducers({
  login: loginSlice,
  blog: blogSlice,
  service: serviceSlice
})

export default rootReducer
