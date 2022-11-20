import React from 'react'
import Card from './common/cards/card'
import Header from './common/header/Header'
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
        <div className='flex flex-row w-[100%] bg-stone-100 justify-center mx-auto h-auto md:h-[50vh] lg:h-[60vh]'>
            <div className='flex flex-col w-[100%] lg:w-[80%] 2xl:w-[60%] '>
                <Header styles=' flex flex-col space-y-4 w-[100%] text-center mx-auto h-auto p-[1rem] text-3xl items-center lg:w-[60%] lg:p-[2rem]' title={heading} subHeading={content} />
                 <div className='flex justify-center grid grid-rows-4 grid-flow-cols gap-4 mt-[2rem] md:grid-cols-4 grid-flow-cols'>
                    {workFlow.map((item, index) => (
                        <Card key={index} icon={item.icon} cardFooter={item.footer} style='flex flex-col items-center justify-between p-[1rem] space-y-4' iconStyles='w-[80px] h-[80px] mx-auto' />
                    ))}
                 </div>

            </div>
        </div>
  )
}
export default WorkFlow
