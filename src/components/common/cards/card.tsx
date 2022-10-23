import React, { ReactElement } from 'react'

export interface CardProps {
  text?: undefined | string
  style?: undefined | string
  title?: undefined | string
  icon?: undefined | string
  contentStyle?: undefined | string
  cardFooter?: undefined | string
  iconStyles?: undefined | string
  buttonComponent?: undefined | ReactElement[] | ReactElement
}

const Card: React.FC<CardProps> = ({ text, icon, title, contentStyle, style, cardFooter, iconStyles, buttonComponent }: CardProps) => {
  return (
    <div className={style}>
        <h1 className='text-2xl'>{title}</h1>
        <div className={contentStyle}>
        <p>{text}</p>
        <img className={iconStyles} src={icon} />
        <p>{cardFooter}</p>
        <div>{buttonComponent}</div>
        </div>
    </div>
  )
}

export default Card