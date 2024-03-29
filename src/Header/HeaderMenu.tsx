import styled from 'styled-components'

type Props = {
  isExpanded: boolean
  onClick: () => void
}

const HeaderMenu = ({ isExpanded, onClick }: Props) => (
  <Burger
    $isExpanded={isExpanded}
    onClick={onClick}
    type="submit"
    title="menu"
  >
    <span />
    <span />
    <span />
  </Burger>
)

const Burger = styled.button<{
  $isExpanded: boolean
}>`
margin-top: 20px;
margin-left: 32px;
margin-right: 32px;
width: 36px;
height: 24px;
position: absolute;
right: 0;
align-self: flex-start;
transform: rotate(0deg);
transition: .5s ease-in-out;
cursor: pointer;
z-index: 20;
display: none;

span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

span:nth-child(1) {
  top: ${(props) => (props.$isExpanded ? 0 : 0)}px;
  ${(props) => props.$isExpanded && 'left: 0;'}
  transform-origin: left center;
  ${(props) => props.$isExpanded && 'transform: rotate(45deg);'}
}

span:nth-child(2) {
  top: 10px;
  transform-origin: left center;
  ${(props) => props.$isExpanded && 'width: 0;'}
  ${(props) => props.$isExpanded && 'opacity: 0;'}
}

span:nth-child(3) {
  top: ${(props) => (props.$isExpanded ? 25 : 20)}px;
  ${(props) => props.$isExpanded && 'left: 0;'}
  transform-origin: left center;
  ${(props) => props.$isExpanded && 'transform: rotate(-45deg);'}
}

${(props) => props.theme.isPhone} {
  display: block;
}
`

export default HeaderMenu
