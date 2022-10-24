import React, { Fragment } from 'react'
import Card from './common/cards/card'

const Features: React.FC = () => {
  const Features = [
    {
      title: 'SOFTWARE DEVELOPMENT',
      text: 'From understanding the problem you want to resolve over software architecture and development, you get the full service from one place.'
    },
    {
      title: 'PRODUCT DEVELOPMENT',
      text: 'From understanding the problem you want to resolve over software architecture and development, you get the full service from one place.'
    },
    {
      title: 'SOFTWARE DEVELOPMENT',
      text: 'You have a product to build. If you already have precise requirements or are in the idea stage, I will help you to get to the best possible software product.'
    }

  ]
  const hed = 'Solving Business Problems with Software Solutions'
  const content = 'With over 25 years of experience in software development, I have a diverse skill set that will suit your needs.I offer you my international and multi-disciplinary knowledge to help make your project or product successful!'
  return (
        <Fragment>

        <div className='flex flex-row w-[100%] bg-slate-500 justify-center mt-[2rem] mx-auto h-[80vh]'>
        <div className='flex flex-col w-[90%]'>
        <Card style=' flex flex-col space-y-4 w-2/4 mx-auto h-auto p-[2rem] items-center' title={hed} text={content} />
        <div className='flex justify-center grid grid-col-3 grid-flow-col gap-4 mt-[2rem]'>
            {
                Features.map((item, index) => (

                    <Card style='border rounded-md p-[1rem] w-80 box-content' contentStyle='text-s font-sans' key={index} title={item.title} text={item.text} />
                ))
            }
        </div>
        </div>

    </div>
        </Fragment>
  )
}
export default Features
