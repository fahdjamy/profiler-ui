/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IBlog {
  title: string
  description: string
  image: string
  content: string
}

export interface blogState {
  loading: 'PENDING' | 'FULFILLED'
  error: unknown
  blog: IBlog | null
}

const initialState = {
  loading: 'PENDING',
  error: null,
  blog: null
} as blogState
const namespace = 'fetchBlogs'

export const fetchBlogs = createAsyncThunk(
    `${namespace}/blogs`,
    async (credentials: Credential, {
      rejectWithValue
    }) => {
      try {
        const response = await fetch('blogs/all')
        return await response.json()
      } catch (error) {
        rejectWithValue(error)
      }
    }
)

const blogSlice = createSlice({
  name: `${namespace}`,
  initialState,
  reducers: {
    setBlog: (state, { payload }) => {
      state.blog = payload
    }
  }
})

export const { setBlog } = blogSlice.actions

export default blogSlice.reducer
