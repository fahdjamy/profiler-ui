import React, { Fragment, useEffect } from 'react'
import Layout from '../../components/Layout'
import BlogPage from '../../components/blogComponent/Blog'
import { BlogPosts } from '../../mockS/mockBlogData'
import { useSelector, useDispatch } from 'react-redux'
import { setBlogs } from '../../redux/reducers/blogSlice'
import { RootState } from '../../redux/store/configureStore'

const Blog: React.FC = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state: RootState) => state.blog.blogs)
  useEffect(() => {
    dispatch(setBlogs(BlogPosts))
  }, [dispatch])

  return (
    <Layout>
        <Fragment>
          <BlogPage blogPosts={blogs} />
        </Fragment>
    </Layout>
  )
}

export default Blog
