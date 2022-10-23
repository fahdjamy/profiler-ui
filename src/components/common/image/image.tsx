import React from 'react'

export interface ImageProps {
  imageFile?: undefined | string
  text?: undefined | string
}

const ImageComponent: React.FC<ImageProps> = ({ imageFile, text }: ImageProps) => {
  return (
    <React.Fragment>
        <img src={imageFile} alt={text} />
    </React.Fragment>
  )
}
export default ImageComponent
