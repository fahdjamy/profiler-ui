import Header from '../common/header/Header'
import React from 'react'
import Card from '../common/cards/card'

export interface customersProps {
  icon?: undefined | string
  name?: undefined | string
}

const Customer: React.FC = () => {
  const hed = 'Software Development and Product Management Portfolio'
  const subTitle = 'Customers using product and services I was working on software solutions and SaaS products'

  const customers: customersProps[] = [
    {
      icon: '',
      name: 'Guiomentor'
    },
    {
      icon: '',
      name: 'virtual realm arts'
    },
    {
      icon: '',
      name: 'Andela Uganda'
    },
    {
      icon: '',
      name: 'Hackerbay'
    }
  ]

  return (
    <div className='flex flex-row w-[100%]
    h-auto justify-center mt-[1rem] mx-auto
    lg:min-h-[50vh] lg:mt-[4rem]'>
         <div className='flex flex-col w-[100%]
        items-center p-[1rem] md:w-auto lg:w-[80%] 2xl:w-[60%]'>
            <Card title={hed} titleStyle='text-5xl font-bold w-[100%] mx-auto
             lg:w-[80%] text-center'/>
            <Header title={subTitle} styles='text-3xl font-bold w-[100%]
             lg:w-[50%] mx-auto text-center mt-[4rem]' />
            <div className='flex grid place-items-center
             grid-rows-1 grid-flow-rows gap-4 lg:grid-cols-2
             grid-flow-cols xl:grid-cols-4 grid-flow-cols mt-[4rem]'>
                {
                    customers.map((item, index) => (
                    <Card key={index} title={item.name} style='p-[5px]
                     h-[5rem] flex items-center' titleStyle='text-xl
                     font-semibold' />
                    ))
                }
            </div>
        </div>
    </div>

  )
}

export default Customer
