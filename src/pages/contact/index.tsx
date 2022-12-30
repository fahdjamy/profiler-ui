import React, { Fragment } from 'react'
import Layout from '../../components/Layout'
import { ContactForm } from '../../components/contactComponent'
import Header from '../../components/common/header/Header'

const Contact: React.FC = () => {
  const Heading = 'Let us talk about solutions'
  return (
    <Layout>
        <Fragment>
          <div className='flex flex-col w-[100%] h-auto
           justify-center mx-auto lg:min-h-[50vh]'>
              <div className='flex flex-row w-[100%] bg-stone-200 justify-center
              items-center h-auto lg:h-[20vh] mb-[2rem]'>
                <div>
                  <Header title='work with me and bring your vision to life' styles='w-[100%] text-3xl' />
                </div>
         </div>
            <div className='flex flex-col md:flex-row
             border mx-auto w-[100%] items-center p-[1rem]
              md:w-auto lg:w-[65%] xl:space-y-6 2xl:w-[60%]'>
            <div className='w-[40%] flex flex-col'>
              <Header title={Heading} styles='text-2xl font-bold w-[100%] text-left' />
              <p className='text-sm'>Write me shortly about where I can help you and your company.</p>
                <p className='text-sm mt-[10px]'>I will ping you back very soon.</p>
            </div>
            <div className='w-[60%]'>
            <ContactForm />
            </div>
            </div>
            </div>
        </Fragment>
    </Layout>
  )
}

export default Contact
