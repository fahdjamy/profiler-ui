import React from 'react'

export interface LogoProps {
  logo?: undefined | string
  text?: undefined | string
}

const Logo: React.FC<LogoProps> = ({ logo, text }: LogoProps) => {
  return (
    <React.Fragment>
        <img src={logo} className='h-[50px] w-[300px]' alt={text} />
    </React.Fragment>
  )
}
export default Logo
