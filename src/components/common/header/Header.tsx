import React, { Fragment } from 'react'

export interface HeaderProps {
  title: undefined | string
  styles: undefined | string
  subHeading?: undefined | string
}

const Header: React.FC<HeaderProps> = ({ title, styles, subHeading }: HeaderProps) => {
  return (
    <Fragment>
        <h1 className={styles}>{title}</h1>
        <p className='flex flex-col w-[100%] h-auto p-[0.75rem] text-center items-center'>{subHeading}</p>
    </Fragment>
  )
}
export default Header
