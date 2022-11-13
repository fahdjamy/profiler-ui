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
    <div className='flex flex-row w-[100%] justify-center mx-auto space-x-6 h-auto bg-gray-300 body-font font-Montserrat md:h-[30vh]'>
    <Container styles='flex flex-col w-[100%] p-[5px] md:flex-row w-[60%] md:p-[2rem]'>
        <div className='w-[100%] md:w-auto'>
          {/* <Logo logo={LogoImage}/> */}
          <p>
          {'Copyright © '} profile uri {new Date().getFullYear()}{' '}
          </p>
        </div>
        <div className='flex flex-col w-[100%] justify-between md:ml-[2rem] md:flex-row w-3/4 '>
          {footerItems && footerItems.map(({ heading, items }, index) => (
            <div className='w-[100%] flex flex-col px-[2px] items-center  md:w-2/4 md:px-[1rem]' key={index}>
            <h2 className='text-xl space-y-6'>
              {heading}
            </h2>
            <nav>
              {items.map(({ label }, index) =>
                (<p key={index}>{label}</p>))}
            </nav>
            </div>
          ))}
        </div>
    </Container>

    </div>
  )
}
export default Footer
