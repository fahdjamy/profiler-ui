import React from 'react'
import Button from '../common/button/Button'

const PortfolioCTA: React.FC = () => {
  return (
    <div className='flex flex-row w-[100%] bg-stone-200
     justify-center mx-auto h-auto lg:h-[20vh] mb-[2rem]'>
          <div className='flex flex-row w-[100%]
          lg:w-[80%] 2xl:w-[60%] items-center justify-center  '>
              <Button title='Enjoy my Experience' style='border
              p-[10px] bg-blue-800 text-white text-sm rounded-md' />
              <p className='text-center ml-[2rem] w-[100%]
              lg:w-[30%] p-[5px]'> -for Software Development & SaaS Product Management </p>
          </div>
          </div>
  )
}

export default PortfolioCTA
