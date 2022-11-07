import React, { ReactElement } from 'react'

export interface ContainerProps {
  styles: undefined | string
  children?: undefined | ReactElement[] | ReactElement

}

const Container: React.FC<ContainerProps> = ({ styles, children }: ContainerProps) => {
  return (
        <div className={styles}>
            {children}
        </div>
  )
}
export default Container
