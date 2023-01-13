import styled from 'styled-components'

type Props = {
  noWrap?: boolean
  center?: boolean
}

export default styled.div<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => (props.center ? 'center' : 'none')};
`
