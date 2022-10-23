import React from 'react'
import Card from './common/cards/card'
import one from '../assets/icons/1.png'
import two from '../assets/icons/2.png'
import three from '../assets/icons/3.png'
import four from '../assets/icons/4.png'

const WorkFlow: React.FC = () => {
  const workFlow = [
    {
      icon: two,
      footer: 'Delivery & Market Launch'
    },
    {
      icon: one,
      footer: 'Software Development'
    },
    {
      icon: three,
      footer: 'Business Requirements'
    },
    {
      icon: four,
      footer: 'Support & Improvements'
    }

  ]
  const heading = 'My Software & Product Development Process'
  const content = 'I will be your contact during the whole software development process.For projects, we can use your or our collaboration tools.'
  return (
        <div className='flex flex-row w-[100%] bg-slate-500 justify-center mx-auto h-[50vh]'>
            <div className='flex flex-col w-[90%]'>
                <Card style=' flex flex-col space-y-4 w-2/4 mx-auto h-auto p-[2rem] items-center' title={heading} text={content} />
                 <div className='flex justify-center grid grid-col-3 grid-flow-col gap-4 mt-[2rem]'>
                    {workFlow.map((item, index) => (
                        <Card key={index} icon={item.icon} cardFooter={item.footer} style='flex items-center border justify-center p-[1rem] space-y-6' iconStyles='w-[80px] h-[80px] items-center border' />
                    ))}
                 </div>

            </div>
        </div>
  )
}
export default WorkFlow
