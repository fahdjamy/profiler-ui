import React from 'react'
import { IBlog } from '../../mockS/mockBlogData'

interface BlogProps {
  blogPosts: IBlog[]
}

const BlogPage: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
  // <div className="bg-gray-200">
            <div className="container mx-auto w-full md:w-[60%] px-4">
                <div className="flex flex-wrap -mx-4">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="w-full md:w-1/2 px-4 py-6" >
                            <div className="bg-white rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out  bg-white  ">
                                 <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                                <h2 className="text-xl font-medium mb-2">
                                    {post.title}
                                </h2>
                                {/* <p className="text-gray-700 mb-4">
                                    {post.excerpt}
                                </p> */}
                                <a
                                    href={`/blog/${post.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))}
                      {/* </Responsive> */}
                </div>
            </div>
  // </div>
  )
}

export default BlogPage
