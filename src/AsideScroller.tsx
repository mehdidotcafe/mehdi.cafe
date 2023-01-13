import { Children, type ReactNode } from 'react'
import styled from 'styled-components'

const AsideScroller = ({
  children,
}: {
  children: ReactNode,
}) => (
  <Container>
    { Children.map(children, (child) => (
      <Element>
        {child}
      </Element>
    ))}
  </Container>
)

const Container = styled.aside`
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
    padding-top: 0;
    padding-bottom: 0;
  }
`

const Element = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  overflow: hidden;

  * {
    display: block;
  }

  ${(props) => props.theme.isPhone} {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 8px;
    margin-right: 8px;
    min-width: 540px;
  }
`

export default AsideScroller
