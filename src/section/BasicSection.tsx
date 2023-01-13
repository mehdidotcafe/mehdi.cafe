import styled from 'styled-components'

type Props = {
  noPaddingTop?: boolean
  noMargin?: boolean
}

export default styled.section<Props>`
  z-index: 2;
  position: relative;
  max-width: 100vw;
  padding-top: ${(props) => (props.noPaddingTop ? 0 : props.theme.sectionDefaultPaddingTop)}px;

  ${(props) => props.theme.isLaptop} {
    padding-left: ${(props) => (props.noMargin ? 0 : 12)}%;
    padding-right: ${(props) => (props.noMargin ? 0 : 12)}%;
  }
`
