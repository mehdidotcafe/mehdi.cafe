import styled from 'styled-components'

const Item = styled.div`
  margin: 8px;
  ${(props) => props.isHidden && 'visibility: hidden;'}
  ${(props) => props.isHidden && 'height: 0px;'}
`

export default Item
