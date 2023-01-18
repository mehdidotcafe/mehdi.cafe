import React from 'react'

export type ImageProps = {
  src: string,
  alt?: string,
  className?: string,
  height?: number,
  width?: number,
}

// @TODO: use next/image
const Image = ({
  src, alt = '', className, height, width,
}: ImageProps) => (
  <picture className={className}>
    <source srcSet={`${src}.webp`} type="image/webp" />
    <img draggable="false" src={src} alt={alt} className={className} height={height} width={width} />
  </picture>
)

export default Image
