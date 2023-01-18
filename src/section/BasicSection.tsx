import type { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  noPaddingTop?: boolean
  noMargin?: boolean
}

const Container = styled.section<Props>`
  z-index: 2;
  position: relative;
  max-width: 100vw;

  > div {
    padding-top: ${(props) => (props.noPaddingTop ? 0 : props.theme.sectionDefaultPaddingTop)}px;
    margin-top: auto;
    margin-bottom: auto;
  }

  ${(props) => props.theme.isLaptop} {
    padding-left: ${(props) => (props.noMargin ? 0 : 8)}%;
    padding-right: ${(props) => (props.noMargin ? 0 : 8)}%;
  }
`

const BasicSection = ({
  noPaddingTop,
  noMargin,
  children,
}: Props & {
  children: ReactNode
}) => (
  <Container noPaddingTop={noPaddingTop} noMargin={noMargin}>
    <div>
      {children}
    </div>
  </Container>
)

export default BasicSection
