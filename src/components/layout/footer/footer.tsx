/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { ReactElement } from 'react'
import { footerItems } from './footerItems'

export interface FooterProps {
  title?: undefined | string
}

const Footer: React.FC<FooterProps> = (): ReactElement => {
  return (
    <div className='flex flex-row w-[100%] bg-slate-500 justify-center mx-auto space-x-6 h-[30vh]'>
       <div className='flex flex-row w-[70%] p-[2rem]'>
        <div>
          <h1>Logo Area</h1>
          <p>
          {'Copyright © '} profile uri {new Date().getFullYear()}{' '}
          </p>
        </div>
        <div className='flex flex-row w-3/4 justify-between ml-[2rem] '>
          {footerItems && footerItems.map(({ heading, items }, index) => (
            <div className='w-2/4 flex flex-col px-[1rem]' key={index}>
            <h2 className='text-2xl'>
              {heading}
            </h2>
            <nav>
              {items.map(({ label }, index) =>
                (<p key={index}>{label}</p>))}
            </nav>
            </div>
          ))}
        </div>
       </div>

    </div>
  )
}
export default Footer
