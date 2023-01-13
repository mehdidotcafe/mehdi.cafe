import styled from 'styled-components'

const BasicPage = styled.div`
  position: relative;
  max-width: 100vw;
  padding-top: ${(props) => (props.noPaddingTop ? 0 : props.theme.sectionDefaultPaddingTop)};

  ${(props) => props.theme.isLaptop} {
    padding-left: ${(props) => (props.noMargin ? 0 : 8)}%;
    padding-right: ${(props) => (props.noMargin ? 0 : 8)}%;
  }
`

export default BasicPage
