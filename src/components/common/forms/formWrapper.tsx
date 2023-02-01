import React from 'react'

export interface WrapperProps {
  children: React.ReactNode[]
}

const FormWrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='flex flex-col w-[100%] lg:w-[45%]'>
        {children}
    </div>
  )
}

export default FormWrapper
