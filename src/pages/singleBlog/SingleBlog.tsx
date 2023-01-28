import React from 'react'
import { useParams } from 'react-router-dom'
import { BlogPosts } from '../../mockS/mockBlogData'
import Layout from '../../components/Layout'

interface SingleBlogProps {
  match?: any
}

const SingleBlogPage: React.FC<SingleBlogProps> = () => {
  const { id } = useParams()
  const idValue = id ?? ''
  const blog = BlogPosts.find(blog => blog.id === parseInt(idValue))
  if (blog == null) {
    return null
  }
  return (
    <Layout>
        <div className="container mx-auto w-full md:w-[60%] px-4 mt-[4rem]">
        <h1 className="text-2xl font-medium mb-4">{blog.title}</h1>
         <img src={blog.image} alt={blog.title} className="w-full h-32 object-cover rounded-lg mb-4" />
        <div className="text-gray-800">{blog.excerpt}</div>
      </div>
    </Layout>
  )
}

export default SingleBlogPage
