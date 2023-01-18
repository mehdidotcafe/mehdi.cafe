import {
  type MouseEvent, type ReactNode, useEffect,
  useRef, useState,
} from 'react'
import styled, { css } from 'styled-components'

const transitionDuration = 300

const Zoomable = ({
  children,
}: {
  children: ReactNode,
}) => {
  const [isZoom, setIsZoom] = useState<boolean>(false)
  const copiedElement = useRef<HTMLElement>()
  const containerRef = useRef<HTMLSpanElement | null>(null)
  const clickListenerRef = useRef<EventListener>((e) => {
    e.stopPropagation()
    if (clickListenerRef.current) {
      document.removeEventListener('click', clickListenerRef.current)
    }
    unzoom()
  })

  useEffect(() => () => {
    document.removeEventListener('click', clickListenerRef.current)
    removeCopiedElement()
  }, [])

  const removeCopiedElement = () => {
    if (copiedElement.current?.remove) {
      copiedElement.current.remove()
    } else if (copiedElement.current?.parentNode) {
      copiedElement.current.parentNode.removeChild(copiedElement.current)
    }
    copiedElement.current = undefined
  }

  const unzoom = () => {
    if (copiedElement.current) {
      copiedElement.current.style.transform = 'none'
      if (copiedElement.current.firstChild) {
        (copiedElement.current.firstChild as HTMLElement).style.transform = 'none'
      }
      setTimeout(() => {
        removeCopiedElement()
        setIsZoom(false)
      }, transitionDuration)
    }
  }

  const zoom = (event: MouseEvent) => {
    event.stopPropagation()

    if (containerRef.current) {
      const reelElement = containerRef.current
      const absolutePosition = reelElement.getBoundingClientRect()
      copiedElement.current = reelElement.cloneNode(true) as HTMLElement
      const scaledHeight = reelElement.clientHeight
      const scaledWidth = reelElement.clientWidth

      const windowWidth = window.innerWidth
        || window.innerWidth || document.documentElement.clientWidth
      const windowHeight = window.innerHeight
        || window.innerHeight || document.documentElement.clientHeight

      const scaleFactor = (windowWidth * 0.7) / reelElement.offsetWidth

      copiedElement.current.classList.add('zoomed')
      copiedElement.current.style.left = `${absolutePosition.left}px`
      copiedElement.current.style.top = `${absolutePosition.top}px`
      copiedElement.current.style.height = `${reelElement.clientHeight}px`
      copiedElement.current.style.width = `${reelElement.clientWidth}px`

      document.addEventListener('click', clickListenerRef.current)

      document.getElementsByTagName('body')[0].appendChild(copiedElement.current)
      setIsZoom(true)
      setTimeout(() => {
        if (copiedElement.current) {
          if (copiedElement.current.firstChild) {
            (copiedElement.current.firstChild as HTMLElement).style.transform = `scale(${scaleFactor})`
          }
          copiedElement.current.style.transform = `
                    translate(
                        calc((${windowWidth / 2}px - ${absolutePosition.left}px - ${scaledWidth / 2}px)),
                        calc((${windowHeight / 2}px - ${absolutePosition.top}px - ${scaledHeight / 2}px))
                    )
                `
        }
      }, 0)
    }
  }

  const toggleZoom = (event: MouseEvent) => {
    if (isZoom) {
      unzoom()
    } else {
      zoom(event)
    }
  }

  return (
    <span>
      <Container onClick={toggleZoom} ref={containerRef}>
        <SubContainer>
          {children}
        </SubContainer>
      </Container>
      {isZoom && <Background />}
    </span>
  )
}

const sharedContainer = css`
  display: block;
  cursor: pointer;
  transition: all .3s ease-in-out;
  height: 100%;
  width: 100%;
`

const SubContainer = styled.div`
  ${sharedContainer}
`

const Container = styled.span`
  ${sharedContainer}
  &.zoomed {
    position: fixed;
    transform-origin: center center;
    z-index: 99;
  }

  &.zoomed {
    ${SubContainer} {
      box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
      transition: all .3s all-in-out;
      position: relative;  
    }
  } 
`

const Background = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: fadeIn 0.3s;
  background-color:rgba(0, 0, 0, 0.6);
`

export default Zoomable
