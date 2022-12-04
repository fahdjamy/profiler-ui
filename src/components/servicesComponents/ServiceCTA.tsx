import React from 'react'
import Button from '../common/button/Button'

const ServiceCTA: React.FC = () => {
  return (
    <div className='flex flex-row w-screen p-[1rem] justify-start mt-[1rem] space-y-2 mx-auto h-auto lg:w-[80%] lg:mt-[4rem] justify-center 2xl:w-[60%] mb-[2rem]'>
      <Button style='border w-[100%] bg-[#005584]  rounded-md p-[10px] text-white md:w-[auto]' title='Contact me to bring your product to life' />
    </div>
  )
}

export default ServiceCTA
