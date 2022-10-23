import React from 'react'
import Card from './common/cards/card'

const Skills: React.FC = () => {
  const heading = 'Software Development From Golang to the Cloud'
  const content = 'Software Programming and Infrastructure Skills'

  return (
    <div className='flex flex-row w-[100%] bg-slate-500 justify-center mx-auto h-[50vh]'>
         <div className='flex flex-col w-[90%]'>
         <Card style=' flex flex-col space-y-4 w-2/4 mx-auto h-auto p-[2rem] items-center' title={heading} text={content} />

        </div>
    </div>
  )
}
export default Skills
