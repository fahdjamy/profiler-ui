import React, { Fragment } from 'react'
import Layout from '../../components/Layout'
import BlogPage from '../../components/blogComponent/Blog'
import { BlogPosts } from '../../mockS/mockBlogData'

const Blog: React.FC = () => {
  return (
    <Layout>
        <Fragment>
          <BlogPage blogPosts={BlogPosts} />
        </Fragment>
    </Layout>
  )
}

export default Blog
