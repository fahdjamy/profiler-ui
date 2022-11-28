import React, { ReactElement } from 'react'

export interface HeaderProps {
  leftComponents?: undefined | ReactElement[] | ReactElement
  rightComponents?: undefined | ReactElement[] | ReactElement
}

const Navbar: React.FC<HeaderProps> = (props: HeaderProps): ReactElement => {
  return (
    <React.Fragment>
      <div className="flex items-center h-20 shadow-md body-font font-Nunito sticky top-0 z-30 bg-white ">
        <div className="flex flex-row w-[100%] justify-between items-center h-[100%] mx-auto lg:w-[90%] 2xl:w-[60%] ">
            <div className="d-flex">{props.rightComponents}</div>
            <div className="w-[30%]">{props.leftComponents}</div>
        </div>
      </div>
</React.Fragment>
  )
}
export default Navbar
