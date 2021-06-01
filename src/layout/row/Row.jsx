import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => (props.center ? 'center' : 'none')};

  @media only screen and (max-width: 1170px) {
    ${(props) => (props.spaceAroundMob && 'justify-content: space-around')}
  }
`

export default Row
