import React from 'react'
import Card from './common/cards/card'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export interface Testimonal {
  title: string
  message: string
  [key: string]: any

}

const Testimonial: React.FC = () => {
  const heading = 'A Few Words from my Customers'
  const Testimonials: Testimonal[] = [
    {
      title: 'COO VR arts',
      message: 'I did two startups with Stefan as CTO and Full-Stack Developer. I gave the vision, he did everything from architecture to offshore team building. For Car Compete he did a quite complex MVP in a month from scratch. I strongly recommend him.'
    },
    {
      title: 'CTO GUIOMENTOR',
      message: 'I did two startups with Stefan as CTO and Full-Stack Developer. I gave the vision, he did everything from architecture to offshore team building. For Car Compete he did a quite complex MVP in a month from scratch. I strongly recommend him.'
    },
    {
      title: 'C0-founder Wakelo',
      message: 'I did two startups with Stefan as CTO and Full-Stack Developer. I gave the vision, he did everything from architecture to offshore team building. For Car Compete he did a quite complex MVP in a month from scratch. I strongly recommend him.'
    }
  ]
  return (
        <div className='flex flex-row w-[100%] justify-center mx-auto h-[70vh]'>
        <div className='flex flex-col w-[90%]'>
            <Card style=' flex flex-col space-y-4 w-[100%] mx-auto h-auto p-[10px] text-center items-center lg:w-2/4 lg:p-[2rem]' title={heading} />
            <Carousel showStatus={false} centerMode={true} showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop={true} className='w-[100%] h-[100%] mx-auto lg:w-[60%]'>
                {
                  Testimonials.map((items, index) => (
                    <Card key={index} text={items.message} title={items.title} style='flex flex-col-reverse text-left items-center rounded-lg w-[70%] shadow-xl bg-white box-content h-[100%] justify-center p-[1rem]'/>
                  ))
                }
            </Carousel>
            </div>
            </div>
  )
}
export default Testimonial
