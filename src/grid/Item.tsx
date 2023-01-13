import styled from 'styled-components'

type Props = {
  isHidden?: boolean
}

export default styled.div<Props>`
  margin: 8px;
  ${(props) => props.isHidden && 'visibility: hidden;'}
  ${(props) => props.isHidden && 'height: 0px;'}
`
