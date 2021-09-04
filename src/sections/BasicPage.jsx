import styled from 'styled-components'

const BasicPage = styled.div`
  position: relative;
  padding-top: 64px;
  max-width: 100vw;
  min-height: 100vh;
  padding-bottom: 32px;

  ${(props) => props.theme.isLaptop} {
    padding-left: ${(props) => (props.noMargin ? 0 : 12)}%;
    padding-right: ${(props) => (props.noMargin ? 0 : 12)}%;
  }
`

export default BasicPage
