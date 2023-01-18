import styled from 'styled-components'

type Props = {
  noMargin?: boolean
}

export default styled.h1<Props>`
  font-family: var(${(props) => props.theme.font.title});
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 4.5em;
  text-transform: uppercase;
  line-height: 1;

  ${(props) => props.theme.isPhone} {
    font-size: 3.5em;
  }

  ${(props) => !props.noMargin && 'margin-left: 16px'}
`
