/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { ReactElement } from 'react'
import Container from '../../common/container/container'
// import Logo from '../../common/logo/logo'
import { footerItems } from './footerItems'
// import LogoImage from '../../../assets/vrarts-logo.png'

export interface FooterProps {
  title?: undefined | string
}

const Footer: React.FC<FooterProps> = (): ReactElement => {
  return (
    <div className='flex flex-row w-[100%] justify-center mx-auto space-x-6 h-auto bg-gray-300 body-font font-Roboto md:h-[30vh]'>
    <Container styles='flex flex-col w-[100%] justify-center p-[5px] md:flex-row lg:w-[80%] 2xl:w-[60%] md:pt-[2rem]'>
        <div className='w-[100%] flex justify-center md:w-auto'>
          {/* <Logo logo={LogoImage}/> */}
          <p className='text-sm text-[#303030]'>
          {'Copyright © '} profile uri {new Date().getFullYear()}{' '}
          </p>
        </div>
        <div className='flex flex-col w-[100%] mx-auto justify-between md:ml-[2rem] md:flex-row w-3/4'>
          {footerItems && footerItems.map(({ heading, items }, index) => (
            <div className='w-[100%] flex flex-col px-[2px] md:w-2/4 md:px-[1rem] md:items-start' key={index}>
            <h2 className='text-[18px] text-[#303030]  space-y-6 font-semibold'>
              {heading}
            </h2>
            <nav className='mt-[1rem] '>
              {items.map(({ label }, index) =>
                (<p className='text-sm p-[4px] text-[#303030]' key={index}>{label}</p>))}
            </nav>
            </div>
          ))}
        </div>
    </Container>
    </div>
  )
}
export default Footer
