import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDevelopment, develop } from '../../mockS/servicesData'

interface ServiceState {
  serviceList: IDevelopment[]
  loading: boolean
  error: string | null
}

const initialState: ServiceState = {
  serviceList: [],
  loading: false,
  error: null
}

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<IDevelopment[]>) => {
      state.serviceList = action.payload
      state.loading = false
      state.error = null
    },
    setLoading: (state) => {
      state.loading = true
      state.error = null
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { setServices, setLoading, setError } = serviceSlice.actions

export const fetchServices = () => async (dispatch: any) => {
  try {
    dispatch(setLoading())
    // make network call
    const services = develop
    dispatch(setServices(services))
  } catch (error) {
    dispatch(setError('Error fetching services'))
  }
}

export default serviceSlice.reducer
