import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => (props.center ? 'center' : 'none')};

  ${(props) => props.theme.isPhone} {
    ${(props) => (props.spaceAroundMob && 'justify-content: space-around')}
  }
`

export default Row
