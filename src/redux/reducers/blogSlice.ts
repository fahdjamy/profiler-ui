import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BlogPosts, IBlog } from '../../mockS/mockBlogData'

interface BlogState {
  blogs: IBlog[]
  loading: boolean
  error: string | null
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<IBlog[]>) => {
      state.blogs = action.payload
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

export const { setBlogs, setLoading, setError } = blogSlice.actions

export const fetchBlogPosts = () => async (dispatch: any) => {
  try {
    dispatch(setLoading())
    const blogPosts = BlogPosts
    dispatch(setBlogs(blogPosts))
  } catch (error) {
    dispatch(setError('Error fetching blog posts'))
  }
}

export default blogSlice.reducer
