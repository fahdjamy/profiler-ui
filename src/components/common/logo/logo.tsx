import React from 'react'
import { Link } from 'react-router-dom'

export interface LogoProps {
  logo?: undefined | string
  text?: undefined | string
}

const Logo: React.FC<LogoProps> = ({ logo, text }: LogoProps) => {
  return (
    <React.Fragment>
      <Link to='/'>
        <img src={logo} className='h-[50px] w-[300px]' alt={text} />
      </Link>
    </React.Fragment>
  )
}
export default Logo
