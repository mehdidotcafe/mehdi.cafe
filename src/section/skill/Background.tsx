import styled from 'styled-components'

export default styled.div`
  position: absolute;
  height: 100vh;
  left: -35vh;
  top: 270vh;
  background-image: linear-gradient(to right, ${(props) => props.theme.gradiantColors.join(',')});
  width: 100vh;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
  z-index: -1;
`
