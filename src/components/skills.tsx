import React from 'react'
import Card from './common/cards/card'
import Header from './common/header/Header'

export interface ISkils {
  title: string
  stack: string[]
}

const Skills: React.FC = () => {
  const techStack: ISkils[] = [
    {
      title: 'PROGRAMMING LANGUAGES',
      stack: [
        'Go', 'Java', 'Python', 'PHP'
      ]
    },
    {
      title: 'FRONTEND FRAMEWORKS & LIBRARIES',
      stack: [
        'React', 'vue', 'selvet', 'React-native'
      ]

    },
    {
      title: 'DATABASES & MESSAGE QUEUE',
      stack: ['maria', 'kafka', 'mongoDB', 'postgresql', 'RabbitMQ', 'Neo4js']
    }
  ]
  const heading = 'Software Development From Golang to the Cloud'
  const content = 'Software Programming and Infrastructure Skills'

  return (
    <div className='flex flex-row w-[100%] h-auto justify-center mx-auto lg:min-h-[90vh] my-[2rem]'>
         <div className='flex flex-col w-[100%] md:w-[60%] justify-around'>
         <Header styles=' flex flex-col w-[100%] h-auto p-[1rem] text-3xl text-center items-center lg:space-y-4 lg:w-[80%] mx-auto lg:p-[1rem]' title={heading} subHeading={content} />
         {
          techStack.map(({ title, stack }, index) => (
            <div key={index} className='flex flex-col justify-around w-[100%] mx-auto h-[100%] lg:w-[60%] px-[5px]'>
              <Card key={index} title={title} />
              <div className='border-l-0 h-[100%] flex flex-col justify-between py-[10px] lg:border-l-2'>
                {
                  stack.map((items, index) => (
                    <p className='pl-[10px]' key={index}>{items}</p>
                  ))
                }
              </div>
            </div>
          ))
         }
         <div className='flex flex-row border rounded-3xl bg-gray-300 p-[8px] mx-auto items-center'>
          <p className='text-xs font-bold'>WHERE I USED THIS SOFTWARE DEVELOPMENT SKILLS</p><span className='ml-[2rem]'>view full portfolio</span>
         </div>
        </div>
    </div>
  )
}
export default Skills
