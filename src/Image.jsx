import React from 'react'

function Image({
  src, alt, className, height, width,
}) {
  return (
    <picture className={className}>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img draggable="false" src={src} alt={alt || ''} className={className} height={height} width={width} />
    </picture>
  )
}

export default Image
