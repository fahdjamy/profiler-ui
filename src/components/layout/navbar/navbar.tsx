import React, { ReactElement } from 'react'

export interface HeaderProps {
  leftComponents?: undefined | ReactElement[] | ReactElement
  rightComponents?: undefined | ReactElement[] | ReactElement
}

const Navbar: React.FC<HeaderProps> = (props: HeaderProps): ReactElement => {
  return (
    <React.Fragment>
        <div className="flex flex-row justify-between items-center h-20 px-[1rem] shadow-md">
            <div className="d-flex">{props.rightComponents}</div>
            <div className="w-[30%]">{props.leftComponents}</div>
        </div>
</React.Fragment>
  )
}
export default Navbar
