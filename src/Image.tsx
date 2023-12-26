export type ImageProps = {
  src: string,
  alt?: string,
  className?: string,
  height?: number,
  width?: number,
  type?: string,
}

// @TODO: use next/image
const Image = ({
  src, alt = '', className, height, width, type = 'webp',
}: ImageProps) => {
  const fileExt = type === 'webp' ? `.${type}` : ''
  return (
    <picture className={className}>
      <source srcSet={`${src}${fileExt}`} type={`image/${type}`} />
      <img draggable="false" src={src} alt={alt} className={className} height={height} width={width} style={{ objectFit: 'contain' }} />
    </picture>
  )
}

export default Image
