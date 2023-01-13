import { type ReactNode, useRef, useEffect } from 'react'

import Row from '@grid/Row'

type Props = {
  className?: string,
  children: ReactNode[]
  step: number,
}

const ScrollableRow = ({
  className,
  children,
  step,
}: Props) => {
  const rowRef = useRef<HTMLDivElement | null>(null)
  const directionRef = useRef<number>(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (rowRef.current) {
        rowRef.current.scrollBy({ left: step * directionRef.current, behavior: 'smooth' })

        if ((directionRef.current === 1
          && rowRef.current.scrollLeft + rowRef.current.clientWidth
            >= rowRef.current.scrollWidth)
          || (directionRef.current === -1 && rowRef.current.scrollLeft === 0)) {
          directionRef.current *= -1
        }
      }
    }, 1500)

    return () => {
      clearInterval(intervalId)
    }
  }, [step])

  return (
    <Row ref={rowRef} noWrap className={className}>
      {children}
    </Row>
  )
}

export default ScrollableRow
