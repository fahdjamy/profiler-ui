export interface IBlog {
  id: number
  title: string
  excerpt: string
  body: string
  image: string
}
export const BlogPosts: IBlog[] = [
  {
    id: 1,
    title: 'How to make a pizza from scratch',
    excerpt: 'Making pizza from scratch can be a fun and rewarding experience. In this post, we will show you how to make a delicious pizza using fresh ingredients.',
    body: 'First, you will need to make the dough...',
    image: 'https://res.cloudinary.com/dykx1utnl/image/upload/v1674470107/test_image/Cars_7_Copy_2x_u4v3lg.jpg'
  },
  {
    id: 2,
    title: 'The benefits of meditation',
    excerpt: 'Meditation has been practiced for thousands of years and has been shown to have many benefits for both the mind and body. In this post, we will discuss some of the benefits of meditation.',
    body: 'Meditation has been shown to reduce stress...',
    image: 'https://res.cloudinary.com/dykx1utnl/image/upload/v1674470107/test_image/Cars_7_Copy_2x_u4v3lg.jpg'
  },
  {
    id: 3,
    title: 'The history of chocolate',
    excerpt: 'Chocolate has a rich history dating back to ancient civilizations. In this post, we will explore the history of chocolate and how it has evolved over time.',
    body: 'The history of chocolate can be traced back to the ancient Maya and Aztec civilizations...',
    image: 'https://res.cloudinary.com/dykx1utnl/image/upload/v1674470107/test_image/Cars_7_Copy_2x_u4v3lg.jpg'
  },
  {
    id: 4,
    title: 'The history of chocolate',
    excerpt: 'Chocolate has a rich history dating back to ancient civilizations. In this post, we will explore the history of chocolate and how it has evolved over time.',
    body: 'The history of chocolate can be traced back to the ancient Maya and Aztec civilizations...',
    image: 'https://res.cloudinary.com/dykx1utnl/image/upload/v1674470107/test_image/Cars_7_Copy_2x_u4v3lg.jpg'
  }
]
