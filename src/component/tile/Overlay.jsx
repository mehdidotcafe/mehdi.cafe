import styled from 'styled-components'

export const Overlay = styled.span`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
justify-content: center;
color: white;
font-family: 'Oswald', sans-serif;
font-size: 28px;
background-color: ${(props) => props.theme.mainColor};
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
text-transform: lowercase;

${(props) => props.theme.isPhone} {
  font-size: 22px;
}
`

export default Overlay
