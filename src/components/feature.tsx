import React, { Fragment } from 'react'
import Card from './common/cards/card'

export interface IFeatures {
  title: string
  text: string
  icon?: undefined | string
}

const Features: React.FC = () => {
  const Features: IFeatures[] = [
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
          <div className='flex flex-row w-screen h-auto justify-center mt-[1rem] mx-auto lg:min-h-[50vh] lg:mt-[4rem]'>
            <div className='flex flex-col w-[100%] items-center p-[1rem] lg:w-[80%] xl:w-[60%] xl:space-y-6'>
              <Card style=' flex flex-col space-y-4 w-[100%] mx-auto h-auto p-[1rem] items-center text-center lg:w-[50%] lg:p[2rem]' title={hed} text={content} />
              <div className='flex grid grid-rows-1 grid-flow-rows gap-4 lg:grid-cols-2 grid-flow-cols xl:grid-cols-3 grid-flow-cols'>
                  {
                      Features.map((item, index) => (
                          <Card style='flex flex-col justify-between p-[1rem] w-80 box-content text-left h-[90%]' key={index} title={item.title} text={item.text} />
                      ))
                  }
              </div>
            </div>
          </div>
        </Fragment>
  )
}
export default Features
