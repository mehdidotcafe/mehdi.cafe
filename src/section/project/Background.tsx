import styled from 'styled-components'

export default styled.div`
  position: absolute;
  bottom: -155vh;
  height: 100vh;
  right: -75vh;
  background-image: linear-gradient(to left top, ${(props) => props.theme.gradiantColors.join(',')});
  width: 100vh;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
  z-index: -1;
`
