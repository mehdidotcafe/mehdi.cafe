import { useTheme } from 'styled-components'

import Image from '@Image'

type Props = {
  src: string,
  alt: string,
}

const BaseIcon = ({
  src, alt,
}: Props) => {
  const theme = useTheme()

  return <Image src={src} alt={alt} width={theme.iconSize} height={theme.iconSize} />
}

export default BaseIcon
