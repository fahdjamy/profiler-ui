import React, { ReactElement } from 'react'

export interface ContainerProps {
  styles?: string
  children?: ReactElement[] | ReactElement
}

const Container: React.FC<ContainerProps> = ({ styles = 'flex flex-col w-screen mt-[4rem] p-[1rem] justify-start mx-auto min-h-[60vh] lg:w-[77%] md:flex-row justify-between 2xl:w-[60%] body-font font-Nunito', children }: ContainerProps) => {
  return (
    <div className={styles}>
      {children}
    </div>
  )
}

export default Container
