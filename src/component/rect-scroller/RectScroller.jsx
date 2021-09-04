import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  max-width: 100vw;

  ${(props) => props.theme.isPhone} {
    margin-left: -4%;
    margin-right: -4%;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 100vw;
    overflow-x: auto;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`

const Element = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  overflow: hidden;

  img {
    display: block;
    object-fit: cover;
  }

  * {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.isPhone} {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 8px;
    margin-right: 8px;
    min-width: 540px;
  }
`

function RectScroller({ children }) {
  return (
    <Container>
      { React.Children.map(children, (child) => (
        <Element>
          {child}
        </Element>
      ))}
    </Container>
  )
}

export default RectScroller
