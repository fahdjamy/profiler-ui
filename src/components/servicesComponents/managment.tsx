import React from 'react'
import Card from '../../components/common/cards/card'

export interface ServiceProps {
  title: undefined | string
  content: undefined | string
}

const ManagementService: React.FC = () => {
  const serviceManagement: ServiceProps[] = [
    {
      title: 'IDEA',
      content: 'Have just an idea or already a detailed description of your future product in hand? I can help you with my sincere feedback and refine the solution to a product that can be built and successfully launched.'
    },
    {
      title: 'EXECUTION',
      content: 'You know it. No idea gets a success story without a professional execution to bring the product to the customers.I have been doing this for over 2 decades and want to do a success story with you.'
    },
    {
      title: 'LIFE-CYCLE',
      content: 'Product launched? Have first customers?Great, and now its about improvements, maintenance, scalability, customer experience, systems integration... '
    }
  ]
  const hed = 'SaaS Product Management Services'
  const content = 'From product improvements to completely new Software as a Service Products'
  return (
    <div className='flex flex-row w-[100%] h-auto justify-center mt-[1rem] mx-auto lg:min-h-[50vh] lg:mt-[4rem]'>
      <div className='flex flex-col w-[100%] items-center p-[1rem] md:w-auto lg:w-[80%] xl:space-y-6 2xl:w-[60%]'>
        <Card titleStyle='font-black text-2xl' style='flex flex-col space-y-4 w-[100%] mx-auto h-auto p-[1rem] items-center text-center lg:w-[50%] lg:p[2rem]' title={hed} text={content} />
        <div className='flex grid grid-rows-1 grid-flow-rows gap-4 lg:grid-cols-2 grid-flow-cols xl:grid-cols-3 grid-flow-cols'>
          {
            serviceManagement.map((items, index) => (
              <Card key={index} title={items.title} text={items.content} titleStyle='text-xs font-bold' style='flex flex-col space-y-6 p-[0.25rem] w-80 box-content text-left h-[90%] border mb-[2rem]' />
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default ManagementService
