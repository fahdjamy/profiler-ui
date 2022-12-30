import React from 'react'

export interface ImageProps {
  imageFile?: undefined | string
  text?: undefined | string
  style?: undefined | string
}

const ImageComponent: React.FC<ImageProps> = ({ imageFile, text, style }: ImageProps) => {
  return (
    <React.Fragment>
        <img src={imageFile} alt={text} className={style} />
    </React.Fragment>
  )
}
export default ImageComponent
