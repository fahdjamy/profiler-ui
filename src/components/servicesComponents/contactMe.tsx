import React from 'react'
import Button from '../common/button/Button'

const ContactMe: React.FC = () => {
  return (
    <div className='flex flex-row w-screen p-[1rem] justify-start mt-[1rem] space-y-2 mx-auto h-auto lg:w-[80%] lg:mt-[4rem] justify-center 2xl:w-[60%]'>
        <Button style='border w-[100%] bg-[#005584]  rounded-md p-[5px] text-white md:w-[7rem]' title='Contact me' />
        <p className='ml-[2rem]'> I 😻 to develop software for you</p>
    </div>
  )
}

export default ContactMe
