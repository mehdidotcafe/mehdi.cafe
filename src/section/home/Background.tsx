import styled from 'styled-components'

export default styled.div`
position: absolute;
top: -50vh;
height: 200vh;
left: -130vh;
background-image: linear-gradient(to right bottom, ${(props) => props.theme.gradiantColors.join(',')});
width: 250vh;
transform: rotate(-35deg);
`
