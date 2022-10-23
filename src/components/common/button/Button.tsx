import React from 'react'

export interface ButtonProps {
  dataTestId?: string
  style?: undefined | string
  icon?: undefined | string
  isLoading?: undefined | boolean
  disabled?: undefined | boolean
  id?: undefined | string
  title?: undefined | string
  children?: undefined | string
}

const Button: React.FC<ButtonProps> = ({ title, dataTestId, children, isLoading, style, id, disabled }: ButtonProps) => {
  return (
        <button className={style} id={id} data-testid={dataTestId} disabled={disabled} >
            {children}
        </button>
  )
}

export default Button
