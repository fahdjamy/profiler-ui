import React from 'react'
import Header from '../common/header/Header'
import Card from '../common/cards/card'

export interface IDevelopment {
  icon?: undefined | string
  title?: undefined | string
  content?: undefined | string
}

const Development: React.FC = () => {
  const develop: IDevelopment[] = [
    {
      title: 'SOFTWARE REQUIREMENTS',
      icon: '',
      content: 'A Solution can never be better than how we recognize the problem which should be solved. From that point to the solution definitions, you get all from me, based on decades of experience'
    },
    {
      title: 'SOFTWARE ARCHITECTURE',
      icon: '',
      content: 'Knowing the requirements its time to define the best fit to be used Tech Stack and the building blocks of the software architecture.'
    },
    {
      title: 'PROJECT AND TEAM MANAGEMENT',
      icon: '',
      content: 'Leading international projects and building multidisciplinary and agile software teams give me the perfect mix of what I can use to lead your project and team(s)'
    },
    {
      title: 'MESSAGING AND IOT APPLICATIONS',
      icon: '',
      content: 'For over 15 years I am involved in omnichannel Messaging related Software and IoT Use Case implementations.Lets share this experience and skills together.'
    }
  ]
  const heading = 'Agile Software Development Services'
  const content = 'Planning, Analysis, Product Design, Development & Implementation, Testing, Maintenance'
  return (
    <div className='flex flex-col w-screen p-[1rem] justify-start mt-[1rem] space-y-2 mx-auto h-auto lg:w-[80%] lg:mt-[4rem] justify-between 2xl:w-[60%]'>
        <Header styles=' flex flex-col w-[100%] h-auto p-[1rem] text-3xl text-center items-center lg:space-y-4 lg:w-[70%] mx-auto lg:p-[1rem]' title={heading} subHeading={content} />
            <div className='flex grid grid-rows-1 grid-flow-rows gap-4 lg:grid-cols-2 grid-flow-cols xl:grid-cols-3 grid-flow-cols'>
                {
                    develop.map((projects, index) => (
                        <Card key={index} titleStyle='text-xs font-bold' contentStyle='text-base text-[#3D3D3D]' style='flex flex-col space-y-6 p-[0.25rem] w-80 box-content text-left h-[90%] border' title={projects.title} text={projects.content} />
                    ))
                }
            </div>
    </div>
  )
}

export default Development
