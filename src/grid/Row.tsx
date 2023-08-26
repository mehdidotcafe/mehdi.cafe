import styled from 'styled-components'

type Props = {
  $noWrap?: boolean
  $isCenter?: boolean
}

export default styled.div<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => (props.$noWrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => (props.$isCenter ? 'center' : 'none')};
`
